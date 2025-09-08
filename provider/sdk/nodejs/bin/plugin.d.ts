import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Plugin resource. This can be used to create and manage Sonarqube Plugins.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = new sonarqube.Plugin("main", {key: "cloudformation"});
 * ```
 */
export declare class Plugin extends pulumi.CustomResource {
    /**
     * Get an existing Plugin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PluginState, opts?: pulumi.CustomResourceOptions): Plugin;
    /**
     * Returns true if the given object is an instance of Plugin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Plugin;
    /**
     * The key identifying the plugin to uninstall.
     */
    readonly key: pulumi.Output<string>;
    /**
     * Create a Plugin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PluginArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Plugin resources.
 */
export interface PluginState {
    /**
     * The key identifying the plugin to uninstall.
     */
    key?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Plugin resource.
 */
export interface PluginArgs {
    /**
     * The key identifying the plugin to uninstall.
     */
    key: pulumi.Input<string>;
}
