/*! @azure/msal-node v3.3.0 2025-03-11 */
'use strict';
import { RequestParameterBuilder, UrlString } from '@azure/msal-common/node';
import { MANAGED_IDENTITY_MAX_RETRIES, MANAGED_IDENTITY_RETRY_DELAY, MANAGED_IDENTITY_HTTP_STATUS_CODES_TO_RETRY_ON } from '../utils/Constants.mjs';
import { LinearRetryPolicy } from '../retry/LinearRetryPolicy.mjs';

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class ManagedIdentityRequestParameters {
    constructor(httpMethod, endpoint, retryPolicy) {
        this.httpMethod = httpMethod;
        this._baseEndpoint = endpoint;
        this.headers = {};
        this.bodyParameters = {};
        this.queryParameters = {};
        const defaultRetryPolicy = new LinearRetryPolicy(MANAGED_IDENTITY_MAX_RETRIES, MANAGED_IDENTITY_RETRY_DELAY, MANAGED_IDENTITY_HTTP_STATUS_CODES_TO_RETRY_ON);
        this.retryPolicy = retryPolicy || defaultRetryPolicy;
    }
    computeUri() {
        const parameterBuilder = new RequestParameterBuilder();
        if (this.queryParameters) {
            parameterBuilder.addExtraQueryParameters(this.queryParameters);
        }
        const queryParametersString = parameterBuilder.createQueryString();
        return UrlString.appendQueryString(this._baseEndpoint, queryParametersString);
    }
    computeParametersBodyString() {
        const parameterBuilder = new RequestParameterBuilder();
        if (this.bodyParameters) {
            parameterBuilder.addExtraQueryParameters(this.bodyParameters);
        }
        return parameterBuilder.createQueryString();
    }
}

export { ManagedIdentityRequestParameters };
//# sourceMappingURL=ManagedIdentityRequestParameters.mjs.map
