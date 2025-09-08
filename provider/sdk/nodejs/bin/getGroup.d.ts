import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to get a Sonarqube Group resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const group = sonarqube.getGroup({
 *     name: "terraform-test",
 * });
 * ```
 */
export declare function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult>;
/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupArgs {
    /**
     * The name of the group.
     */
    name: string;
}
/**
 * A collection of values returned by getGroup.
 */
export interface GetGroupResult {
    /**
     * The group description.
     */
    readonly description: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The name of the group.
     */
    readonly name: string;
}
/**
 * Use this data source to get a Sonarqube Group resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const group = sonarqube.getGroup({
 *     name: "terraform-test",
 * });
 * ```
 */
export declare function getGroupOutput(args: GetGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGroupResult>;
/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupOutputArgs {
    /**
     * The name of the group.
     */
    name: pulumi.Input<string>;
}
