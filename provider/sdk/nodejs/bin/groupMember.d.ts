import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Group Member resource. This can be used to add or remove user to or from Sonarqube Groups.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const user = new sonarqube.User("user", {
 *     loginName: "terraform-test",
 *     password: "secret-sauce37!",
 * });
 * const projectUsers = new sonarqube.Group("projectUsers", {description: "This is a group"});
 * const projectUsersMember = new sonarqube.GroupMember("projectUsersMember", {loginName: user.loginName});
 * ```
 */
export declare class GroupMember extends pulumi.CustomResource {
    /**
     * Get an existing GroupMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupMemberState, opts?: pulumi.CustomResourceOptions): GroupMember;
    /**
     * Returns true if the given object is an instance of GroupMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GroupMember;
    /**
     * The `loginName` of the User to add as a member. Changing this forces a new resource to be created.
     */
    readonly loginName: pulumi.Output<string>;
    /**
     * The name of the Group to add a member to. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a GroupMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupMemberArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GroupMember resources.
 */
export interface GroupMemberState {
    /**
     * The `loginName` of the User to add as a member. Changing this forces a new resource to be created.
     */
    loginName?: pulumi.Input<string>;
    /**
     * The name of the Group to add a member to. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GroupMember resource.
 */
export interface GroupMemberArgs {
    /**
     * The `loginName` of the User to add as a member. Changing this forces a new resource to be created.
     */
    loginName: pulumi.Input<string>;
    /**
     * The name of the Group to add a member to. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
