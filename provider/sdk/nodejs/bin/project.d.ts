import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Provides a Sonarqube Project resource. This can be used to create and manage Sonarqube Project.
 *
 * ## Example Usage
 *
 * ### Example: create a project
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = new sonarqube.Project("main", {
 *     project: "my_project",
 *     visibility: "public",
 * });
 * ```
 *
 * ### Example: a project with associated settings
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = new sonarqube.Project("main", {
 *     project: "my_project",
 *     settings: [{
 *         key: "sonar.demo",
 *         value: "sonarqube@example.org",
 *     }],
 *     visibility: "public",
 * });
 * ```
 */
export declare class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project;
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Project;
    /**
     * The name of the Project to create
     */
    readonly name: pulumi.Output<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    readonly project: pulumi.Output<string>;
    /**
     * A list of settings associated to the project
     */
    readonly settings: pulumi.Output<outputs.ProjectSetting[] | undefined>;
    /**
     * A list of tags to put on the project.
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * Whether the created project should be visible to everyone, or only specific user/groups. If no visibility is specified, the default project visibility of the organization will be used. Valid values are `public` and `private`.
     */
    readonly visibility: pulumi.Output<string | undefined>;
    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * The name of the Project to create
     */
    name?: pulumi.Input<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    project?: pulumi.Input<string>;
    /**
     * A list of settings associated to the project
     */
    settings?: pulumi.Input<pulumi.Input<inputs.ProjectSetting>[]>;
    /**
     * A list of tags to put on the project.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the created project should be visible to everyone, or only specific user/groups. If no visibility is specified, the default project visibility of the organization will be used. Valid values are `public` and `private`.
     */
    visibility?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * The name of the Project to create
     */
    name?: pulumi.Input<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    project: pulumi.Input<string>;
    /**
     * A list of settings associated to the project
     */
    settings?: pulumi.Input<pulumi.Input<inputs.ProjectSetting>[]>;
    /**
     * A list of tags to put on the project.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the created project should be visible to everyone, or only specific user/groups. If no visibility is specified, the default project visibility of the organization will be used. Valid values are `public` and `private`.
     */
    visibility?: pulumi.Input<string>;
}
