#!/bin/bash

echo "🚀 Criando estrutura DDD em PHP..."

read -p "Nome do projeto: " nome

mkdir -p $nome/src/Domain/{Entity,ValueObject,Repository,Service,Event,Exception}
mkdir -p $nome/src/Application/{UseCase,DTO,Query,Command,Handler,Validator,Mapper,Service}
mkdir -p $nome/src/Infrastructure/{Persistence,Repository,Service,Messaging,Cache,Logging,Config}
mkdir -p $nome/src/Interfaces/{Controller,Middleware,Route,Validator,Serializer}
mkdir -p $nome/tests/{Unit,Integration}
mkdir -p $nome/public
mkdir -p $nome/docs

# Domain
touch $nome/src/Domain/Entity/User.php
touch $nome/src/Domain/Entity/Product.php
touch $nome/src/Domain/ValueObject/Email.php
touch $nome/src/Domain/ValueObject/Password.php
touch $nome/src/Domain/Repository/UserRepositoryInterface.php
touch $nome/src/Domain/Service/UserDomainService.php
touch $nome/src/Domain/Exception/DomainException.php

# Application
touch $nome/src/Application/DTO/CreateUserDTO.php
touch $nome/src/Application/DTO/UserResponseDTO.php
touch $nome/src/Application/UseCase/CreateUserUseCase.php
touch $nome/src/Application/UseCase/GetUserUseCase.php
touch $nome/src/Application/UseCase/ListUsersUseCase.php
touch $nome/src/Application/Validator/CreateUserValidator.php
touch $nome/src/Application/Mapper/UserMapper.php

# Infrastructure
touch $nome/src/Infrastructure/Repository/UserRepository.php
touch $nome/src/Infrastructure/Persistence/Database.php
touch $nome/src/Infrastructure/Config/env.php
touch $nome/src/Infrastructure/Logging/Logger.php

# Interfaces
touch $nome/src/Interfaces/Controller/UserController.php
touch $nome/src/Interfaces/Controller/AuthController.php
touch $nome/src/Interfaces/Middleware/AuthMiddleware.php
touch $nome/src/Interfaces/Route/index.php
touch $nome/src/Interfaces/Route/user.php

# Public
touch $nome/public/index.php
touch $nome/.env
touch $nome/.gitignore
touch $nome/composer.json

echo "✅ Projeto DDD PHP criado!"
