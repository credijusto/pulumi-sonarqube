# Linux x86_64
GOOS=linux GOARCH=amd64 go build -o bin/pulumi-resource-sonarqube ./cmd/pulumi-resource-sonarqube
tar -czvf pulumi-resource-sonarqube-v1.0.0-linux-amd64.tar.gz -C bin pulumi-resource-sonarqube

# macOS Intel
GOOS=darwin GOARCH=amd64 go build -o bin/pulumi-resource-sonarqube ./cmd/pulumi-resource-sonarqube
tar -czvf pulumi-resource-sonarqube-v1.0.0-darwin-amd64.tar.gz -C bin pulumi-resource-sonarqube

# macOS ARM (M1/M2)
GOOS=darwin GOARCH=arm64 go build -o bin/pulumi-resource-sonarqube ./cmd/pulumi-resource-sonarqube
tar -czvf pulumi-resource-sonarqube-v1.0.0-darwin-arm64.tar.gz -C bin pulumi-resource-sonarqube

# Windows x86_64
GOOS=windows GOARCH=amd64 go build -o bin/pulumi-resource-sonarqube.exe ./cmd/pulumi-resource-sonarqube
zip pulumi-resource-sonarqube-v1.0.0-windows-amd64.zip bin/pulumi-resource-sonarqube.exe


## show
file bin/pulumi-resource-sonarqube

tar -czvf pulumi-resource-sonarqube-v1.0.0-linux-amd64.tar.gz -C bin pulumi-resource-sonarqube