#!/bin/bash

echo "🚀 Criando estrutura MVC em PHP..."

read -p "Nome do projeto: " nome

# Cria pastas
mkdir -p $nome/app/{Controllers,Models,Services,Repositories,Middleware,Config,Utils}
mkdir -p $nome/public
mkdir -p $nome/routes
mkdir -p $nome/tests

# Cria arquivos dentro das pastas
touch $nome/app/Controllers/HomeController.php
touch $nome/app/Controllers/UserController.php
touch $nome/app/Controllers/AuthController.php

touch $nome/app/Models/UserModel.php
touch $nome/app/Models/ProductModel.php

touch $nome/app/Services/UserService.php
touch $nome/app/Services/AuthService.php

touch $nome/app/Repositories/UserRepository.php

touch $nome/app/Middleware/AuthMiddleware.php
touch $nome/app/Middleware/ErrorMiddleware.php

touch $nome/app/Config/database.php
touch $nome/app/Config/env.php

touch $nome/app/Utils/helpers.php

touch $nome/routes/index.php
touch $nome/routes/user.php
touch $nome/routes/auth.php

touch $nome/public/index.php
touch $nome/public/.htaccess

# Arquivos raiz
touch $nome/.env
touch $nome/.gitignore
touch $nome/composer.json

echo "✅ Projeto PHP $nome criado!"
echo "📁 cd $nome"
echo "📦 composer install"
echo "🔧 Adicione o conteúdo dos arquivos depois"
