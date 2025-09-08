import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Provides a Sonarqube Quality Gate resource. This can be used to create and manage Sonarqube Quality Gates and their Conditions.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = new sonarqube.Qualitygate("main", {
 *     conditions: [
 *         {
 *             metric: "new_coverage",
 *             op: "LT",
 *             threshold: "50",
 *         },
 *         {
 *             metric: "vulnerabilities",
 *             op: "GT",
 *             threshold: "10",
 *         },
 *     ],
 *     isDefault: true,
 * });
 * ```
 *
 * **Disclaimer: Operator Requirement for Grade Rating Conditions**
 *
 * When working with grade rating conditions, (A-D), it is important to note that the "GT" (greater than) operator must be used for the `op` field. This is due to SonarQube's API design. More information can be found in this issue.
 *
 * For example, if you are using a grade rating metric such as `newReliabilityRating`, where A represents the highest rating and subsequent letters represent lower ratings, you need to supply the `op` field with "GT" via the provider. Using "LT" will return an error from SonarQube's API:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * ```
 */
export declare class Qualitygate extends pulumi.CustomResource {
    /**
     * Get an existing Qualitygate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QualitygateState, opts?: pulumi.CustomResourceOptions): Qualitygate;
    /**
     * Returns true if the given object is an instance of Qualitygate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Qualitygate;
    /**
     * A list of conditions that the gate uses.
     */
    readonly conditions: pulumi.Output<outputs.QualitygateCondition[] | undefined>;
    /**
     * Name of an existing Quality Gate to copy from.
     */
    readonly copyFrom: pulumi.Output<string | undefined>;
    /**
     * When set to true this Quality Gate is set as default.
     */
    readonly isDefault: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Quality Gate to create. Maximum length 100.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a Qualitygate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: QualitygateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Qualitygate resources.
 */
export interface QualitygateState {
    /**
     * A list of conditions that the gate uses.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.QualitygateCondition>[]>;
    /**
     * Name of an existing Quality Gate to copy from.
     */
    copyFrom?: pulumi.Input<string>;
    /**
     * When set to true this Quality Gate is set as default.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The name of the Quality Gate to create. Maximum length 100.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Qualitygate resource.
 */
export interface QualitygateArgs {
    /**
     * A list of conditions that the gate uses.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.QualitygateCondition>[]>;
    /**
     * Name of an existing Quality Gate to copy from.
     */
    copyFrom?: pulumi.Input<string>;
    /**
     * When set to true this Quality Gate is set as default.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The name of the Quality Gate to create. Maximum length 100.
     */
    name?: pulumi.Input<string>;
}
