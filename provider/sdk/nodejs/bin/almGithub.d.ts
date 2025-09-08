import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube GitHub Alm/Devops Platform Integration resource. This can be used to create and manage a Alm/Devops
 * Platform Integration for GitHub.
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
 * ```
 */
export declare class AlmGithub extends pulumi.CustomResource {
    /**
     * Get an existing AlmGithub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlmGithubState, opts?: pulumi.CustomResourceOptions): AlmGithub;
    /**
     * Returns true if the given object is an instance of AlmGithub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlmGithub;
    /**
     * GitHub App ID. Maximum length: 80
     */
    readonly appId: pulumi.Output<string>;
    /**
     * GitHub App Client ID. Maximum length: 80
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * GitHub App Client Secret. Maximum length: 160
     */
    readonly clientSecret: pulumi.Output<string>;
    /**
     * Unique key of the GitHUb instance setting. Maximum length: 200
     */
    readonly key: pulumi.Output<string>;
    /**
     * GitHub App private key. Maximum length: 2500
     */
    readonly privateKey: pulumi.Output<string>;
    /**
     * GitHub API URL. Maximum length: 2000
     */
    readonly url: pulumi.Output<string>;
    /**
     * GitHub App Webhook Secret. Maximum length: 160
     */
    readonly webhookSecret: pulumi.Output<string | undefined>;
    /**
     * Create a AlmGithub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlmGithubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AlmGithub resources.
 */
export interface AlmGithubState {
    /**
     * GitHub App ID. Maximum length: 80
     */
    appId?: pulumi.Input<string>;
    /**
     * GitHub App Client ID. Maximum length: 80
     */
    clientId?: pulumi.Input<string>;
    /**
     * GitHub App Client Secret. Maximum length: 160
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Unique key of the GitHUb instance setting. Maximum length: 200
     */
    key?: pulumi.Input<string>;
    /**
     * GitHub App private key. Maximum length: 2500
     */
    privateKey?: pulumi.Input<string>;
    /**
     * GitHub API URL. Maximum length: 2000
     */
    url?: pulumi.Input<string>;
    /**
     * GitHub App Webhook Secret. Maximum length: 160
     */
    webhookSecret?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AlmGithub resource.
 */
export interface AlmGithubArgs {
    /**
     * GitHub App ID. Maximum length: 80
     */
    appId: pulumi.Input<string>;
    /**
     * GitHub App Client ID. Maximum length: 80
     */
    clientId: pulumi.Input<string>;
    /**
     * GitHub App Client Secret. Maximum length: 160
     */
    clientSecret: pulumi.Input<string>;
    /**
     * Unique key of the GitHUb instance setting. Maximum length: 200
     */
    key: pulumi.Input<string>;
    /**
     * GitHub App private key. Maximum length: 2500
     */
    privateKey: pulumi.Input<string>;
    /**
     * GitHub API URL. Maximum length: 2000
     */
    url: pulumi.Input<string>;
    /**
     * GitHub App Webhook Secret. Maximum length: 160
     */
    webhookSecret?: pulumi.Input<string>;
}
