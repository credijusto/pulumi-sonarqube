import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Rules resource. This can be used to manage Sonarqube rules.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const allowedMavenDependencies = new sonarqube.Rule("allowedMavenDependencies", {
 *     customKey: "Only_use_allowed_Maven_dependencies",
 *     markdownDescription: "Description",
 *     params: "FilePattern=**&#47;pom.xml",
 *     severity: "BLOCKER",
 *     status: "READY",
 *     templateKey: "xml:XPathCheck",
 *     type: "VULNERABILITY",
 * });
 * const xml = new sonarqube.Qualityprofile("xml", {
 *     language: "xml",
 *     isDefault: false,
 *     parent: "Sonar way",
 * });
 * const xmlRule = new sonarqube.QualityprofileActivateRule("xmlRule", {
 *     key: xml.key,
 *     rule: allowedMavenDependencies.id,
 *     severity: "BLOCKER",
 * });
 * ```
 */
export declare class QualityprofileActivateRule extends pulumi.CustomResource {
    /**
     * Get an existing QualityprofileActivateRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QualityprofileActivateRuleState, opts?: pulumi.CustomResourceOptions): QualityprofileActivateRule;
    /**
     * Returns true if the given object is an instance of QualityprofileActivateRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is QualityprofileActivateRule;
    /**
     * Quality Profile key. Can be obtained through api/qualityprofiles/search
     */
    readonly key: pulumi.Output<string>;
    /**
     * Parameters as semi-colon list of =, for example 'params=key1=v1;key2=v2' (Only for custom rule)
     */
    readonly params: pulumi.Output<string | undefined>;
    /**
     * Reset severity and parameters of activated rule. Set the values defined on parent profile or from rule default values. -
     * Possible values true false yes no (Default false)
     */
    readonly reset: pulumi.Output<string | undefined>;
    /**
     * Rule key
     */
    readonly rule: pulumi.Output<string>;
    /**
     * Severity. Ignored if parameter reset is true. - Possible values - INFO, MINOR, MAJOR, CRITICAL, BLOCKER
     */
    readonly severity: pulumi.Output<string | undefined>;
    /**
     * Create a QualityprofileActivateRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QualityprofileActivateRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering QualityprofileActivateRule resources.
 */
export interface QualityprofileActivateRuleState {
    /**
     * Quality Profile key. Can be obtained through api/qualityprofiles/search
     */
    key?: pulumi.Input<string>;
    /**
     * Parameters as semi-colon list of =, for example 'params=key1=v1;key2=v2' (Only for custom rule)
     */
    params?: pulumi.Input<string>;
    /**
     * Reset severity and parameters of activated rule. Set the values defined on parent profile or from rule default values. -
     * Possible values true false yes no (Default false)
     */
    reset?: pulumi.Input<string>;
    /**
     * Rule key
     */
    rule?: pulumi.Input<string>;
    /**
     * Severity. Ignored if parameter reset is true. - Possible values - INFO, MINOR, MAJOR, CRITICAL, BLOCKER
     */
    severity?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a QualityprofileActivateRule resource.
 */
export interface QualityprofileActivateRuleArgs {
    /**
     * Quality Profile key. Can be obtained through api/qualityprofiles/search
     */
    key: pulumi.Input<string>;
    /**
     * Parameters as semi-colon list of =, for example 'params=key1=v1;key2=v2' (Only for custom rule)
     */
    params?: pulumi.Input<string>;
    /**
     * Reset severity and parameters of activated rule. Set the values defined on parent profile or from rule default values. -
     * Possible values true false yes no (Default false)
     */
    reset?: pulumi.Input<string>;
    /**
     * Rule key
     */
    rule: pulumi.Input<string>;
    /**
     * Severity. Ignored if parameter reset is true. - Possible values - INFO, MINOR, MAJOR, CRITICAL, BLOCKER
     */
    severity?: pulumi.Input<string>;
}
