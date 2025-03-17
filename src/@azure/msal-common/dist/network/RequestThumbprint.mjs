/*! @azure/msal-common v15.2.1 2025-03-11 */
'use strict';
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function getRequestThumbprint(clientId, request, homeAccountId) {
    return {
        clientId: clientId,
        authority: request.authority,
        scopes: request.scopes,
        homeAccountIdentifier: homeAccountId,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid,
        embeddedClientId: request.embeddedClientId || request.tokenBodyParameters?.clientId,
    };
}

export { getRequestThumbprint };
//# sourceMappingURL=RequestThumbprint.mjs.map
