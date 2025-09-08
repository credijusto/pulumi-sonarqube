import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to get a Sonarqube qualityprofile resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = sonarqube.getQualityprofile({
 *     name: "example",
 * });
 * ```
 */
export declare function getQualityprofile(args: GetQualityprofileArgs, opts?: pulumi.InvokeOptions): Promise<GetQualityprofileResult>;
/**
 * A collection of arguments for invoking getQualityprofile.
 */
export interface GetQualityprofileArgs {
    /**
     * The name of the Quality Profile
     */
    name: string;
}
/**
 * A collection of values returned by getQualityprofile.
 */
export interface GetQualityprofileResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * Quality Profile default
     */
    readonly isDefault: boolean;
    /**
     * The key of the Quality Profile
     */
    readonly key: string;
    /**
     * Quality Profile language
     */
    readonly language: string;
    /**
     * The name of the Quality Profile
     */
    readonly name: string;
}
/**
 * Use this data source to get a Sonarqube qualityprofile resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = sonarqube.getQualityprofile({
 *     name: "example",
 * });
 * ```
 */
export declare function getQualityprofileOutput(args: GetQualityprofileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetQualityprofileResult>;
/**
 * A collection of arguments for invoking getQualityprofile.
 */
export interface GetQualityprofileOutputArgs {
    /**
     * The name of the Quality Profile
     */
    name: pulumi.Input<string>;
}
