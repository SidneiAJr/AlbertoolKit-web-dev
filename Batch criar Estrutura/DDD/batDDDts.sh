#!/bin/bash

echo "🚀 Criando estrutura DDD em TypeScript..."

read -p "Nome do projeto: " nome

mkdir -p $nome/src/domain/{entities,valueObjects,repositories,services,events,exceptions}
mkdir -p $nome/src/application/{useCases,dtos,queries,commands,handlers,validators,mappers,services}
mkdir -p $nome/src/infrastructure/{persistence,repositories,services,messaging,cache,logging,config}
mkdir -p $nome/src/interfaces/{controllers,middleware,routes,validators,serializers,docs}
mkdir -p $nome/src/shared/{constants,types,helpers}
mkdir -p $nome/tests/{unit,integration,e2e}
mkdir -p $nome/docs

# Domain
touch $nome/src/domain/entities/User.ts
touch $nome/src/domain/entities/Product.ts
touch $nome/src/domain/valueObjects/Email.ts
touch $nome/src/domain/valueObjects/Password.ts
touch $nome/src/domain/repositories/UserRepositoryInterface.ts
touch $nome/src/domain/services/UserDomainService.ts
touch $nome/src/domain/exceptions/DomainException.ts

# Application
touch $nome/src/application/dtos/CreateUserDTO.ts
touch $nome/src/application/dtos/UserResponseDTO.ts
touch $nome/src/application/useCases/CreateUserUseCase.ts
touch $nome/src/application/useCases/GetUserUseCase.ts
touch $nome/src/application/useCases/ListUsersUseCase.ts
touch $nome/src/application/validators/CreateUserValidator.ts
touch $nome/src/application/mappers/UserMapper.ts

# Infrastructure
touch $nome/src/infrastructure/repositories/UserRepository.ts
touch $nome/src/infrastructure/persistence/database.ts
touch $nome/src/infrastructure/config/env.ts
touch $nome/src/infrastructure/logging/logger.ts

# Interfaces
touch $nome/src/interfaces/controllers/UserController.ts
touch $nome/src/interfaces/controllers/AuthController.ts
touch $nome/src/interfaces/middleware/auth.ts
touch $nome/src/interfaces/middleware/errorHandler.ts
touch $nome/src/interfaces/routes/index.ts
touch $nome/src/interfaces/routes/userRoutes.ts

# Server
touch $nome/src/server.ts
touch $nome/.env
touch $nome/.gitignore
touch $nome/package.json
touch $nome/tsconfig.json

echo "✅ Projeto DDD TypeScript criado!"
