#!/bin/bash

echo "🚀 Criando estrutura DDD em JavaScript..."

read -p "Nome do projeto: " nome

# Domain Layer
mkdir -p $nome/src/domain/{entities,valueObjects,repositories,services,events,exceptions}

# Application Layer
mkdir -p $nome/src/application/{useCases,dtos,queries,commands,handlers,validators,mappers,services}

# Infrastructure Layer
mkdir -p $nome/src/infrastructure/{persistence,repositories,services,messaging,cache,logging,config}

# Interfaces Layer
mkdir -p $nome/src/interfaces/{controllers,middleware,routes,validators,serializers,docs}

# Shared
mkdir -p $nome/src/shared/{constants,types,helpers}
mkdir -p $nome/tests/{unit,integration,e2e}
mkdir -p $nome/docs

# Domain
touch $nome/src/domain/entities/User.js
touch $nome/src/domain/entities/Product.js
touch $nome/src/domain/valueObjects/Email.js
touch $nome/src/domain/valueObjects/Password.js
touch $nome/src/domain/repositories/UserRepositoryInterface.js
touch $nome/src/domain/services/UserDomainService.js
touch $nome/src/domain/exceptions/DomainException.js

# Application
touch $nome/src/application/dtos/CreateUserDTO.js
touch $nome/src/application/dtos/UserResponseDTO.js
touch $nome/src/application/useCases/CreateUserUseCase.js
touch $nome/src/application/useCases/GetUserUseCase.js
touch $nome/src/application/useCases/ListUsersUseCase.js
touch $nome/src/application/validators/CreateUserValidator.js
touch $nome/src/application/mappers/UserMapper.js

# Infrastructure
touch $nome/src/infrastructure/repositories/UserRepository.js
touch $nome/src/infrastructure/persistence/database.js
touch $nome/src/infrastructure/config/env.js
touch $nome/src/infrastructure/logging/logger.js

# Interfaces
touch $nome/src/interfaces/controllers/UserController.js
touch $nome/src/interfaces/controllers/AuthController.js
touch $nome/src/interfaces/middleware/auth.js
touch $nome/src/interfaces/middleware/errorHandler.js
touch $nome/src/interfaces/routes/index.js
touch $nome/src/interfaces/routes/userRoutes.js

# Server
touch $nome/src/server.js
touch $nome/.env
touch $nome/.gitignore
touch $nome/package.json

echo "✅ Projeto DDD JavaScript criado!"
