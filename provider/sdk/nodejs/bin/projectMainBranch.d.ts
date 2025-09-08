import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Project main branch resource. This can be used to create and manage a Sonarqube Projects main branch.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = new sonarqube.Project("main", {
 *     project: "my_project",
 *     visibility: "public",
 * });
 * const mybranch = new sonarqube.ProjectMainBranch("mybranch", {project: "my_project"});
 * ```
 */
export declare class ProjectMainBranch extends pulumi.CustomResource {
    /**
     * Get an existing ProjectMainBranch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectMainBranchState, opts?: pulumi.CustomResourceOptions): ProjectMainBranch;
    /**
     * Returns true if the given object is an instance of ProjectMainBranch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProjectMainBranch;
    /**
     * The name you want the main branch to have.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    readonly project: pulumi.Output<string>;
    /**
     * Create a ProjectMainBranch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectMainBranchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ProjectMainBranch resources.
 */
export interface ProjectMainBranchState {
    /**
     * The name you want the main branch to have.
     */
    name?: pulumi.Input<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    project?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ProjectMainBranch resource.
 */
export interface ProjectMainBranchArgs {
    /**
     * The name you want the main branch to have.
     */
    name?: pulumi.Input<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    project: pulumi.Input<string>;
}
