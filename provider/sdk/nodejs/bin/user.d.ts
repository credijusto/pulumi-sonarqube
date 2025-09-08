import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube User resource. This can be used to manage Sonarqube Users.
 *
 * ## Example Usage
 *
 * ### Example: create a local user
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const user = new sonarqube.User("user", {
 *     loginName: "terraform-test",
 *     password: "secret-sauce37!",
 * });
 * ```
 *
 * ### Example: create a remote user
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const remoteUser = new sonarqube.User("remoteUser", {
 *     email: "terraform-test@sonarqube.com",
 *     isLocal: false,
 *     loginName: "terraform-test",
 * });
 * ```
 */
export declare class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User;
    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is User;
    /**
     * The email of the User to create.
     */
    readonly email: pulumi.Output<string | undefined>;
    /**
     * `True` if the User should be of type `local`. Defaults to `true`.
     */
    readonly isLocal: pulumi.Output<boolean | undefined>;
    /**
     * The login name of the User to create. Changing this forces a new resource to be created.
     */
    readonly loginName: pulumi.Output<string>;
    /**
     * The name of the User to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The password of User to create. This is only used if the user is of type `local`.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * The email of the User to create.
     */
    email?: pulumi.Input<string>;
    /**
     * `True` if the User should be of type `local`. Defaults to `true`.
     */
    isLocal?: pulumi.Input<boolean>;
    /**
     * The login name of the User to create. Changing this forces a new resource to be created.
     */
    loginName?: pulumi.Input<string>;
    /**
     * The name of the User to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password of User to create. This is only used if the user is of type `local`.
     */
    password?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The email of the User to create.
     */
    email?: pulumi.Input<string>;
    /**
     * `True` if the User should be of type `local`. Defaults to `true`.
     */
    isLocal?: pulumi.Input<boolean>;
    /**
     * The login name of the User to create. Changing this forces a new resource to be created.
     */
    loginName: pulumi.Input<string>;
    /**
     * The name of the User to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password of User to create. This is only used if the user is of type `local`.
     */
    password?: pulumi.Input<string>;
}
