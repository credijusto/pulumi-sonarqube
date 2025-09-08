import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Azure Devops binding resource. This can be used to create and manage the binding between an
 * Azure Devops repository and a SonarQube project
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
 * const mainProject = new sonarqube.Project("mainProject", {
 *     project: "main",
 *     visibility: "public",
 * });
 * const mainAzureBinding = new sonarqube.AzureBinding("mainAzureBinding", {
 *     almSetting: az1.key,
 *     project: mainProject.project,
 *     projectName: "my_azure_project",
 *     repositoryName: "my_repo",
 * });
 * ```
 */
export declare class AzureBinding extends pulumi.CustomResource {
    /**
     * Get an existing AzureBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AzureBindingState, opts?: pulumi.CustomResourceOptions): AzureBinding;
    /**
     * Returns true if the given object is an instance of AzureBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AzureBinding;
    /**
     * Azure DevOps setting key
     */
    readonly almSetting: pulumi.Output<string>;
    /**
     * Is this project part of a monorepo
     */
    readonly monorepo: pulumi.Output<boolean | undefined>;
    /**
     * SonarQube project key
     */
    readonly project: pulumi.Output<string>;
    /**
     * Azure project name
     */
    readonly projectName: pulumi.Output<string>;
    /**
     * Azure repository name
     */
    readonly repositoryName: pulumi.Output<string>;
    /**
     * Create a AzureBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureBindingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AzureBinding resources.
 */
export interface AzureBindingState {
    /**
     * Azure DevOps setting key
     */
    almSetting?: pulumi.Input<string>;
    /**
     * Is this project part of a monorepo
     */
    monorepo?: pulumi.Input<boolean>;
    /**
     * SonarQube project key
     */
    project?: pulumi.Input<string>;
    /**
     * Azure project name
     */
    projectName?: pulumi.Input<string>;
    /**
     * Azure repository name
     */
    repositoryName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AzureBinding resource.
 */
export interface AzureBindingArgs {
    /**
     * Azure DevOps setting key
     */
    almSetting: pulumi.Input<string>;
    /**
     * Is this project part of a monorepo
     */
    monorepo?: pulumi.Input<boolean>;
    /**
     * SonarQube project key
     */
    project: pulumi.Input<string>;
    /**
     * Azure project name
     */
    projectName: pulumi.Input<string>;
    /**
     * Azure repository name
     */
    repositoryName: pulumi.Input<string>;
}
