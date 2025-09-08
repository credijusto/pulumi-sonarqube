export interface GetQualitygateCondition {
    id: string;
    metric: string;
    op: string;
    threshold: string;
}
export interface PortfolioSelectedProject {
    /**
     * The project key of the project to add to the portfolio
     */
    projectKey: string;
    /**
     * A set of branches for the project to add to the portfolio
     */
    selectedBranches?: string[];
}
export interface ProjectSetting {
    /**
     * Setting field values for the supplied key
     */
    fieldValues?: {
        [key: string]: string;
    }[];
    /**
     * Setting key
     */
    key: string;
    /**
     * Setting a value for the supplied key
     */
    value?: string;
    /**
     * Setting multi values for the supplied key
     */
    values?: string[];
}
export interface QualitygateCondition {
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * Condition metric.
     */
    metric: string;
    /**
     * Condition operator. Possible values are: LT and GT
     */
    op: string;
    /**
     * Condition error threshold (For ratings: A=1, B=2, C=3, D=4)
     */
    threshold: string;
}
