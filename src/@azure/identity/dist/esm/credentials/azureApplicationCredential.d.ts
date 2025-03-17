import type { AzureApplicationCredentialOptions } from "./azureApplicationCredentialOptions.js";
import { ChainedTokenCredential } from "./chainedTokenCredential.js";
/**
 * Provides a default {@link ChainedTokenCredential} configuration that should
 * work for most applications that use the Azure SDK.
 */
export declare class AzureApplicationCredential extends ChainedTokenCredential {
    /**
     * Creates an instance of the AzureApplicationCredential class.
     *
     * The AzureApplicationCredential provides a default {@link ChainedTokenCredential} configuration that should
     * work for most applications deployed on Azure. The following credential types will be tried, in order:
     *
     * - {@link EnvironmentCredential}
     * - {@link ManagedIdentityCredential}
     *
     * Consult the documentation of these credential types for more information
     * on how they attempt authentication.
     *
     * @param options - Optional parameters. See {@link AzureApplicationCredentialOptions}.
     */
    constructor(options?: AzureApplicationCredentialOptions);
}
//# sourceMappingURL=azureApplicationCredential.d.ts.map