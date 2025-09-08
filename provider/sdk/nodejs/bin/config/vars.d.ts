/**
 * Allows anonymizing users on destroy. Requires Sonarqube version >= 9.7.
 */
export declare const anonymizeUserOnDelete: boolean | undefined;
export declare const host: string | undefined;
export declare const httpProxy: string | undefined;
export declare const installedEdition: string | undefined;
export declare const installedVersion: string | undefined;
export declare const pass: string | undefined;
/**
 * Allows ignoring insecure certificates when set to true. Defaults to false. Disabling TLS verification is dangerous and
 * should only be done for local testing.
 */
export declare const tlsInsecureSkipVerify: boolean | undefined;
export declare const token: string | undefined;
export declare const user: string | undefined;
