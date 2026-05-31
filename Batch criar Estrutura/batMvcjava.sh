#!/bin/bash

echo "🚀 Criando estrutura Spring Boot..."

read -p "Nome do projeto: " nome
PACKAGE=$(echo "$nome" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g')

# Cria estrutura Maven
mkdir -p $nome/src/main/java/com/example/$PACKAGE/{controller,model,service,repository,dto,config,exception,utils,security}
mkdir -p $nome/src/main/resources
mkdir -p $nome/src/test/java/com/example/$PACKAGE
mkdir -p $nome/docs

# Cria arquivos Java
touch $nome/src/main/java/com/example/$PACKAGE/controller/HomeController.java
touch $nome/src/main/java/com/example/$PACKAGE/controller/UserController.java
touch $nome/src/main/java/com/example/$PACKAGE/controller/AuthController.java

touch $nome/src/main/java/com/example/$PACKAGE/model/User.java
touch $nome/src/main/java/com/example/$PACKAGE/model/Product.java

touch $nome/src/main/java/com/example/$PACKAGE/service/UserService.java
touch $nome/src/main/java/com/example/$PACKAGE/service/AuthService.java

touch $nome/src/main/java/com/example/$PACKAGE/repository/UserRepository.java

touch $nome/src/main/java/com/example/$PACKAGE/dto/UserRequestDTO.java
touch $nome/src/main/java/com/example/$PACKAGE/dto/UserResponseDTO.java
touch $nome/src/main/java/com/example/$PACKAGE/dto/AuthRequestDTO.java

touch $nome/src/main/java/com/example/$PACKAGE/config/SecurityConfig.java
touch $nome/src/main/java/com/example/$PACKAGE/config/CorsConfig.java

touch $nome/src/main/java/com/example/$PACKAGE/exception/GlobalExceptionHandler.java

touch $nome/src/main/java/com/example/$PACKAGE/utils/JwtUtil.java
touch $nome/src/main/java/com/example/$PACKAGE/security/AuthInterceptor.java

touch $nome/src/main/resources/application.properties

touch $nome/src/main/java/com/example/$PACKAGE/Application.java

# Arquivos raiz
touch $nome/.gitignore
touch $nome/pom.xml

echo "✅ Projeto Spring Boot $nome criado!"
echo "📁 cd $nome"
echo "📦 mvn clean install"
echo "🚀 mvn spring-boot:run"
