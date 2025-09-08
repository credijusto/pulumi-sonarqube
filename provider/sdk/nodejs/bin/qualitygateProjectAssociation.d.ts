import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Quality Gate Project association resource. This can be used to associate a Quality Gate to a Project
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * //# Example: create a quality gate project association
 * const mainQualitygate = new sonarqube.Qualitygate("mainQualitygate", {conditions: [{
 *     metric: "new_coverage",
 *     op: "LT",
 *     threshold: "30",
 * }]});
 * const mainProject = new sonarqube.Project("mainProject", {
 *     project: "my_project",
 *     visibility: "public",
 * });
 * const mainQualitygateProjectAssociation = new sonarqube.QualitygateProjectAssociation("mainQualitygateProjectAssociation", {
 *     gatename: mainQualitygate.id,
 *     projectkey: mainProject.project,
 * });
 * ```
 */
export declare class QualitygateProjectAssociation extends pulumi.CustomResource {
    /**
     * Get an existing QualitygateProjectAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QualitygateProjectAssociationState, opts?: pulumi.CustomResourceOptions): QualitygateProjectAssociation;
    /**
     * Returns true if the given object is an instance of QualitygateProjectAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is QualitygateProjectAssociation;
    readonly gateid: pulumi.Output<string | undefined>;
    /**
     * The name of the Quality Gate
     */
    readonly gatename: pulumi.Output<string | undefined>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    readonly projectkey: pulumi.Output<string>;
    /**
     * Create a QualitygateProjectAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QualitygateProjectAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering QualitygateProjectAssociation resources.
 */
export interface QualitygateProjectAssociationState {
    gateid?: pulumi.Input<string>;
    /**
     * The name of the Quality Gate
     */
    gatename?: pulumi.Input<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    projectkey?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a QualitygateProjectAssociation resource.
 */
export interface QualitygateProjectAssociationArgs {
    gateid?: pulumi.Input<string>;
    /**
     * The name of the Quality Gate
     */
    gatename?: pulumi.Input<string>;
    /**
     * Key of the project. Maximum length 400. All letters, digits, dash, underscore, period or colon.
     */
    projectkey: pulumi.Input<string>;
}
