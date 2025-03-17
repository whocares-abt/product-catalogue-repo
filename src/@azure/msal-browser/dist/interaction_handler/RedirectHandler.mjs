/*! @azure/msal-browser v4.7.0 2025-03-11 */
'use strict';
import { createClientAuthError, ClientAuthErrorCodes, ServerError, invokeAsync, PerformanceEvents } from '@azure/msal-common/browser';
import { createBrowserAuthError } from '../error/BrowserAuthError.mjs';
import { TemporaryCacheKeys, ApiId } from '../utils/BrowserConstants.mjs';
import { emptyNavigateUri, userCancelled } from '../error/BrowserAuthErrorCodes.mjs';

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class RedirectHandler {
    constructor(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) {
        this.authModule = authCodeModule;
        this.browserStorage = storageImpl;
        this.authCodeRequest = authCodeRequest;
        this.logger = logger;
        this.performanceClient = performanceClient;
    }
    /**
     * Redirects window to given URL.
     * @param urlNavigate
     */
    async initiateAuthRequest(requestUrl, params) {
        this.logger.verbose("RedirectHandler.initiateAuthRequest called");
        // Navigate if valid URL
        if (requestUrl) {
            // Cache start page, returns to this page after redirectUri if navigateToLoginRequestUrl is true
            if (params.redirectStartPage) {
                this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page");
                this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, params.redirectStartPage, true);
            }
            // Set interaction status in the library.
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, this.authCodeRequest.correlationId, true);
            this.browserStorage.cacheCodeRequest(this.authCodeRequest);
            this.logger.infoPii(`RedirectHandler.initiateAuthRequest: Navigate to: ${requestUrl}`);
            const navigationOptions = {
                apiId: ApiId.acquireTokenRedirect,
                timeout: params.redirectTimeout,
                noHistory: false,
            };
            // If onRedirectNavigate is implemented, invoke it and provide requestUrl
            if (typeof params.onRedirectNavigate === "function") {
                this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
                const navigate = params.onRedirectNavigate(requestUrl);
                // Returning false from onRedirectNavigate will stop navigation
                if (navigate !== false) {
                    this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
                    await params.navigationClient.navigateExternal(requestUrl, navigationOptions);
                    return;
                }
                else {
                    this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
                    return;
                }
            }
            else {
                // Navigate window to request URL
                this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
                await params.navigationClient.navigateExternal(requestUrl, navigationOptions);
                return;
            }
        }
        else {
            // Throw error if request URL is empty.
            this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
            throw createBrowserAuthError(emptyNavigateUri);
        }
    }
    /**
     * Handle authorization code response in the window.
     * @param hash
     */
    async handleCodeResponse(response, state) {
        this.logger.verbose("RedirectHandler.handleCodeResponse called");
        // Interaction is completed - remove interaction status.
        this.browserStorage.setInteractionInProgress(false);
        // Handle code response.
        const stateKey = this.browserStorage.generateStateKey(state);
        const requestState = this.browserStorage.getTemporaryCache(stateKey);
        if (!requestState) {
            throw createClientAuthError(ClientAuthErrorCodes.stateNotFound, "Cached State");
        }
        let authCodeResponse;
        try {
            authCodeResponse = this.authModule.handleFragmentResponse(response, requestState);
        }
        catch (e) {
            if (e instanceof ServerError &&
                e.subError === userCancelled) {
                // Translate server error caused by user closing native prompt to corresponding first class MSAL error
                throw createBrowserAuthError(userCancelled);
            }
            else {
                throw e;
            }
        }
        // Get cached items
        const nonceKey = this.browserStorage.generateNonceKey(requestState);
        const cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
        // Assign code to request
        this.authCodeRequest.code = authCodeResponse.code;
        // Check for new cloud instance
        if (authCodeResponse.cloud_instance_host_name) {
            await invokeAsync(this.authModule.updateAuthority.bind(this.authModule), PerformanceEvents.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, this.authCodeRequest.correlationId)(authCodeResponse.cloud_instance_host_name, this.authCodeRequest.correlationId);
        }
        authCodeResponse.nonce = cachedNonce || undefined;
        authCodeResponse.state = requestState;
        // Add CCS parameters if available
        if (authCodeResponse.client_info) {
            this.authCodeRequest.clientInfo = authCodeResponse.client_info;
        }
        else {
            const cachedCcsCred = this.checkCcsCredentials();
            if (cachedCcsCred) {
                this.authCodeRequest.ccsCredential = cachedCcsCred;
            }
        }
        // Acquire token with retrieved code.
        const tokenResponse = (await this.authModule.acquireToken(this.authCodeRequest, authCodeResponse));
        this.browserStorage.cleanRequestByState(state);
        return tokenResponse;
    }
    /**
     * Looks up ccs creds in the cache
     */
    checkCcsCredentials() {
        // Look up ccs credential in temp cache
        const cachedCcsCred = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, true);
        if (cachedCcsCred) {
            try {
                return JSON.parse(cachedCcsCred);
            }
            catch (e) {
                this.authModule.logger.error("Cache credential could not be parsed");
                this.authModule.logger.errorPii(`Cache credential could not be parsed: ${cachedCcsCred}`);
            }
        }
        return null;
    }
}

export { RedirectHandler };
//# sourceMappingURL=RedirectHandler.mjs.map
