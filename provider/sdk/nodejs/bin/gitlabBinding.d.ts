import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube GitLab binding resource. This can be used to create and manage the binding between a
 * GitLab repository and a SonarQube project
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const gitlab_alm = new sonarqube.AlmGitlab("gitlab-alm", {
 *     key: "myalm",
 *     personalAccessToken: "my_personal_access_token",
 *     url: "https://gitlab.com/api/v4",
 * });
 * const main = new sonarqube.Project("main", {
 *     project: "my_project",
 *     visibility: "public",
 * });
 * const gitlab_binding = new sonarqube.GitlabBinding("gitlab-binding", {
 *     almSetting: gitlab_alm.key,
 *     project: "my_project",
 *     repository: "123",
 * });
 * ```
 */
export declare class GitlabBinding extends pulumi.CustomResource {
    /**
     * Get an existing GitlabBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GitlabBindingState, opts?: pulumi.CustomResourceOptions): GitlabBinding;
    /**
     * Returns true if the given object is an instance of GitlabBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GitlabBinding;
    /**
     * GitLab ALM setting key
     */
    readonly almSetting: pulumi.Output<string>;
    /**
     * Is this project part of a monorepo. Default value: false
     */
    readonly monorepo: pulumi.Output<string | undefined>;
    /**
     * SonarQube project key. Changing this will force a new resource to be created
     */
    readonly project: pulumi.Output<string>;
    /**
     * The GitLab project ID
     */
    readonly repository: pulumi.Output<string>;
    /**
     * Create a GitlabBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GitlabBindingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GitlabBinding resources.
 */
export interface GitlabBindingState {
    /**
     * GitLab ALM setting key
     */
    almSetting?: pulumi.Input<string>;
    /**
     * Is this project part of a monorepo. Default value: false
     */
    monorepo?: pulumi.Input<string>;
    /**
     * SonarQube project key. Changing this will force a new resource to be created
     */
    project?: pulumi.Input<string>;
    /**
     * The GitLab project ID
     */
    repository?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GitlabBinding resource.
 */
export interface GitlabBindingArgs {
    /**
     * GitLab ALM setting key
     */
    almSetting: pulumi.Input<string>;
    /**
     * Is this project part of a monorepo. Default value: false
     */
    monorepo?: pulumi.Input<string>;
    /**
     * SonarQube project key. Changing this will force a new resource to be created
     */
    project: pulumi.Input<string>;
    /**
     * The GitLab project ID
     */
    repository: pulumi.Input<string>;
}
