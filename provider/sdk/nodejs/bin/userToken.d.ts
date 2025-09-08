import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube User token resource. This can be used to manage Sonarqube User tokens.
 *
 * ## Example Usage
 *
 * ### Example: create a user, user token and output the token value
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const user = new sonarqube.User("user", {
 *     loginName: "terraform-test",
 *     password: "secret-sauce37!",
 * });
 * const token = new sonarqube.UserToken("token", {loginName: user.loginName});
 * export const userToken = token.token;
 * ```
 *
 * ### Example: create an expiring global analysis token and output the token value
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const token = new sonarqube.UserToken("token", {
 *     type: "GLOBAL_ANALYSIS_TOKEN",
 *     expirationDate: "2099-01-01",
 * });
 * export const globalAnalysisToken = token.token;
 * ```
 *
 * ### Example: create a project, project analysis token, and output the token value
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const token = new sonarqube.UserToken("token", {
 *     type: "PROJECT_ANALYSIS_TOKEN",
 *     projectKey: "my-project",
 * });
 * export const projectAnalysisToken = token.token;
 * ```
 */
export declare class UserToken extends pulumi.CustomResource {
    /**
     * Get an existing UserToken resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserTokenState, opts?: pulumi.CustomResourceOptions): UserToken;
    /**
     * Returns true if the given object is an instance of UserToken.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserToken;
    /**
     * The expiration date of the token being generated, in ISO 8601 format (YYYY-MM-DD). If not set, default to no expiration.
     */
    readonly expirationDate: pulumi.Output<string>;
    /**
     * The login name of the User for which the token should be created. If not set, the token is created for the authenticated user. Changing this forces a new resource to be created.
     */
    readonly loginName: pulumi.Output<string | undefined>;
    /**
     * The name of the Token to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The key of the only project that can be analyzed by the PROJECT_ANALYSIS TOKEN being created. Changing this forces a new resource to be created.
     */
    readonly projectKey: pulumi.Output<string | undefined>;
    /**
     * The token value.
     */
    readonly token: pulumi.Output<string>;
    /**
     * The kind of Token to create. Changing this forces a new resource to be created. Possible values are USER*TOKEN, GLOBAL*ANALYSIS*TOKEN, or PROJECT*ANALYSIS*TOKEN. Defaults to USER*TOKEN. If set to PROJECT*ANALYSIS*TOKEN, then the projectKey must also be specified.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a UserToken resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserTokenArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserToken resources.
 */
export interface UserTokenState {
    /**
     * The expiration date of the token being generated, in ISO 8601 format (YYYY-MM-DD). If not set, default to no expiration.
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * The login name of the User for which the token should be created. If not set, the token is created for the authenticated user. Changing this forces a new resource to be created.
     */
    loginName?: pulumi.Input<string>;
    /**
     * The name of the Token to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The key of the only project that can be analyzed by the PROJECT_ANALYSIS TOKEN being created. Changing this forces a new resource to be created.
     */
    projectKey?: pulumi.Input<string>;
    /**
     * The token value.
     */
    token?: pulumi.Input<string>;
    /**
     * The kind of Token to create. Changing this forces a new resource to be created. Possible values are USER*TOKEN, GLOBAL*ANALYSIS*TOKEN, or PROJECT*ANALYSIS*TOKEN. Defaults to USER*TOKEN. If set to PROJECT*ANALYSIS*TOKEN, then the projectKey must also be specified.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserToken resource.
 */
export interface UserTokenArgs {
    /**
     * The expiration date of the token being generated, in ISO 8601 format (YYYY-MM-DD). If not set, default to no expiration.
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * The login name of the User for which the token should be created. If not set, the token is created for the authenticated user. Changing this forces a new resource to be created.
     */
    loginName?: pulumi.Input<string>;
    /**
     * The name of the Token to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The key of the only project that can be analyzed by the PROJECT_ANALYSIS TOKEN being created. Changing this forces a new resource to be created.
     */
    projectKey?: pulumi.Input<string>;
    /**
     * The kind of Token to create. Changing this forces a new resource to be created. Possible values are USER*TOKEN, GLOBAL*ANALYSIS*TOKEN, or PROJECT*ANALYSIS*TOKEN. Defaults to USER*TOKEN. If set to PROJECT*ANALYSIS*TOKEN, then the projectKey must also be specified.
     */
    type?: pulumi.Input<string>;
}
