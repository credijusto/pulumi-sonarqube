#!/usr/bin/env bash
set -euo pipefail

VERSION="${1:-v1.0.0}"
BINARY_NAME="pulumi-resource-sonarqube"
ASSET="${BINARY_NAME}-${VERSION}-linux-amd64.tar.gz"

# Usamos golang:alpine (musl), instalamos toolchain y compilamos estático.
docker run --rm -e CGO_ENABLED=1 -e GOOS=linux -e GOARCH=amd64 \
  -e CC=x86_64-alpine-linux-musl-gcc \
  -v "$PWD":/src -w /src golang:1.23-alpine sh -exc "
    apk add --no-cache build-base musl-dev
    rm -rf bin && mkdir -p bin
    go version
    go build -trimpath -tags netgo,osusergo \
      -ldflags '-linkmode external -extldflags \"-static\" -s -w' \
      -o bin/pulumi-resource-sonarqube ./cmd/pulumi-resource-sonarqube
    file bin/pulumi-resource-sonarqube
    ldd bin/pulumi-resource-sonarqube || echo '✅ Estático OK'
    tar -czvf pulumi-resource-sonarqube-v1.0.0-linux-amd64.tar.gz -C bin pulumi-resource-sonarqube
    sha256sum pulumi-resource-sonarqube-v1.0.0-linux-amd64.tar.gz
  "


echo "✅ Listo. Sube ${ASSET} a tu release."
