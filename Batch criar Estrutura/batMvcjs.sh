#!/bin/bash

echo "🚀 Criando estrutura MVC..."

read -p "Nome do projeto: " nome

# Cria pastas e arquivos dentro delas
mkdir -p $nome/controllers
mkdir -p $nome/models
mkdir -p $nome/routes
mkdir -p $nome/services
mkdir -p $nome/repositories
mkdir -p $nome/middleware
mkdir -p $nome/config
mkdir -p $nome/utils
mkdir -p $nome/tests

# Cria arquivos dentro das pastas
touch $nome/controllers/HomeController.js
touch $nome/controllers/UserController.js
touch $nome/controllers/AuthController.js

touch $nome/models/UserModel.js
touch $nome/models/ProductModel.js

touch $nome/routes/index.js
touch $nome/routes/userRoutes.js
touch $nome/routes/authRoutes.js

touch $nome/services/UserService.js
touch $nome/services/AuthService.js

touch $nome/repositories/UserRepository.js

touch $nome/middleware/auth.js
touch $nome/middleware/errorHandler.js

touch $nome/config/database.js
touch $nome/config/env.js

touch $nome/utils/helpers.js

# Arquivos raiz
touch $nome/app.js
touch $nome/server.js
touch $nome/.env
touch $nome/.gitignore
touch $nome/package.json

echo "✅ Projeto $nome criado!"
echo "📁 cd $nome"
echo "📦 Depois você adiciona o conteúdo dos arquivos"
