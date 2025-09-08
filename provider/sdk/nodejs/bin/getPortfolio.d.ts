import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to get a Sonarqube portfolio resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const portfolio = sonarqube.getPortfolio({
 *     key: "portfolio-key",
 * });
 * ```
 */
export declare function getPortfolio(args: GetPortfolioArgs, opts?: pulumi.InvokeOptions): Promise<GetPortfolioResult>;
/**
 * A collection of arguments for invoking getPortfolio.
 */
export interface GetPortfolioArgs {
    /**
     * The key of the portfolio
     */
    key: string;
}
/**
 * A collection of values returned by getPortfolio.
 */
export interface GetPortfolioResult {
    /**
     * Which branch is analyzed
     */
    readonly branch: string;
    /**
     * Description of the portfolio
     */
    readonly description: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The key of the portfolio
     */
    readonly key: string;
    /**
     * Name of the portfolio
     */
    readonly name: string;
    /**
     * `VW` (portfolios always have this qualifier)
     */
    readonly qualifier: string;
    /**
     * The regular expression used to populate the portfolio. Only active when `selectionMode` is `REGEXP`
     */
    readonly regexp: string;
    /**
     * How the Portfolio is populated. Possible values are `NONE`, `MANUAL`, `TAGS`, `REGEXP` or `REST`. [See docs](https://docs.sonarqube.org/9.8/project-administration/managing-portfolios/#populating-portfolios) for how Portfolio population works
     */
    readonly selectionMode: string;
    /**
     * The list of tags used to populate the Portfolio. Only active when `selectionMode` is `TAGS`
     */
    readonly tags: string[];
    /**
     * Portfolio visibility
     */
    readonly visibility: string;
}
/**
 * Use this data source to get a Sonarqube portfolio resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const portfolio = sonarqube.getPortfolio({
 *     key: "portfolio-key",
 * });
 * ```
 */
export declare function getPortfolioOutput(args: GetPortfolioOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPortfolioResult>;
/**
 * A collection of arguments for invoking getPortfolio.
 */
export interface GetPortfolioOutputArgs {
    /**
     * The key of the portfolio
     */
    key: pulumi.Input<string>;
}
