package main

import (
	_ "embed"

	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge"
	sonarqube "pulumi-sonarqube"
	"pulumi-sonarqube/pkg/version"
)

//go:embed schema.json
var pulumiSchema []byte

func main() {
	tfbridge.Main("sonarqube", version.Version, sonarqube.Provider(), pulumiSchema)
}
