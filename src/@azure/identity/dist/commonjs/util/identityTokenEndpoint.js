"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdentityTokenEndpointSuffix = getIdentityTokenEndpointSuffix;
function getIdentityTokenEndpointSuffix(tenantId) {
    if (tenantId === "adfs") {
        return "oauth2/token";
    }
    else {
        return "oauth2/v2.0/token";
    }
}
//# sourceMappingURL=identityTokenEndpoint.js.map