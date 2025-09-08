import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube New Code Periods resource. This can be used to manage Sonarqube New Code Periods.
 *
 * ## Example Usage
 *
 * ### Example: Set the global new code period to a number of days
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const codePeriod = new sonarqube.NewCodePeriods("codePeriod", {
 *     type: "NUMBER_OF_DAYS",
 *     value: "7",
 * });
 * ```
 */
export declare class NewCodePeriods extends pulumi.CustomResource {
    /**
     * Get an existing NewCodePeriods resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NewCodePeriodsState, opts?: pulumi.CustomResourceOptions): NewCodePeriods;
    /**
     * Returns true if the given object is an instance of NewCodePeriods.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NewCodePeriods;
    /**
     * The name of a branch of a project for which the new code period will be configured. Changing this will force a new resource to be created. Setting this also requires setting the 'project' argument.
     */
    readonly branch: pulumi.Output<string | undefined>;
    /**
     * The key of a project for which the new code period will be configured. Changing this will force a new resource to be created.
     */
    readonly project: pulumi.Output<string | undefined>;
    /**
     * The kind of new code period to use. Supported values are SPECIFIC*ANALYSIS, PREVIOUS*VERSION, NUMBER*OF*DAYS, or REFERENCE_BRANCH.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The desired value of the new code period. Varies based on the 'type'. For SPECIFIC*ANALYIS, the value must be the UUID of a previous analysis. For NUMBER*OF*DAYS it must be a numeric string. For REFERENCE*BRANCH it should be the name of branch on the project. For PREVIOUS_VERSION it must **not** be set.
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * Create a NewCodePeriods resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NewCodePeriodsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NewCodePeriods resources.
 */
export interface NewCodePeriodsState {
    /**
     * The name of a branch of a project for which the new code period will be configured. Changing this will force a new resource to be created. Setting this also requires setting the 'project' argument.
     */
    branch?: pulumi.Input<string>;
    /**
     * The key of a project for which the new code period will be configured. Changing this will force a new resource to be created.
     */
    project?: pulumi.Input<string>;
    /**
     * The kind of new code period to use. Supported values are SPECIFIC*ANALYSIS, PREVIOUS*VERSION, NUMBER*OF*DAYS, or REFERENCE_BRANCH.
     */
    type?: pulumi.Input<string>;
    /**
     * The desired value of the new code period. Varies based on the 'type'. For SPECIFIC*ANALYIS, the value must be the UUID of a previous analysis. For NUMBER*OF*DAYS it must be a numeric string. For REFERENCE*BRANCH it should be the name of branch on the project. For PREVIOUS_VERSION it must **not** be set.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NewCodePeriods resource.
 */
export interface NewCodePeriodsArgs {
    /**
     * The name of a branch of a project for which the new code period will be configured. Changing this will force a new resource to be created. Setting this also requires setting the 'project' argument.
     */
    branch?: pulumi.Input<string>;
    /**
     * The key of a project for which the new code period will be configured. Changing this will force a new resource to be created.
     */
    project?: pulumi.Input<string>;
    /**
     * The kind of new code period to use. Supported values are SPECIFIC*ANALYSIS, PREVIOUS*VERSION, NUMBER*OF*DAYS, or REFERENCE_BRANCH.
     */
    type: pulumi.Input<string>;
    /**
     * The desired value of the new code period. Varies based on the 'type'. For SPECIFIC*ANALYIS, the value must be the UUID of a previous analysis. For NUMBER*OF*DAYS it must be a numeric string. For REFERENCE*BRANCH it should be the name of branch on the project. For PREVIOUS_VERSION it must **not** be set.
     */
    value?: pulumi.Input<string>;
}
