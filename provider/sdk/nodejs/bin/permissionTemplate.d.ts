import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Permission template resource. This can be used to create and manage Sonarqube Permission
 * templates.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const template = new sonarqube.PermissionTemplate("template", {
 *     description: "These are internal projects",
 *     projectKeyPattern: "internal.*",
 * });
 * ```
 */
export declare class PermissionTemplate extends pulumi.CustomResource {
    /**
     * Get an existing PermissionTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionTemplateState, opts?: pulumi.CustomResourceOptions): PermissionTemplate;
    /**
     * Returns true if the given object is an instance of PermissionTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PermissionTemplate;
    /**
     * Set the template as the default. This can only be set for one template.
     */
    readonly default: pulumi.Output<boolean | undefined>;
    /**
     * Description of the Template.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The name of the Permission template to create. Do not use names with `/`. If needed, use `replace(var.permission_template_name, "/", "_")`. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The project key pattern. Must be a valid Java regular expression.
     */
    readonly projectKeyPattern: pulumi.Output<string | undefined>;
    /**
     * Create a PermissionTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PermissionTemplateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PermissionTemplate resources.
 */
export interface PermissionTemplateState {
    /**
     * Set the template as the default. This can only be set for one template.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Description of the Template.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Permission template to create. Do not use names with `/`. If needed, use `replace(var.permission_template_name, "/", "_")`. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The project key pattern. Must be a valid Java regular expression.
     */
    projectKeyPattern?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PermissionTemplate resource.
 */
export interface PermissionTemplateArgs {
    /**
     * Set the template as the default. This can only be set for one template.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Description of the Template.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Permission template to create. Do not use names with `/`. If needed, use `replace(var.permission_template_name, "/", "_")`. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The project key pattern. Must be a valid Java regular expression.
     */
    projectKeyPattern?: pulumi.Input<string>;
}
