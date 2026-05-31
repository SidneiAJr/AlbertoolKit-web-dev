#!/bin/bash

echo "🚀 Criando estrutura DDD em Java Spring..."

read -p "Nome do projeto: " nome
PACKAGE=$(echo "$nome" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')

mkdir -p $nome/src/main/java/com/example/$PACKAGE/domain/{entity,valueobject,repository,service,event,exception}
mkdir -p $nome/src/main/java/com/example/$PACKAGE/application/{usecase,dto,query,command,handler,validator,mapper,service}
mkdir -p $nome/src/main/java/com/example/$PACKAGE/infrastructure/{persistence,repository,service,messaging,cache,logging,config}
mkdir -p $nome/src/main/java/com/example/$PACKAGE/interfaces/{controller,middleware,route,validator,serializer}
mkdir -p $nome/src/main/resources
mkdir -p $nome/src/test/java/com/example/$PACKAGE
mkdir -p $nome/docs

# Domain
touch $nome/src/main/java/com/example/$PACKAGE/domain/entity/User.java
touch $nome/src/main/java/com/example/$PACKAGE/domain/entity/Product.java
touch $nome/src/main/java/com/example/$PACKAGE/domain/valueobject/Email.java
touch $nome/src/main/java/com/example/$PACKAGE/domain/valueobject/Password.java
touch $nome/src/main/java/com/example/$PACKAGE/domain/repository/UserRepositoryInterface.java
touch $nome/src/main/java/com/example/$PACKAGE/domain/service/UserDomainService.java
touch $nome/src/main/java/com/example/$PACKAGE/domain/exception/DomainException.java

# Application
touch $nome/src/main/java/com/example/$PACKAGE/application/dto/CreateUserDTO.java
touch $nome/src/main/java/com/example/$PACKAGE/application/dto/UserResponseDTO.java
touch $nome/src/main/java/com/example/$PACKAGE/application/usecase/CreateUserUseCase.java
touch $nome/src/main/java/com/example/$PACKAGE/application/usecase/GetUserUseCase.java
touch $nome/src/main/java/com/example/$PACKAGE/application/usecase/ListUsersUseCase.java
touch $nome/src/main/java/com/example/$PACKAGE/application/validator/CreateUserValidator.java
touch $nome/src/main/java/com/example/$PACKAGE/application/mapper/UserMapper.java

# Infrastructure
touch $nome/src/main/java/com/example/$PACKAGE/infrastructure/repository/UserRepository.java
touch $nome/src/main/java/com/example/$PACKAGE/infrastructure/persistence/DatabaseConfig.java
touch $nome/src/main/java/com/example/$PACKAGE/infrastructure/config/AppConfig.java

# Interfaces
touch $nome/src/main/java/com/example/$PACKAGE/interfaces/controller/UserController.java
touch $nome/src/main/java/com/example/$PACKAGE/interfaces/controller/AuthController.java
touch $nome/src/main/java/com/example/$PACKAGE/interfaces/middleware/AuthMiddleware.java

# Main
touch $nome/src/main/java/com/example/$PACKAGE/Application.java
touch $nome/src/main/resources/application.properties
touch $nome/.gitignore
touch $nome/pom.xml

echo "✅ Projeto DDD Java Spring criado!"
