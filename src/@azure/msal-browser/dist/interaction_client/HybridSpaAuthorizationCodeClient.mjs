/*! @azure/msal-browser v4.7.0 2025-03-11 */
'use strict';
import { AuthorizationCodeClient } from '@azure/msal-common/browser';

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class HybridSpaAuthorizationCodeClient extends AuthorizationCodeClient {
    constructor(config) {
        super(config);
        this.includeRedirectUri = false;
    }
}

export { HybridSpaAuthorizationCodeClient };
//# sourceMappingURL=HybridSpaAuthorizationCodeClient.mjs.map
