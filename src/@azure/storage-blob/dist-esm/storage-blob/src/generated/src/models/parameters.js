/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { BlobServiceProperties as BlobServicePropertiesMapper, KeyInfo as KeyInfoMapper, QueryRequest as QueryRequestMapper, BlobTags as BlobTagsMapper, BlockLookupList as BlockLookupListMapper, } from "../models/mappers";
export const contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/xml",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String",
        },
    },
};
export const blobServiceProperties = {
    parameterPath: "blobServiceProperties",
    mapper: BlobServicePropertiesMapper,
};
export const accept = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/xml",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String",
        },
    },
};
export const url = {
    parameterPath: "url",
    mapper: {
        serializedName: "url",
        required: true,
        xmlName: "url",
        type: {
            name: "String",
        },
    },
    skipEncoding: true,
};
export const restype = {
    parameterPath: "restype",
    mapper: {
        defaultValue: "service",
        isConstant: true,
        serializedName: "restype",
        type: {
            name: "String",
        },
    },
};
export const comp = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "properties",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const timeoutInSeconds = {
    parameterPath: ["options", "timeoutInSeconds"],
    mapper: {
        constraints: {
            InclusiveMinimum: 0,
        },
        serializedName: "timeout",
        xmlName: "timeout",
        type: {
            name: "Number",
        },
    },
};
export const version = {
    parameterPath: "version",
    mapper: {
        defaultValue: "2025-01-05",
        isConstant: true,
        serializedName: "x-ms-version",
        type: {
            name: "String",
        },
    },
};
export const requestId = {
    parameterPath: ["options", "requestId"],
    mapper: {
        serializedName: "x-ms-client-request-id",
        xmlName: "x-ms-client-request-id",
        type: {
            name: "String",
        },
    },
};
export const accept1 = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/xml",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String",
        },
    },
};
export const comp1 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "stats",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const comp2 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "list",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const prefix = {
    parameterPath: ["options", "prefix"],
    mapper: {
        serializedName: "prefix",
        xmlName: "prefix",
        type: {
            name: "String",
        },
    },
};
export const marker = {
    parameterPath: ["options", "marker"],
    mapper: {
        serializedName: "marker",
        xmlName: "marker",
        type: {
            name: "String",
        },
    },
};
export const maxPageSize = {
    parameterPath: ["options", "maxPageSize"],
    mapper: {
        constraints: {
            InclusiveMinimum: 1,
        },
        serializedName: "maxresults",
        xmlName: "maxresults",
        type: {
            name: "Number",
        },
    },
};
export const include = {
    parameterPath: ["options", "include"],
    mapper: {
        serializedName: "include",
        xmlName: "include",
        xmlElementName: "ListContainersIncludeType",
        type: {
            name: "Sequence",
            element: {
                type: {
                    name: "Enum",
                    allowedValues: ["metadata", "deleted", "system"],
                },
            },
        },
    },
    collectionFormat: "CSV",
};
export const keyInfo = {
    parameterPath: "keyInfo",
    mapper: KeyInfoMapper,
};
export const comp3 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "userdelegationkey",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const restype1 = {
    parameterPath: "restype",
    mapper: {
        defaultValue: "account",
        isConstant: true,
        serializedName: "restype",
        type: {
            name: "String",
        },
    },
};
export const body = {
    parameterPath: "body",
    mapper: {
        serializedName: "body",
        required: true,
        xmlName: "body",
        type: {
            name: "Stream",
        },
    },
};
export const comp4 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "batch",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const contentLength = {
    parameterPath: "contentLength",
    mapper: {
        serializedName: "Content-Length",
        required: true,
        xmlName: "Content-Length",
        type: {
            name: "Number",
        },
    },
};
export const multipartContentType = {
    parameterPath: "multipartContentType",
    mapper: {
        serializedName: "Content-Type",
        required: true,
        xmlName: "Content-Type",
        type: {
            name: "String",
        },
    },
};
export const comp5 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "blobs",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const where = {
    parameterPath: ["options", "where"],
    mapper: {
        serializedName: "where",
        xmlName: "where",
        type: {
            name: "String",
        },
    },
};
export const restype2 = {
    parameterPath: "restype",
    mapper: {
        defaultValue: "container",
        isConstant: true,
        serializedName: "restype",
        type: {
            name: "String",
        },
    },
};
export const metadata = {
    parameterPath: ["options", "metadata"],
    mapper: {
        serializedName: "x-ms-meta",
        xmlName: "x-ms-meta",
        headerCollectionPrefix: "x-ms-meta-",
        type: {
            name: "Dictionary",
            value: { type: { name: "String" } },
        },
    },
};
export const access = {
    parameterPath: ["options", "access"],
    mapper: {
        serializedName: "x-ms-blob-public-access",
        xmlName: "x-ms-blob-public-access",
        type: {
            name: "Enum",
            allowedValues: ["container", "blob"],
        },
    },
};
export const defaultEncryptionScope = {
    parameterPath: [
        "options",
        "containerEncryptionScope",
        "defaultEncryptionScope",
    ],
    mapper: {
        serializedName: "x-ms-default-encryption-scope",
        xmlName: "x-ms-default-encryption-scope",
        type: {
            name: "String",
        },
    },
};
export const preventEncryptionScopeOverride = {
    parameterPath: [
        "options",
        "containerEncryptionScope",
        "preventEncryptionScopeOverride",
    ],
    mapper: {
        serializedName: "x-ms-deny-encryption-scope-override",
        xmlName: "x-ms-deny-encryption-scope-override",
        type: {
            name: "Boolean",
        },
    },
};
export const leaseId = {
    parameterPath: ["options", "leaseAccessConditions", "leaseId"],
    mapper: {
        serializedName: "x-ms-lease-id",
        xmlName: "x-ms-lease-id",
        type: {
            name: "String",
        },
    },
};
export const ifModifiedSince = {
    parameterPath: ["options", "modifiedAccessConditions", "ifModifiedSince"],
    mapper: {
        serializedName: "If-Modified-Since",
        xmlName: "If-Modified-Since",
        type: {
            name: "DateTimeRfc1123",
        },
    },
};
export const ifUnmodifiedSince = {
    parameterPath: ["options", "modifiedAccessConditions", "ifUnmodifiedSince"],
    mapper: {
        serializedName: "If-Unmodified-Since",
        xmlName: "If-Unmodified-Since",
        type: {
            name: "DateTimeRfc1123",
        },
    },
};
export const comp6 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "metadata",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const comp7 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "acl",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const containerAcl = {
    parameterPath: ["options", "containerAcl"],
    mapper: {
        serializedName: "containerAcl",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier",
        type: {
            name: "Sequence",
            element: {
                type: {
                    name: "Composite",
                    className: "SignedIdentifier",
                },
            },
        },
    },
};
export const comp8 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "undelete",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const deletedContainerName = {
    parameterPath: ["options", "deletedContainerName"],
    mapper: {
        serializedName: "x-ms-deleted-container-name",
        xmlName: "x-ms-deleted-container-name",
        type: {
            name: "String",
        },
    },
};
export const deletedContainerVersion = {
    parameterPath: ["options", "deletedContainerVersion"],
    mapper: {
        serializedName: "x-ms-deleted-container-version",
        xmlName: "x-ms-deleted-container-version",
        type: {
            name: "String",
        },
    },
};
export const comp9 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "rename",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const sourceContainerName = {
    parameterPath: "sourceContainerName",
    mapper: {
        serializedName: "x-ms-source-container-name",
        required: true,
        xmlName: "x-ms-source-container-name",
        type: {
            name: "String",
        },
    },
};
export const sourceLeaseId = {
    parameterPath: ["options", "sourceLeaseId"],
    mapper: {
        serializedName: "x-ms-source-lease-id",
        xmlName: "x-ms-source-lease-id",
        type: {
            name: "String",
        },
    },
};
export const comp10 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "lease",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const action = {
    parameterPath: "action",
    mapper: {
        defaultValue: "acquire",
        isConstant: true,
        serializedName: "x-ms-lease-action",
        type: {
            name: "String",
        },
    },
};
export const duration = {
    parameterPath: ["options", "duration"],
    mapper: {
        serializedName: "x-ms-lease-duration",
        xmlName: "x-ms-lease-duration",
        type: {
            name: "Number",
        },
    },
};
export const proposedLeaseId = {
    parameterPath: ["options", "proposedLeaseId"],
    mapper: {
        serializedName: "x-ms-proposed-lease-id",
        xmlName: "x-ms-proposed-lease-id",
        type: {
            name: "String",
        },
    },
};
export const action1 = {
    parameterPath: "action",
    mapper: {
        defaultValue: "release",
        isConstant: true,
        serializedName: "x-ms-lease-action",
        type: {
            name: "String",
        },
    },
};
export const leaseId1 = {
    parameterPath: "leaseId",
    mapper: {
        serializedName: "x-ms-lease-id",
        required: true,
        xmlName: "x-ms-lease-id",
        type: {
            name: "String",
        },
    },
};
export const action2 = {
    parameterPath: "action",
    mapper: {
        defaultValue: "renew",
        isConstant: true,
        serializedName: "x-ms-lease-action",
        type: {
            name: "String",
        },
    },
};
export const action3 = {
    parameterPath: "action",
    mapper: {
        defaultValue: "break",
        isConstant: true,
        serializedName: "x-ms-lease-action",
        type: {
            name: "String",
        },
    },
};
export const breakPeriod = {
    parameterPath: ["options", "breakPeriod"],
    mapper: {
        serializedName: "x-ms-lease-break-period",
        xmlName: "x-ms-lease-break-period",
        type: {
            name: "Number",
        },
    },
};
export const action4 = {
    parameterPath: "action",
    mapper: {
        defaultValue: "change",
        isConstant: true,
        serializedName: "x-ms-lease-action",
        type: {
            name: "String",
        },
    },
};
export const proposedLeaseId1 = {
    parameterPath: "proposedLeaseId",
    mapper: {
        serializedName: "x-ms-proposed-lease-id",
        required: true,
        xmlName: "x-ms-proposed-lease-id",
        type: {
            name: "String",
        },
    },
};
export const include1 = {
    parameterPath: ["options", "include"],
    mapper: {
        serializedName: "include",
        xmlName: "include",
        xmlElementName: "ListBlobsIncludeItem",
        type: {
            name: "Sequence",
            element: {
                type: {
                    name: "Enum",
                    allowedValues: [
                        "copy",
                        "deleted",
                        "metadata",
                        "snapshots",
                        "uncommittedblobs",
                        "versions",
                        "tags",
                        "immutabilitypolicy",
                        "legalhold",
                        "deletedwithversions",
                    ],
                },
            },
        },
    },
    collectionFormat: "CSV",
};
export const delimiter = {
    parameterPath: "delimiter",
    mapper: {
        serializedName: "delimiter",
        required: true,
        xmlName: "delimiter",
        type: {
            name: "String",
        },
    },
};
export const snapshot = {
    parameterPath: ["options", "snapshot"],
    mapper: {
        serializedName: "snapshot",
        xmlName: "snapshot",
        type: {
            name: "String",
        },
    },
};
export const versionId = {
    parameterPath: ["options", "versionId"],
    mapper: {
        serializedName: "versionid",
        xmlName: "versionid",
        type: {
            name: "String",
        },
    },
};
export const range = {
    parameterPath: ["options", "range"],
    mapper: {
        serializedName: "x-ms-range",
        xmlName: "x-ms-range",
        type: {
            name: "String",
        },
    },
};
export const rangeGetContentMD5 = {
    parameterPath: ["options", "rangeGetContentMD5"],
    mapper: {
        serializedName: "x-ms-range-get-content-md5",
        xmlName: "x-ms-range-get-content-md5",
        type: {
            name: "Boolean",
        },
    },
};
export const rangeGetContentCRC64 = {
    parameterPath: ["options", "rangeGetContentCRC64"],
    mapper: {
        serializedName: "x-ms-range-get-content-crc64",
        xmlName: "x-ms-range-get-content-crc64",
        type: {
            name: "Boolean",
        },
    },
};
export const encryptionKey = {
    parameterPath: ["options", "cpkInfo", "encryptionKey"],
    mapper: {
        serializedName: "x-ms-encryption-key",
        xmlName: "x-ms-encryption-key",
        type: {
            name: "String",
        },
    },
};
export const encryptionKeySha256 = {
    parameterPath: ["options", "cpkInfo", "encryptionKeySha256"],
    mapper: {
        serializedName: "x-ms-encryption-key-sha256",
        xmlName: "x-ms-encryption-key-sha256",
        type: {
            name: "String",
        },
    },
};
export const encryptionAlgorithm = {
    parameterPath: ["options", "cpkInfo", "encryptionAlgorithm"],
    mapper: {
        serializedName: "x-ms-encryption-algorithm",
        xmlName: "x-ms-encryption-algorithm",
        type: {
            name: "String",
        },
    },
};
export const ifMatch = {
    parameterPath: ["options", "modifiedAccessConditions", "ifMatch"],
    mapper: {
        serializedName: "If-Match",
        xmlName: "If-Match",
        type: {
            name: "String",
        },
    },
};
export const ifNoneMatch = {
    parameterPath: ["options", "modifiedAccessConditions", "ifNoneMatch"],
    mapper: {
        serializedName: "If-None-Match",
        xmlName: "If-None-Match",
        type: {
            name: "String",
        },
    },
};
export const ifTags = {
    parameterPath: ["options", "modifiedAccessConditions", "ifTags"],
    mapper: {
        serializedName: "x-ms-if-tags",
        xmlName: "x-ms-if-tags",
        type: {
            name: "String",
        },
    },
};
export const deleteSnapshots = {
    parameterPath: ["options", "deleteSnapshots"],
    mapper: {
        serializedName: "x-ms-delete-snapshots",
        xmlName: "x-ms-delete-snapshots",
        type: {
            name: "Enum",
            allowedValues: ["include", "only"],
        },
    },
};
export const blobDeleteType = {
    parameterPath: ["options", "blobDeleteType"],
    mapper: {
        serializedName: "deletetype",
        xmlName: "deletetype",
        type: {
            name: "String",
        },
    },
};
export const comp11 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "expiry",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const expiryOptions = {
    parameterPath: "expiryOptions",
    mapper: {
        serializedName: "x-ms-expiry-option",
        required: true,
        xmlName: "x-ms-expiry-option",
        type: {
            name: "String",
        },
    },
};
export const expiresOn = {
    parameterPath: ["options", "expiresOn"],
    mapper: {
        serializedName: "x-ms-expiry-time",
        xmlName: "x-ms-expiry-time",
        type: {
            name: "String",
        },
    },
};
export const blobCacheControl = {
    parameterPath: ["options", "blobHttpHeaders", "blobCacheControl"],
    mapper: {
        serializedName: "x-ms-blob-cache-control",
        xmlName: "x-ms-blob-cache-control",
        type: {
            name: "String",
        },
    },
};
export const blobContentType = {
    parameterPath: ["options", "blobHttpHeaders", "blobContentType"],
    mapper: {
        serializedName: "x-ms-blob-content-type",
        xmlName: "x-ms-blob-content-type",
        type: {
            name: "String",
        },
    },
};
export const blobContentMD5 = {
    parameterPath: ["options", "blobHttpHeaders", "blobContentMD5"],
    mapper: {
        serializedName: "x-ms-blob-content-md5",
        xmlName: "x-ms-blob-content-md5",
        type: {
            name: "ByteArray",
        },
    },
};
export const blobContentEncoding = {
    parameterPath: ["options", "blobHttpHeaders", "blobContentEncoding"],
    mapper: {
        serializedName: "x-ms-blob-content-encoding",
        xmlName: "x-ms-blob-content-encoding",
        type: {
            name: "String",
        },
    },
};
export const blobContentLanguage = {
    parameterPath: ["options", "blobHttpHeaders", "blobContentLanguage"],
    mapper: {
        serializedName: "x-ms-blob-content-language",
        xmlName: "x-ms-blob-content-language",
        type: {
            name: "String",
        },
    },
};
export const blobContentDisposition = {
    parameterPath: ["options", "blobHttpHeaders", "blobContentDisposition"],
    mapper: {
        serializedName: "x-ms-blob-content-disposition",
        xmlName: "x-ms-blob-content-disposition",
        type: {
            name: "String",
        },
    },
};
export const comp12 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "immutabilityPolicies",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const immutabilityPolicyExpiry = {
    parameterPath: ["options", "immutabilityPolicyExpiry"],
    mapper: {
        serializedName: "x-ms-immutability-policy-until-date",
        xmlName: "x-ms-immutability-policy-until-date",
        type: {
            name: "DateTimeRfc1123",
        },
    },
};
export const immutabilityPolicyMode = {
    parameterPath: ["options", "immutabilityPolicyMode"],
    mapper: {
        serializedName: "x-ms-immutability-policy-mode",
        xmlName: "x-ms-immutability-policy-mode",
        type: {
            name: "Enum",
            allowedValues: ["Mutable", "Unlocked", "Locked"],
        },
    },
};
export const comp13 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "legalhold",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const legalHold = {
    parameterPath: "legalHold",
    mapper: {
        serializedName: "x-ms-legal-hold",
        required: true,
        xmlName: "x-ms-legal-hold",
        type: {
            name: "Boolean",
        },
    },
};
export const encryptionScope = {
    parameterPath: ["options", "encryptionScope"],
    mapper: {
        serializedName: "x-ms-encryption-scope",
        xmlName: "x-ms-encryption-scope",
        type: {
            name: "String",
        },
    },
};
export const comp14 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "snapshot",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const tier = {
    parameterPath: ["options", "tier"],
    mapper: {
        serializedName: "x-ms-access-tier",
        xmlName: "x-ms-access-tier",
        type: {
            name: "Enum",
            allowedValues: [
                "P4",
                "P6",
                "P10",
                "P15",
                "P20",
                "P30",
                "P40",
                "P50",
                "P60",
                "P70",
                "P80",
                "Hot",
                "Cool",
                "Archive",
                "Cold",
            ],
        },
    },
};
export const rehydratePriority = {
    parameterPath: ["options", "rehydratePriority"],
    mapper: {
        serializedName: "x-ms-rehydrate-priority",
        xmlName: "x-ms-rehydrate-priority",
        type: {
            name: "Enum",
            allowedValues: ["High", "Standard"],
        },
    },
};
export const sourceIfModifiedSince = {
    parameterPath: [
        "options",
        "sourceModifiedAccessConditions",
        "sourceIfModifiedSince",
    ],
    mapper: {
        serializedName: "x-ms-source-if-modified-since",
        xmlName: "x-ms-source-if-modified-since",
        type: {
            name: "DateTimeRfc1123",
        },
    },
};
export const sourceIfUnmodifiedSince = {
    parameterPath: [
        "options",
        "sourceModifiedAccessConditions",
        "sourceIfUnmodifiedSince",
    ],
    mapper: {
        serializedName: "x-ms-source-if-unmodified-since",
        xmlName: "x-ms-source-if-unmodified-since",
        type: {
            name: "DateTimeRfc1123",
        },
    },
};
export const sourceIfMatch = {
    parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfMatch"],
    mapper: {
        serializedName: "x-ms-source-if-match",
        xmlName: "x-ms-source-if-match",
        type: {
            name: "String",
        },
    },
};
export const sourceIfNoneMatch = {
    parameterPath: [
        "options",
        "sourceModifiedAccessConditions",
        "sourceIfNoneMatch",
    ],
    mapper: {
        serializedName: "x-ms-source-if-none-match",
        xmlName: "x-ms-source-if-none-match",
        type: {
            name: "String",
        },
    },
};
export const sourceIfTags = {
    parameterPath: ["options", "sourceModifiedAccessConditions", "sourceIfTags"],
    mapper: {
        serializedName: "x-ms-source-if-tags",
        xmlName: "x-ms-source-if-tags",
        type: {
            name: "String",
        },
    },
};
export const copySource = {
    parameterPath: "copySource",
    mapper: {
        serializedName: "x-ms-copy-source",
        required: true,
        xmlName: "x-ms-copy-source",
        type: {
            name: "String",
        },
    },
};
export const blobTagsString = {
    parameterPath: ["options", "blobTagsString"],
    mapper: {
        serializedName: "x-ms-tags",
        xmlName: "x-ms-tags",
        type: {
            name: "String",
        },
    },
};
export const sealBlob = {
    parameterPath: ["options", "sealBlob"],
    mapper: {
        serializedName: "x-ms-seal-blob",
        xmlName: "x-ms-seal-blob",
        type: {
            name: "Boolean",
        },
    },
};
export const legalHold1 = {
    parameterPath: ["options", "legalHold"],
    mapper: {
        serializedName: "x-ms-legal-hold",
        xmlName: "x-ms-legal-hold",
        type: {
            name: "Boolean",
        },
    },
};
export const xMsRequiresSync = {
    parameterPath: "xMsRequiresSync",
    mapper: {
        defaultValue: "true",
        isConstant: true,
        serializedName: "x-ms-requires-sync",
        type: {
            name: "String",
        },
    },
};
export const sourceContentMD5 = {
    parameterPath: ["options", "sourceContentMD5"],
    mapper: {
        serializedName: "x-ms-source-content-md5",
        xmlName: "x-ms-source-content-md5",
        type: {
            name: "ByteArray",
        },
    },
};
export const copySourceAuthorization = {
    parameterPath: ["options", "copySourceAuthorization"],
    mapper: {
        serializedName: "x-ms-copy-source-authorization",
        xmlName: "x-ms-copy-source-authorization",
        type: {
            name: "String",
        },
    },
};
export const copySourceTags = {
    parameterPath: ["options", "copySourceTags"],
    mapper: {
        serializedName: "x-ms-copy-source-tag-option",
        xmlName: "x-ms-copy-source-tag-option",
        type: {
            name: "Enum",
            allowedValues: ["REPLACE", "COPY"],
        },
    },
};
export const comp15 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "copy",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const copyActionAbortConstant = {
    parameterPath: "copyActionAbortConstant",
    mapper: {
        defaultValue: "abort",
        isConstant: true,
        serializedName: "x-ms-copy-action",
        type: {
            name: "String",
        },
    },
};
export const copyId = {
    parameterPath: "copyId",
    mapper: {
        serializedName: "copyid",
        required: true,
        xmlName: "copyid",
        type: {
            name: "String",
        },
    },
};
export const comp16 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "tier",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const tier1 = {
    parameterPath: "tier",
    mapper: {
        serializedName: "x-ms-access-tier",
        required: true,
        xmlName: "x-ms-access-tier",
        type: {
            name: "Enum",
            allowedValues: [
                "P4",
                "P6",
                "P10",
                "P15",
                "P20",
                "P30",
                "P40",
                "P50",
                "P60",
                "P70",
                "P80",
                "Hot",
                "Cool",
                "Archive",
                "Cold",
            ],
        },
    },
};
export const queryRequest = {
    parameterPath: ["options", "queryRequest"],
    mapper: QueryRequestMapper,
};
export const comp17 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "query",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const comp18 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "tags",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const tags = {
    parameterPath: ["options", "tags"],
    mapper: BlobTagsMapper,
};
export const transactionalContentMD5 = {
    parameterPath: ["options", "transactionalContentMD5"],
    mapper: {
        serializedName: "Content-MD5",
        xmlName: "Content-MD5",
        type: {
            name: "ByteArray",
        },
    },
};
export const transactionalContentCrc64 = {
    parameterPath: ["options", "transactionalContentCrc64"],
    mapper: {
        serializedName: "x-ms-content-crc64",
        xmlName: "x-ms-content-crc64",
        type: {
            name: "ByteArray",
        },
    },
};
export const blobType = {
    parameterPath: "blobType",
    mapper: {
        defaultValue: "PageBlob",
        isConstant: true,
        serializedName: "x-ms-blob-type",
        type: {
            name: "String",
        },
    },
};
export const blobContentLength = {
    parameterPath: "blobContentLength",
    mapper: {
        serializedName: "x-ms-blob-content-length",
        required: true,
        xmlName: "x-ms-blob-content-length",
        type: {
            name: "Number",
        },
    },
};
export const blobSequenceNumber = {
    parameterPath: ["options", "blobSequenceNumber"],
    mapper: {
        defaultValue: 0,
        serializedName: "x-ms-blob-sequence-number",
        xmlName: "x-ms-blob-sequence-number",
        type: {
            name: "Number",
        },
    },
};
export const contentType1 = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/octet-stream",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String",
        },
    },
};
export const body1 = {
    parameterPath: "body",
    mapper: {
        serializedName: "body",
        required: true,
        xmlName: "body",
        type: {
            name: "Stream",
        },
    },
};
export const accept2 = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/xml",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String",
        },
    },
};
export const comp19 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "page",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const pageWrite = {
    parameterPath: "pageWrite",
    mapper: {
        defaultValue: "update",
        isConstant: true,
        serializedName: "x-ms-page-write",
        type: {
            name: "String",
        },
    },
};
export const ifSequenceNumberLessThanOrEqualTo = {
    parameterPath: [
        "options",
        "sequenceNumberAccessConditions",
        "ifSequenceNumberLessThanOrEqualTo",
    ],
    mapper: {
        serializedName: "x-ms-if-sequence-number-le",
        xmlName: "x-ms-if-sequence-number-le",
        type: {
            name: "Number",
        },
    },
};
export const ifSequenceNumberLessThan = {
    parameterPath: [
        "options",
        "sequenceNumberAccessConditions",
        "ifSequenceNumberLessThan",
    ],
    mapper: {
        serializedName: "x-ms-if-sequence-number-lt",
        xmlName: "x-ms-if-sequence-number-lt",
        type: {
            name: "Number",
        },
    },
};
export const ifSequenceNumberEqualTo = {
    parameterPath: [
        "options",
        "sequenceNumberAccessConditions",
        "ifSequenceNumberEqualTo",
    ],
    mapper: {
        serializedName: "x-ms-if-sequence-number-eq",
        xmlName: "x-ms-if-sequence-number-eq",
        type: {
            name: "Number",
        },
    },
};
export const pageWrite1 = {
    parameterPath: "pageWrite",
    mapper: {
        defaultValue: "clear",
        isConstant: true,
        serializedName: "x-ms-page-write",
        type: {
            name: "String",
        },
    },
};
export const sourceUrl = {
    parameterPath: "sourceUrl",
    mapper: {
        serializedName: "x-ms-copy-source",
        required: true,
        xmlName: "x-ms-copy-source",
        type: {
            name: "String",
        },
    },
};
export const sourceRange = {
    parameterPath: "sourceRange",
    mapper: {
        serializedName: "x-ms-source-range",
        required: true,
        xmlName: "x-ms-source-range",
        type: {
            name: "String",
        },
    },
};
export const sourceContentCrc64 = {
    parameterPath: ["options", "sourceContentCrc64"],
    mapper: {
        serializedName: "x-ms-source-content-crc64",
        xmlName: "x-ms-source-content-crc64",
        type: {
            name: "ByteArray",
        },
    },
};
export const range1 = {
    parameterPath: "range",
    mapper: {
        serializedName: "x-ms-range",
        required: true,
        xmlName: "x-ms-range",
        type: {
            name: "String",
        },
    },
};
export const comp20 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "pagelist",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const prevsnapshot = {
    parameterPath: ["options", "prevsnapshot"],
    mapper: {
        serializedName: "prevsnapshot",
        xmlName: "prevsnapshot",
        type: {
            name: "String",
        },
    },
};
export const prevSnapshotUrl = {
    parameterPath: ["options", "prevSnapshotUrl"],
    mapper: {
        serializedName: "x-ms-previous-snapshot-url",
        xmlName: "x-ms-previous-snapshot-url",
        type: {
            name: "String",
        },
    },
};
export const sequenceNumberAction = {
    parameterPath: "sequenceNumberAction",
    mapper: {
        serializedName: "x-ms-sequence-number-action",
        required: true,
        xmlName: "x-ms-sequence-number-action",
        type: {
            name: "Enum",
            allowedValues: ["max", "update", "increment"],
        },
    },
};
export const comp21 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "incrementalcopy",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const blobType1 = {
    parameterPath: "blobType",
    mapper: {
        defaultValue: "AppendBlob",
        isConstant: true,
        serializedName: "x-ms-blob-type",
        type: {
            name: "String",
        },
    },
};
export const comp22 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "appendblock",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const maxSize = {
    parameterPath: ["options", "appendPositionAccessConditions", "maxSize"],
    mapper: {
        serializedName: "x-ms-blob-condition-maxsize",
        xmlName: "x-ms-blob-condition-maxsize",
        type: {
            name: "Number",
        },
    },
};
export const appendPosition = {
    parameterPath: [
        "options",
        "appendPositionAccessConditions",
        "appendPosition",
    ],
    mapper: {
        serializedName: "x-ms-blob-condition-appendpos",
        xmlName: "x-ms-blob-condition-appendpos",
        type: {
            name: "Number",
        },
    },
};
export const sourceRange1 = {
    parameterPath: ["options", "sourceRange"],
    mapper: {
        serializedName: "x-ms-source-range",
        xmlName: "x-ms-source-range",
        type: {
            name: "String",
        },
    },
};
export const comp23 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "seal",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const blobType2 = {
    parameterPath: "blobType",
    mapper: {
        defaultValue: "BlockBlob",
        isConstant: true,
        serializedName: "x-ms-blob-type",
        type: {
            name: "String",
        },
    },
};
export const copySourceBlobProperties = {
    parameterPath: ["options", "copySourceBlobProperties"],
    mapper: {
        serializedName: "x-ms-copy-source-blob-properties",
        xmlName: "x-ms-copy-source-blob-properties",
        type: {
            name: "Boolean",
        },
    },
};
export const comp24 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "block",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const blockId = {
    parameterPath: "blockId",
    mapper: {
        serializedName: "blockid",
        required: true,
        xmlName: "blockid",
        type: {
            name: "String",
        },
    },
};
export const blocks = {
    parameterPath: "blocks",
    mapper: BlockLookupListMapper,
};
export const comp25 = {
    parameterPath: "comp",
    mapper: {
        defaultValue: "blocklist",
        isConstant: true,
        serializedName: "comp",
        type: {
            name: "String",
        },
    },
};
export const listType = {
    parameterPath: "listType",
    mapper: {
        defaultValue: "committed",
        serializedName: "blocklisttype",
        required: true,
        xmlName: "blocklisttype",
        type: {
            name: "Enum",
            allowedValues: ["committed", "uncommitted", "all"],
        },
    },
};
//# sourceMappingURL=parameters.js.map