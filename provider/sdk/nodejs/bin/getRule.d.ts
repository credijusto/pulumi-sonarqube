import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to get a Sonarqube rule resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const rule = sonarqube.getRule({
 *     key: "squid:forbidSonar",
 * });
 * ```
 */
export declare function getRule(args: GetRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRuleResult>;
/**
 * A collection of arguments for invoking getRule.
 */
export interface GetRuleArgs {
    /**
     * The key of the sonarqube rule. Should be \n\n:\n\n. https://next.sonarqube.com/sonarqube/web_api/api/rules?query=api%2Frules%2Fcreate
     */
    key: string;
}
/**
 * A collection of values returned by getRule.
 */
export interface GetRuleResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The key of the sonarqube rule. Should be \n\n:\n\n. https://next.sonarqube.com/sonarqube/web_api/api/rules?query=api%2Frules%2Fcreate
     */
    readonly key: string;
    /**
     * Rule description
     */
    readonly markdownDescription: string;
    /**
     * Rule name
     */
    readonly name: string;
    /**
     * Rule severity
     */
    readonly severity: string;
    /**
     * Rule status
     */
    readonly status: string;
    /**
     * Key of the template rule
     */
    readonly templateKey: string;
    /**
     * Rule type
     */
    readonly type: string;
}
/**
 * Use this data source to get a Sonarqube rule resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const rule = sonarqube.getRule({
 *     key: "squid:forbidSonar",
 * });
 * ```
 */
export declare function getRuleOutput(args: GetRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRuleResult>;
/**
 * A collection of arguments for invoking getRule.
 */
export interface GetRuleOutputArgs {
    /**
     * The key of the sonarqube rule. Should be \n\n:\n\n. https://next.sonarqube.com/sonarqube/web_api/api/rules?query=api%2Frules%2Fcreate
     */
    key: pulumi.Input<string>;
}
