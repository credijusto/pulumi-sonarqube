import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Rules resource. This can be used to manage Sonarqube rules.
 */
export declare class Rule extends pulumi.CustomResource {
    /**
     * Get an existing Rule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RuleState, opts?: pulumi.CustomResourceOptions): Rule;
    /**
     * Returns true if the given object is an instance of Rule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Rule;
    /**
     * key of the custom rule should only contain : a-z, 0-9, \_
     */
    readonly customKey: pulumi.Output<string>;
    /**
     * Rule description
     */
    readonly markdownDescription: pulumi.Output<string>;
    /**
     * Rule name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Parameters as semi-colon list of =, for example 'params=key1=v1;key2=v2' (Only for custom rule) - parameter order:
     * expression=value;filePattern=value;message=value
     */
    readonly params: pulumi.Output<string | undefined>;
    /**
     * If set to true and if the rule has been deactivated (status 'REMOVED'), a status 409 will be returned - Possible values
     * - true, false, yes, no
     */
    readonly preventReactivation: pulumi.Output<string | undefined>;
    /**
     * Rule severity - Possible values - INFO, MINOR, MAJOR, CRITICAL, BLOCKER
     */
    readonly severity: pulumi.Output<string | undefined>;
    /**
     * Rule status - Possible values - BETA, DEPRECATED, READY, REMOVED - Default value - READY
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Key of the template rule in order to create a custom rule (mandatory for custom rule) - [Example
     * values](https://docs.sonarqube.org/latest/user-guide/rules/#header-4)
     */
    readonly templateKey: pulumi.Output<string>;
    /**
     * Rule type - Possible values - CODE_SMELL, BUG, VULNERABILITY, SECURITY_HOTSPOT
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a Rule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Rule resources.
 */
export interface RuleState {
    /**
     * key of the custom rule should only contain : a-z, 0-9, \_
     */
    customKey?: pulumi.Input<string>;
    /**
     * Rule description
     */
    markdownDescription?: pulumi.Input<string>;
    /**
     * Rule name
     */
    name?: pulumi.Input<string>;
    /**
     * Parameters as semi-colon list of =, for example 'params=key1=v1;key2=v2' (Only for custom rule) - parameter order:
     * expression=value;filePattern=value;message=value
     */
    params?: pulumi.Input<string>;
    /**
     * If set to true and if the rule has been deactivated (status 'REMOVED'), a status 409 will be returned - Possible values
     * - true, false, yes, no
     */
    preventReactivation?: pulumi.Input<string>;
    /**
     * Rule severity - Possible values - INFO, MINOR, MAJOR, CRITICAL, BLOCKER
     */
    severity?: pulumi.Input<string>;
    /**
     * Rule status - Possible values - BETA, DEPRECATED, READY, REMOVED - Default value - READY
     */
    status?: pulumi.Input<string>;
    /**
     * Key of the template rule in order to create a custom rule (mandatory for custom rule) - [Example
     * values](https://docs.sonarqube.org/latest/user-guide/rules/#header-4)
     */
    templateKey?: pulumi.Input<string>;
    /**
     * Rule type - Possible values - CODE_SMELL, BUG, VULNERABILITY, SECURITY_HOTSPOT
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * key of the custom rule should only contain : a-z, 0-9, \_
     */
    customKey: pulumi.Input<string>;
    /**
     * Rule description
     */
    markdownDescription: pulumi.Input<string>;
    /**
     * Rule name
     */
    name?: pulumi.Input<string>;
    /**
     * Parameters as semi-colon list of =, for example 'params=key1=v1;key2=v2' (Only for custom rule) - parameter order:
     * expression=value;filePattern=value;message=value
     */
    params?: pulumi.Input<string>;
    /**
     * If set to true and if the rule has been deactivated (status 'REMOVED'), a status 409 will be returned - Possible values
     * - true, false, yes, no
     */
    preventReactivation?: pulumi.Input<string>;
    /**
     * Rule severity - Possible values - INFO, MINOR, MAJOR, CRITICAL, BLOCKER
     */
    severity?: pulumi.Input<string>;
    /**
     * Rule status - Possible values - BETA, DEPRECATED, READY, REMOVED - Default value - READY
     */
    status?: pulumi.Input<string>;
    /**
     * Key of the template rule in order to create a custom rule (mandatory for custom rule) - [Example
     * values](https://docs.sonarqube.org/latest/user-guide/rules/#header-4)
     */
    templateKey: pulumi.Input<string>;
    /**
     * Rule type - Possible values - CODE_SMELL, BUG, VULNERABILITY, SECURITY_HOTSPOT
     */
    type?: pulumi.Input<string>;
}
