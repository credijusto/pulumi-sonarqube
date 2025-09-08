import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to get a Sonarqube project resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const project = sonarqube.getProject({
 *     project: "projet-key-id",
 * });
 * ```
 */
export declare function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult>;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectArgs {
    /**
     * The project key of the project
     */
    project: string;
}
/**
 * A collection of values returned by getProject.
 */
export interface GetProjectResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * Name of the project
     */
    readonly name: string;
    /**
     * The project key of the project
     */
    readonly project: string;
    /**
     * Project visibility
     */
    readonly visibility: string;
}
/**
 * Use this data source to get a Sonarqube project resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const project = sonarqube.getProject({
 *     project: "projet-key-id",
 * });
 * ```
 */
export declare function getProjectOutput(args: GetProjectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectResult>;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectOutputArgs {
    /**
     * The project key of the project
     */
    project: pulumi.Input<string>;
}
