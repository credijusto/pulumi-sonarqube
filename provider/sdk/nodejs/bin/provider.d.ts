import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the sonarqube package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    readonly host: pulumi.Output<string>;
    readonly httpProxy: pulumi.Output<string | undefined>;
    readonly installedEdition: pulumi.Output<string | undefined>;
    readonly installedVersion: pulumi.Output<string | undefined>;
    readonly pass: pulumi.Output<string | undefined>;
    readonly token: pulumi.Output<string | undefined>;
    readonly user: pulumi.Output<string | undefined>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Allows anonymizing users on destroy. Requires Sonarqube version >= 9.7.
     */
    anonymizeUserOnDelete?: pulumi.Input<boolean>;
    host: pulumi.Input<string>;
    httpProxy?: pulumi.Input<string>;
    installedEdition?: pulumi.Input<string>;
    installedVersion?: pulumi.Input<string>;
    pass?: pulumi.Input<string>;
    /**
     * Allows ignoring insecure certificates when set to true. Defaults to false. Disabling TLS verification is dangerous and
     * should only be done for local testing.
     */
    tlsInsecureSkipVerify?: pulumi.Input<boolean>;
    token?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
}
