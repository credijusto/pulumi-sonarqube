import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Permissions resource. This can be used to manage global and project permissions.
 *
 * ## Example Usage
 *
 * ### Example: Set global admin permissions for a group called "my-admins"
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const myGlobalAdmins = new sonarqube.Permissions("myGlobalAdmins", {
 *     groupName: "my-admins",
 *     permissions: ["admin"],
 * });
 * ```
 *
 * ### Example: Set project admin permissions for a group called "my-project-admins"
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const myProjectAdmins = new sonarqube.Permissions("myProjectAdmins", {
 *     groupName: "my-project-admins",
 *     permissions: ["admin"],
 *     projectKey: "my-project",
 * });
 * ```
 *
 * ### Example: Set project admin permissions for a group called "my-project-admins on a permission template"
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const internalAdmins = new sonarqube.Permissions("internalAdmins", {
 *     groupName: "my-internal-admins",
 *     templateId: sonarqube_permission_template.template.id,
 *     permissions: ["admin"],
 * });
 * ```
 *
 * ### Example: Set codeviewer & user permissions on project level for a user called "johndoe"
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const johnProjectRead = new sonarqube.Permissions("johnProjectRead", {
 *     loginName: "johndoe",
 *     permissions: [
 *         "codeviewer",
 *         "user",
 *     ],
 *     projectKey: "my-project",
 * });
 * ```
 */
export declare class Permissions extends pulumi.CustomResource {
    /**
     * Get an existing Permissions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionsState, opts?: pulumi.CustomResourceOptions): Permissions;
    /**
     * Returns true if the given object is an instance of Permissions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Permissions;
    /**
     * The name of the Group that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `loginName`
     */
    readonly groupName: pulumi.Output<string | undefined>;
    /**
     * The name of the user that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `groupName`.
     */
    readonly loginName: pulumi.Output<string | undefined>;
    /**
     * A list of permissions that should be applied. Changing this forces a new resource to be created. Possible values are: `admin`, `codeviewer`, `issueadmin`, `securityhotspotadmin`, `scan`, `user`.
     */
    readonly permissions: pulumi.Output<string[]>;
    /**
     * Specify if you want to apply project level permissions. Changing this forces a new resource to be created. Cannot be used with `templateId & templateName`
     */
    readonly projectKey: pulumi.Output<string | undefined>;
    /**
     * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `projectKey & templateName`
     */
    readonly templateId: pulumi.Output<string | undefined>;
    /**
     * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `projectKey & templateId`
     */
    readonly templateName: pulumi.Output<string | undefined>;
    /**
     * Create a Permissions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Permissions resources.
 */
export interface PermissionsState {
    /**
     * The name of the Group that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `loginName`
     */
    groupName?: pulumi.Input<string>;
    /**
     * The name of the user that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `groupName`.
     */
    loginName?: pulumi.Input<string>;
    /**
     * A list of permissions that should be applied. Changing this forces a new resource to be created. Possible values are: `admin`, `codeviewer`, `issueadmin`, `securityhotspotadmin`, `scan`, `user`.
     */
    permissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specify if you want to apply project level permissions. Changing this forces a new resource to be created. Cannot be used with `templateId & templateName`
     */
    projectKey?: pulumi.Input<string>;
    /**
     * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `projectKey & templateName`
     */
    templateId?: pulumi.Input<string>;
    /**
     * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `projectKey & templateId`
     */
    templateName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Permissions resource.
 */
export interface PermissionsArgs {
    /**
     * The name of the Group that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `loginName`
     */
    groupName?: pulumi.Input<string>;
    /**
     * The name of the user that should get the specified permissions. Changing this forces a new resource to be created. Cannot be used with `groupName`.
     */
    loginName?: pulumi.Input<string>;
    /**
     * A list of permissions that should be applied. Changing this forces a new resource to be created. Possible values are: `admin`, `codeviewer`, `issueadmin`, `securityhotspotadmin`, `scan`, `user`.
     */
    permissions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specify if you want to apply project level permissions. Changing this forces a new resource to be created. Cannot be used with `templateId & templateName`
     */
    projectKey?: pulumi.Input<string>;
    /**
     * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `projectKey & templateName`
     */
    templateId?: pulumi.Input<string>;
    /**
     * Specify if you want to apply the permissions to a permission template. Changing this forces a new resource to be created. Cannot be used with `projectKey & templateId`
     */
    templateName?: pulumi.Input<string>;
}
