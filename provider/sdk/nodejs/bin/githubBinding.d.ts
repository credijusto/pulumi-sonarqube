import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube GitHub binding resource. This can be used to create and manage the binding between a
 * GitHub repository and a SonarQube project
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const github_alm = new sonarqube.AlmGithub("github-alm", {
 *     appId: "12345",
 *     clientId: "56789",
 *     clientSecret: "secret",
 *     key: "myalm",
 *     privateKey: "myprivate_key",
 *     url: "https://api.github.com",
 *     webhookSecret: "mysecret",
 * });
 * const main = new sonarqube.Project("main", {
 *     project: "my_project",
 *     visibility: "public",
 * });
 * const github_binding = new sonarqube.GithubBinding("github-binding", {
 *     almSetting: github_alm.key,
 *     project: "my_project",
 *     repository: "myorg/myrepo",
 * });
 * ```
 */
export declare class GithubBinding extends pulumi.CustomResource {
    /**
     * Get an existing GithubBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GithubBindingState, opts?: pulumi.CustomResourceOptions): GithubBinding;
    /**
     * Returns true if the given object is an instance of GithubBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GithubBinding;
    /**
     * GitHub ALM setting key
     */
    readonly almSetting: pulumi.Output<string>;
    /**
     * Is this project part of a monorepo. Default value: false
     */
    readonly monorepo: pulumi.Output<string | undefined>;
    /**
     * Project key
     */
    readonly project: pulumi.Output<string>;
    /**
     * The full name of your GitHub repository, including the organization, case-sensitive. Maximum length: 256
     */
    readonly repository: pulumi.Output<string>;
    /**
     * Enable/disable summary in PR discussion tab. Default value: true
     */
    readonly summaryCommentEnabled: pulumi.Output<string | undefined>;
    /**
     * Create a GithubBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GithubBindingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GithubBinding resources.
 */
export interface GithubBindingState {
    /**
     * GitHub ALM setting key
     */
    almSetting?: pulumi.Input<string>;
    /**
     * Is this project part of a monorepo. Default value: false
     */
    monorepo?: pulumi.Input<string>;
    /**
     * Project key
     */
    project?: pulumi.Input<string>;
    /**
     * The full name of your GitHub repository, including the organization, case-sensitive. Maximum length: 256
     */
    repository?: pulumi.Input<string>;
    /**
     * Enable/disable summary in PR discussion tab. Default value: true
     */
    summaryCommentEnabled?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GithubBinding resource.
 */
export interface GithubBindingArgs {
    /**
     * GitHub ALM setting key
     */
    almSetting: pulumi.Input<string>;
    /**
     * Is this project part of a monorepo. Default value: false
     */
    monorepo?: pulumi.Input<string>;
    /**
     * Project key
     */
    project: pulumi.Input<string>;
    /**
     * The full name of your GitHub repository, including the organization, case-sensitive. Maximum length: 256
     */
    repository: pulumi.Input<string>;
    /**
     * Enable/disable summary in PR discussion tab. Default value: true
     */
    summaryCommentEnabled?: pulumi.Input<string>;
}
