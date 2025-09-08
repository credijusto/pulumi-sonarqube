import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube GitLab Alm/Devops Platform Integration resource. This can be used to create and manage a Alm/Devops
 * Platform Integration for GitLab.
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
 * ```
 */
export declare class AlmGitlab extends pulumi.CustomResource {
    /**
     * Get an existing AlmGitlab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlmGitlabState, opts?: pulumi.CustomResourceOptions): AlmGitlab;
    /**
     * Returns true if the given object is an instance of AlmGitlab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlmGitlab;
    /**
     * Unique key of the GitLab instance setting. Maximum length: 200
     */
    readonly key: pulumi.Output<string>;
    /**
     * GitLab App personal access token with the `readApi` scope. See [this doc](https://docs.sonarqube.org/latest/devops-platform-integration/gitlab-integration/#importing-your-gitlab-projects-into-sonarqube) for more information. Maximum length: 2000
     */
    readonly personalAccessToken: pulumi.Output<string>;
    /**
     * GitLab API URL. Maximum length: 2000
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a AlmGitlab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlmGitlabArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AlmGitlab resources.
 */
export interface AlmGitlabState {
    /**
     * Unique key of the GitLab instance setting. Maximum length: 200
     */
    key?: pulumi.Input<string>;
    /**
     * GitLab App personal access token with the `readApi` scope. See [this doc](https://docs.sonarqube.org/latest/devops-platform-integration/gitlab-integration/#importing-your-gitlab-projects-into-sonarqube) for more information. Maximum length: 2000
     */
    personalAccessToken?: pulumi.Input<string>;
    /**
     * GitLab API URL. Maximum length: 2000
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AlmGitlab resource.
 */
export interface AlmGitlabArgs {
    /**
     * Unique key of the GitLab instance setting. Maximum length: 200
     */
    key: pulumi.Input<string>;
    /**
     * GitLab App personal access token with the `readApi` scope. See [this doc](https://docs.sonarqube.org/latest/devops-platform-integration/gitlab-integration/#importing-your-gitlab-projects-into-sonarqube) for more information. Maximum length: 2000
     */
    personalAccessToken: pulumi.Input<string>;
    /**
     * GitLab API URL. Maximum length: 2000
     */
    url: pulumi.Input<string>;
}
