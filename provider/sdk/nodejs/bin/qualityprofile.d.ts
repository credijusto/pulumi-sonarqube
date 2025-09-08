import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Quality Profile resource. This can be used to create and manage Sonarqube Quality Profiles.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = new sonarqube.Qualityprofile("main", {
 *     isDefault: false,
 *     language: "js",
 *     parent: "sonar way",
 * });
 * ```
 */
export declare class Qualityprofile extends pulumi.CustomResource {
    /**
     * Get an existing Qualityprofile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QualityprofileState, opts?: pulumi.CustomResourceOptions): Qualityprofile;
    /**
     * Returns true if the given object is an instance of Qualityprofile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Qualityprofile;
    /**
     * When set to true this will make the added Quality Profile default
     */
    readonly isDefault: pulumi.Output<boolean | undefined>;
    /**
     * ID of the Sonarqube Quality Profile
     */
    readonly key: pulumi.Output<string>;
    /**
     * Quality profile language. Must be one of "cs", "css", "flex", "go", "java", "js", "jsp", "kotlin", "php", "py", "ruby", "scala", "ts", "vbnet", "web", "xml"
     */
    readonly language: pulumi.Output<string>;
    /**
     * The name of the Quality Profile to create. Maximum length 100
     */
    readonly name: pulumi.Output<string>;
    /**
     * When a parent is provided the quality profile will inherit it's rules
     */
    readonly parent: pulumi.Output<string | undefined>;
    /**
     * Create a Qualityprofile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QualityprofileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Qualityprofile resources.
 */
export interface QualityprofileState {
    /**
     * When set to true this will make the added Quality Profile default
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * ID of the Sonarqube Quality Profile
     */
    key?: pulumi.Input<string>;
    /**
     * Quality profile language. Must be one of "cs", "css", "flex", "go", "java", "js", "jsp", "kotlin", "php", "py", "ruby", "scala", "ts", "vbnet", "web", "xml"
     */
    language?: pulumi.Input<string>;
    /**
     * The name of the Quality Profile to create. Maximum length 100
     */
    name?: pulumi.Input<string>;
    /**
     * When a parent is provided the quality profile will inherit it's rules
     */
    parent?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Qualityprofile resource.
 */
export interface QualityprofileArgs {
    /**
     * When set to true this will make the added Quality Profile default
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * Quality profile language. Must be one of "cs", "css", "flex", "go", "java", "js", "jsp", "kotlin", "php", "py", "ruby", "scala", "ts", "vbnet", "web", "xml"
     */
    language: pulumi.Input<string>;
    /**
     * The name of the Quality Profile to create. Maximum length 100
     */
    name?: pulumi.Input<string>;
    /**
     * When a parent is provided the quality profile will inherit it's rules
     */
    parent?: pulumi.Input<string>;
}
