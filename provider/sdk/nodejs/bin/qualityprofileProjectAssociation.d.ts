import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Quality Profile Project association resource. This can be used to associate a Quality Profile to a Project
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const mainQualityprofile = new sonarqube.Qualityprofile("mainQualityprofile", {language: "js"});
 * const mainProject = new sonarqube.Project("mainProject", {
 *     project: "my_project",
 *     visibility: "public",
 * });
 * const mainQualityprofileProjectAssociation = new sonarqube.QualityprofileProjectAssociation("mainQualityprofileProjectAssociation", {
 *     qualityProfile: mainQualityprofile.name,
 *     project: mainProject.project,
 *     language: "js",
 * });
 * ```
 */
export declare class QualityprofileProjectAssociation extends pulumi.CustomResource {
    /**
     * Get an existing QualityprofileProjectAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QualityprofileProjectAssociationState, opts?: pulumi.CustomResourceOptions): QualityprofileProjectAssociation;
    /**
     * Returns true if the given object is an instance of QualityprofileProjectAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is QualityprofileProjectAssociation;
    /**
     * Quality profile language. Must be a langauge in this list https://next.sonarqube.com/sonarqube/web_api/api/languages/list
     */
    readonly language: pulumi.Output<string>;
    /**
     * Name of the project
     */
    readonly project: pulumi.Output<string>;
    /**
     * Name of the Quality Profile
     */
    readonly qualityProfile: pulumi.Output<string>;
    /**
     * Create a QualityprofileProjectAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QualityprofileProjectAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering QualityprofileProjectAssociation resources.
 */
export interface QualityprofileProjectAssociationState {
    /**
     * Quality profile language. Must be a langauge in this list https://next.sonarqube.com/sonarqube/web_api/api/languages/list
     */
    language?: pulumi.Input<string>;
    /**
     * Name of the project
     */
    project?: pulumi.Input<string>;
    /**
     * Name of the Quality Profile
     */
    qualityProfile?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a QualityprofileProjectAssociation resource.
 */
export interface QualityprofileProjectAssociationArgs {
    /**
     * Quality profile language. Must be a langauge in this list https://next.sonarqube.com/sonarqube/web_api/api/languages/list
     */
    language: pulumi.Input<string>;
    /**
     * Name of the project
     */
    project: pulumi.Input<string>;
    /**
     * Name of the Quality Profile
     */
    qualityProfile: pulumi.Input<string>;
}
