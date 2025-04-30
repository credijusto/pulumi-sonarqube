package main

import (
	"github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfgen"
	sonarqube "pulumi-sonarqube"
	"pulumi-sonarqube/pkg/version"
)

func main() {
	// Aquí debe invocar el proveedor sonarqube, asegurándose de que la importación sea correcta
	tfgen.Main("sonarqube", version.Version, sonarqube.Provider())
}
