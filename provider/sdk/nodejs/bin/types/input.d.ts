import * as pulumi from "@pulumi/pulumi";
export interface PortfolioSelectedProject {
    /**
     * The project key of the project to add to the portfolio
     */
    projectKey: pulumi.Input<string>;
    /**
     * A set of branches for the project to add to the portfolio
     */
    selectedBranches?: pulumi.Input<pulumi.Input<string>[]>;
}
export interface ProjectSetting {
    /**
     * Setting field values for the supplied key
     */
    fieldValues?: pulumi.Input<pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>[]>;
    /**
     * Setting key
     */
    key: pulumi.Input<string>;
    /**
     * Setting a value for the supplied key
     */
    value?: pulumi.Input<string>;
    /**
     * Setting multi values for the supplied key
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}
export interface QualitygateCondition {
    /**
     * The ID of this resource.
     */
    id?: pulumi.Input<string>;
    /**
     * Condition metric.
     */
    metric: pulumi.Input<string>;
    /**
     * Condition operator. Possible values are: LT and GT
     */
    op: pulumi.Input<string>;
    /**
     * Condition error threshold (For ratings: A=1, B=2, C=3, D=4)
     */
    threshold: pulumi.Input<string>;
}
