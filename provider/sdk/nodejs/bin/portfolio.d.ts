import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * Provides a Sonarqube Portfolio resource. This can be used to create and manage Sonarqube Portfolio. Note that the SonarQube API for Portfolios is called ``views``
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const main = new sonarqube.Portfolio("main", {
 *     description: "portfolio-description",
 *     key: "portfolio-key",
 * });
 * ```
 */
export declare class Portfolio extends pulumi.CustomResource {
    /**
     * Get an existing Portfolio resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PortfolioState, opts?: pulumi.CustomResourceOptions): Portfolio;
    /**
     * Returns true if the given object is an instance of Portfolio.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Portfolio;
    /**
     * Which branch to analyze. If nothing, or '' is specified, the main branch is used.
     */
    readonly branch: pulumi.Output<string | undefined>;
    /**
     * A description of the Portfolio to create
     */
    readonly description: pulumi.Output<string>;
    /**
     * The key of the Portfolio to create
     */
    readonly key: pulumi.Output<string>;
    /**
     * The name of the Portfolio to create
     */
    readonly name: pulumi.Output<string>;
    readonly qualifier: pulumi.Output<string>;
    /**
     * A regular expression that is used to match Projects with a matching name OR key. If they match, they are added to the Portfolio
     */
    readonly regexp: pulumi.Output<string | undefined>;
    /**
     * A set of projects to add to the portfolio.
     */
    readonly selectedProjects: pulumi.Output<outputs.PortfolioSelectedProject[] | undefined>;
    /**
     * How to populate the Portfolio to create. Possible values are `NONE`, `MANUAL`, `TAGS`, `REGEXP` or `REST`. [See docs](https://docs.sonarqube.org/9.8/project-administration/managing-portfolios/#populating-portfolios) for how Portfolio population works
     */
    readonly selectionMode: pulumi.Output<string | undefined>;
    /**
     * List of Project tags to populate the Portfolio from. Only active when `selectionMode` is `TAGS`
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * Whether the created portfolio should be visible to everyone, or only specific user/groups. If no visibility is specified, the default portfolio visibility will be `public`.
     */
    readonly visibility: pulumi.Output<string | undefined>;
    /**
     * Create a Portfolio resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PortfolioArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Portfolio resources.
 */
export interface PortfolioState {
    /**
     * Which branch to analyze. If nothing, or '' is specified, the main branch is used.
     */
    branch?: pulumi.Input<string>;
    /**
     * A description of the Portfolio to create
     */
    description?: pulumi.Input<string>;
    /**
     * The key of the Portfolio to create
     */
    key?: pulumi.Input<string>;
    /**
     * The name of the Portfolio to create
     */
    name?: pulumi.Input<string>;
    qualifier?: pulumi.Input<string>;
    /**
     * A regular expression that is used to match Projects with a matching name OR key. If they match, they are added to the Portfolio
     */
    regexp?: pulumi.Input<string>;
    /**
     * A set of projects to add to the portfolio.
     */
    selectedProjects?: pulumi.Input<pulumi.Input<inputs.PortfolioSelectedProject>[]>;
    /**
     * How to populate the Portfolio to create. Possible values are `NONE`, `MANUAL`, `TAGS`, `REGEXP` or `REST`. [See docs](https://docs.sonarqube.org/9.8/project-administration/managing-portfolios/#populating-portfolios) for how Portfolio population works
     */
    selectionMode?: pulumi.Input<string>;
    /**
     * List of Project tags to populate the Portfolio from. Only active when `selectionMode` is `TAGS`
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the created portfolio should be visible to everyone, or only specific user/groups. If no visibility is specified, the default portfolio visibility will be `public`.
     */
    visibility?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Portfolio resource.
 */
export interface PortfolioArgs {
    /**
     * Which branch to analyze. If nothing, or '' is specified, the main branch is used.
     */
    branch?: pulumi.Input<string>;
    /**
     * A description of the Portfolio to create
     */
    description: pulumi.Input<string>;
    /**
     * The key of the Portfolio to create
     */
    key: pulumi.Input<string>;
    /**
     * The name of the Portfolio to create
     */
    name?: pulumi.Input<string>;
    /**
     * A regular expression that is used to match Projects with a matching name OR key. If they match, they are added to the Portfolio
     */
    regexp?: pulumi.Input<string>;
    /**
     * A set of projects to add to the portfolio.
     */
    selectedProjects?: pulumi.Input<pulumi.Input<inputs.PortfolioSelectedProject>[]>;
    /**
     * How to populate the Portfolio to create. Possible values are `NONE`, `MANUAL`, `TAGS`, `REGEXP` or `REST`. [See docs](https://docs.sonarqube.org/9.8/project-administration/managing-portfolios/#populating-portfolios) for how Portfolio population works
     */
    selectionMode?: pulumi.Input<string>;
    /**
     * List of Project tags to populate the Portfolio from. Only active when `selectionMode` is `TAGS`
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the created portfolio should be visible to everyone, or only specific user/groups. If no visibility is specified, the default portfolio visibility will be `public`.
     */
    visibility?: pulumi.Input<string>;
}
