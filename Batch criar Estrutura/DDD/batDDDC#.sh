#!/bin/bash

echo "🚀 Criando estrutura DDD em C#..."

read -p "Nome do projeto: " nome

mkdir -p $nome/src/Domain/{Entities,ValueObjects,Repositories,Services,Events,Exceptions}
mkdir -p $nome/src/Application/{UseCases,DTOs,Queries,Commands,Handlers,Validators,Mappers,Services}
mkdir -p $nome/src/Infrastructure/{Persistence,Repositories,Services,Messaging,Cache,Logging,Config}
mkdir -p $nome/src/Interfaces/{Controllers,Middleware,Routes,Validators,Serializers}
mkdir -p $nome/tests/{Unit,Integration}
mkdir -p $nome/docs

# Domain
touch $nome/src/Domain/Entities/User.cs
touch $nome/src/Domain/Entities/Product.cs
touch $nome/src/Domain/ValueObjects/Email.cs
touch $nome/src/Domain/ValueObjects/Password.cs
touch $nome/src/Domain/Repositories/IUserRepository.cs
touch $nome/src/Domain/Services/UserDomainService.cs
touch $nome/src/Domain/Exceptions/DomainException.cs

# Application
touch $nome/src/Application/DTOs/CreateUserDTO.cs
touch $nome/src/Application/DTOs/UserResponseDTO.cs
touch $nome/src/Application/UseCases/CreateUserUseCase.cs
touch $nome/src/Application/UseCases/GetUserUseCase.cs
touch $nome/src/Application/UseCases/ListUsersUseCase.cs
touch $nome/src/Application/Validators/CreateUserValidator.cs
touch $nome/src/Application/Mappers/UserMapper.cs

# Infrastructure
touch $nome/src/Infrastructure/Repositories/UserRepository.cs
touch $nome/src/Infrastructure/Persistence/AppDbContext.cs
touch $nome/src/Infrastructure/Config/AppSettings.cs

# Interfaces
touch $nome/src/Interfaces/Controllers/UserController.cs
touch $nome/src/Interfaces/Controllers/AuthController.cs
touch $nome/src/Interfaces/Middleware/AuthMiddleware.cs
touch $nome/src/Interfaces/Routes/ApiRoutes.cs

# Program
touch $nome/src/Program.cs
touch $nome/appsettings.json
touch $nome/.gitignore
touch $nome/$nome.csproj

echo "✅ Projeto DDD C# criado!"
