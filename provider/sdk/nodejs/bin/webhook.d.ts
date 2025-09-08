import * as pulumi from "@pulumi/pulumi";
/**
 * Provides a Sonarqube Webhook resource. This can be used to manage Sonarqube webhooks.
 *
 * ## Example Usage
 *
 * ### Example: create a webhook
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const webhook = new sonarqube.Webhook("webhook", {url: "https://my-webhook-destination.example.com"});
 * ```
 *
 * ### Example: create a webhook owned by a project
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as sonarqube from "@pulumi/sonarqube";
 *
 * const project = new sonarqube.Project("project", {
 *     project: "project",
 *     visibility: "public",
 * });
 * const webhook = new sonarqube.Webhook("webhook", {
 *     url: "https://my-webhook-destination.example.com",
 *     project: project.name,
 * });
 * ```
 */
export declare class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebhookState, opts?: pulumi.CustomResourceOptions): Webhook;
    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Webhook;
    /**
     * The name of the webhook to create. This will be displayed in the Sonarqube administration console.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The key of the project that will own the webhook.
     */
    readonly project: pulumi.Output<string | undefined>;
    /**
     * The secret to send with the event payload.
     */
    readonly secret: pulumi.Output<string>;
    /**
     * The URL to send event payloads to. This must begin with either `https://` or `http://`.
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Webhook resources.
 */
export interface WebhookState {
    /**
     * The name of the webhook to create. This will be displayed in the Sonarqube administration console.
     */
    name?: pulumi.Input<string>;
    /**
     * The key of the project that will own the webhook.
     */
    project?: pulumi.Input<string>;
    /**
     * The secret to send with the event payload.
     */
    secret?: pulumi.Input<string>;
    /**
     * The URL to send event payloads to. This must begin with either `https://` or `http://`.
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * The name of the webhook to create. This will be displayed in the Sonarqube administration console.
     */
    name?: pulumi.Input<string>;
    /**
     * The key of the project that will own the webhook.
     */
    project?: pulumi.Input<string>;
    /**
     * The secret to send with the event payload.
     */
    secret?: pulumi.Input<string>;
    /**
     * The URL to send event payloads to. This must begin with either `https://` or `http://`.
     */
    url: pulumi.Input<string>;
}
