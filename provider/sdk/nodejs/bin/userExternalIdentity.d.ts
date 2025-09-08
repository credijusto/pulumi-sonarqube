import * as pulumi from "@pulumi/pulumi";
/**
 * Updates the _external identity_ of a _non local_ Sonarqube User. This can be used to set the _Identity Provider_ which should be used to
 * authenticate a specific user.
 *
 * The Sonarqube API currently does not provide an endpoint to read the _external identity_ setting of an user.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * //# Example: change the external identity to SAML
 * const remoteUserUser = new sonarqube.User("remoteUserUser", {
 *     loginName: "terraform-test",
 *     email: "terraform-test@sonarqube.com",
 *     isLocal: false,
 * });
 * const remoteUserUserExternalIdentity = new sonarqube.UserExternalIdentity("remoteUserUserExternalIdentity", {
 *     loginName: remoteUserUser.loginName,
 *     externalIdentity: "terraform-test@sonarqube.com",
 *     externalProvider: "saml",
 * });
 * ```
 */
export declare class UserExternalIdentity extends pulumi.CustomResource {
    /**
     * Get an existing UserExternalIdentity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserExternalIdentityState, opts?: pulumi.CustomResourceOptions): UserExternalIdentity;
    /**
     * Returns true if the given object is an instance of UserExternalIdentity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserExternalIdentity;
    /**
     * The identifier of the User used by the Authentication Provider. Changing this forces a new resource to be created.
     */
    readonly externalIdentity: pulumi.Output<string>;
    /**
     * The key of the Authentication Provider. The Authentication Provider must be activated on Sonarqube. Changing this forces a new resource to be created.
     */
    readonly externalProvider: pulumi.Output<string>;
    /**
     * The login name of the User to update. Changing this forces a new resource to be created.
     */
    readonly loginName: pulumi.Output<string>;
    /**
     * Create a UserExternalIdentity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserExternalIdentityArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserExternalIdentity resources.
 */
export interface UserExternalIdentityState {
    /**
     * The identifier of the User used by the Authentication Provider. Changing this forces a new resource to be created.
     */
    externalIdentity?: pulumi.Input<string>;
    /**
     * The key of the Authentication Provider. The Authentication Provider must be activated on Sonarqube. Changing this forces a new resource to be created.
     */
    externalProvider?: pulumi.Input<string>;
    /**
     * The login name of the User to update. Changing this forces a new resource to be created.
     */
    loginName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserExternalIdentity resource.
 */
export interface UserExternalIdentityArgs {
    /**
     * The identifier of the User used by the Authentication Provider. Changing this forces a new resource to be created.
     */
    externalIdentity: pulumi.Input<string>;
    /**
     * The key of the Authentication Provider. The Authentication Provider must be activated on Sonarqube. Changing this forces a new resource to be created.
     */
    externalProvider: pulumi.Input<string>;
    /**
     * The login name of the User to update. Changing this forces a new resource to be created.
     */
    loginName: pulumi.Input<string>;
}
