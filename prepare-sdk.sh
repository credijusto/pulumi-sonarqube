#!/bin/bash
set -e

echo "🔧 Preparando SDK Node.js de @pulumi/sonarqube..."

REPO_DIR=$(pwd)
SDK_DIR="$REPO_DIR/provider/sdk/nodejs"
BIN_DIR="$SDK_DIR/bin"

# Ir al SDK
cd "$SDK_DIR"

# Instalar dependencias si hace falta
echo "📦 Instalando dependencias..."
npm install

# Compilar TypeScript
echo "⚙️ Compilando SDK..."
npx tsc

# Asegurarse de que el package.json esté correcto
echo "📝 Ajustando package.json..."
cat > "$SDK_DIR/package.json" <<EOL
{
  "name": "@pulumi/sonarqube",
  "version": "1.0.0",
  "main": "bin/index.js",
  "types": "bin/index.d.ts",
  "dependencies": {
    "@pulumi/pulumi": "^3.0.0"
  }
}
EOL

# Copiar el package.json también dentro de bin/
echo "📋 Copiando package.json dentro de bin/..."
cp "$SDK_DIR/package.json" "$BIN_DIR/package.json"

# Mostrar contenido final
echo "✅ SDK preparado:"
ls -la "$BIN_DIR" | head -10
