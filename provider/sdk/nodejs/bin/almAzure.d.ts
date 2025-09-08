import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Azure Devops Alm/Devops Platform Integration resource. This can be used to create and manage a Alm/Devops
 * Platform Integration for Azure Devops.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const az1 = new sonarqube.AlmAzure("az1", {
 *     key: "az1",
 *     personalAccessToken: "my_pat",
 *     url: "https://dev.azure.com/my-org",
 * });
 * ```
 */
export declare class AlmAzure extends pulumi.CustomResource {
    /**
     * Get an existing AlmAzure resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlmAzureState, opts?: pulumi.CustomResourceOptions): AlmAzure;
    /**
     * Returns true if the given object is an instance of AlmAzure.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlmAzure;
    /**
     * Unique key of the Azure Devops instance setting
     */
    readonly key: pulumi.Output<string>;
    /**
     * Azure Devops personal access token
     */
    readonly personalAccessToken: pulumi.Output<string>;
    /**
     * Azure API URL
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a AlmAzure resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlmAzureArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AlmAzure resources.
 */
export interface AlmAzureState {
    /**
     * Unique key of the Azure Devops instance setting
     */
    key?: pulumi.Input<string>;
    /**
     * Azure Devops personal access token
     */
    personalAccessToken?: pulumi.Input<string>;
    /**
     * Azure API URL
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AlmAzure resource.
 */
export interface AlmAzureArgs {
    /**
     * Unique key of the Azure Devops instance setting
     */
    key: pulumi.Input<string>;
    /**
     * Azure Devops personal access token
     */
    personalAccessToken: pulumi.Input<string>;
    /**
     * Azure API URL
     */
    url: pulumi.Input<string>;
}
