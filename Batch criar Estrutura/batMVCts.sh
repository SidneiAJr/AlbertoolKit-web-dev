#!/bin/bash

echo "🚀 Criando estrutura MVC em TypeScript..."

read -p "Nome do projeto: " nome

# Cria pastas
mkdir -p $nome/src/{controllers,models,routes,services,repositories,middleware,config,utils,tests}
mkdir -p $nome/src/types

# Cria arquivos dentro das pastas
touch $nome/src/controllers/HomeController.ts
touch $nome/src/controllers/UserController.ts
touch $nome/src/controllers/AuthController.ts

touch $nome/src/models/UserModel.ts
touch $nome/src/models/ProductModel.ts

touch $nome/src/routes/index.ts
touch $nome/src/routes/userRoutes.ts
touch $nome/src/routes/authRoutes.ts

touch $nome/src/services/UserService.ts
touch $nome/src/services/AuthService.ts

touch $nome/src/repositories/UserRepository.ts

touch $nome/src/middleware/auth.ts
touch $nome/src/middleware/errorHandler.ts

touch $nome/src/config/database.ts
touch $nome/src/config/env.ts

touch $nome/src/utils/helpers.ts
touch $nome/src/types/index.ts

# Arquivos raiz
touch $nome/src/app.ts
touch $nome/src/server.ts
touch $nome/.env
touch $nome/.gitignore
touch $nome/package.json
touch $nome/tsconfig.json

echo "✅ Projeto TypeScript $nome criado!"
echo "📁 cd $nome"
echo "📦 npm install"
echo "🔧 Adicione o conteúdo dos arquivos depois"
