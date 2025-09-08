import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Settings resource. This can be used to manage Sonarqube settings.
 *
 * ## Example Usage
 *
 * ### Example: create a setting with multiple values
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const multiValueSetting = new sonarqube.Setting("multiValueSetting", {
 *     key: "sonar.global.exclusions",
 *     values: [
 *         "foo",
 *         "bar/**&#47;*.*",
 *     ],
 * });
 * ```
 *
 * ### Example: create a setting with multiple field values
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const multiFieldSetting = new sonarqube.Setting("multiFieldSetting", {
 *     key: "sonar.issue.ignore.multicriteria",
 *     fieldValues: [
 *         {
 *             ruleKey: "foo",
 *             resourceKey: "bar",
 *         },
 *         {
 *             ruleKey: "foo2",
 *             resourceKey: "bar2",
 *         },
 *     ],
 * });
 * ```
 */
export declare class Setting extends pulumi.CustomResource {
    /**
     * Get an existing Setting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SettingState, opts?: pulumi.CustomResourceOptions): Setting;
    /**
     * Returns true if the given object is an instance of Setting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Setting;
    /**
     * Setting field values for the supplied key
     */
    readonly fieldValues: pulumi.Output<{
        [key: string]: string;
    }[] | undefined>;
    /**
     * Setting key
     */
    readonly key: pulumi.Output<string>;
    /**
     * Setting value. To reset a value, please use the reset web service.
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * Setting multi values for the supplied key
     */
    readonly values: pulumi.Output<string[] | undefined>;
    /**
     * Create a Setting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SettingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Setting resources.
 */
export interface SettingState {
    /**
     * Setting field values for the supplied key
     */
    fieldValues?: pulumi.Input<pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>[]>;
    /**
     * Setting key
     */
    key?: pulumi.Input<string>;
    /**
     * Setting value. To reset a value, please use the reset web service.
     */
    value?: pulumi.Input<string>;
    /**
     * Setting multi values for the supplied key
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Setting resource.
 */
export interface SettingArgs {
    /**
     * Setting field values for the supplied key
     */
    fieldValues?: pulumi.Input<pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>[]>;
    /**
     * Setting key
     */
    key: pulumi.Input<string>;
    /**
     * Setting value. To reset a value, please use the reset web service.
     */
    value?: pulumi.Input<string>;
    /**
     * Setting multi values for the supplied key
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}
