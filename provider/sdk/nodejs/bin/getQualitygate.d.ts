import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * Use this data source to get a Sonarqube qualitygate resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = sonarqube.getQualitygate({
 *     name: "example",
 * });
 * ```
 */
export declare function getQualitygate(args: GetQualitygateArgs, opts?: pulumi.InvokeOptions): Promise<GetQualitygateResult>;
/**
 * A collection of arguments for invoking getQualitygate.
 */
export interface GetQualitygateArgs {
    /**
     * The name of the Quality Gate.
     */
    name: string;
}
/**
 * A collection of values returned by getQualitygate.
 */
export interface GetQualitygateResult {
    /**
     * List of Quality Gate conditions.
     */
    readonly conditions: outputs.GetQualitygateCondition[];
    /**
     * Origin of the Quality Gate
     */
    readonly copyFrom: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * Quality Gate default.
     */
    readonly isDefault: boolean;
    /**
     * The name of the Quality Gate.
     */
    readonly name: string;
}
/**
 * Use this data source to get a Sonarqube qualitygate resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = sonarqube.getQualitygate({
 *     name: "example",
 * });
 * ```
 */
export declare function getQualitygateOutput(args: GetQualitygateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetQualitygateResult>;
/**
 * A collection of arguments for invoking getQualitygate.
 */
export interface GetQualitygateOutputArgs {
    /**
     * The name of the Quality Gate.
     */
    name: pulumi.Input<string>;
}
