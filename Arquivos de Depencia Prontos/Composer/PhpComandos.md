# Comandos para Instalar | PHP

## Iniciando Projeto
```bash
composer init
```

---

## Backend | Slim Framework

### Simples
```bash
composer require slim/slim slim/psr7
```

### Básico
```bash
composer require slim/slim slim/psr7 vlucas/phpdotenv
```

### Intermediário
```bash
composer require slim/slim slim/psr7 vlucas/phpdotenv firebase/php-jwt
```

### Avançado
```bash
composer require slim/slim slim/psr7 vlucas/phpdotenv firebase/php-jwt \
  php-di/php-di respect/validation
```

### Complexo
```bash
composer require slim/slim slim/psr7 vlucas/phpdotenv firebase/php-jwt \
  php-di/php-di respect/validation predis/predis monolog/monolog
composer require --dev phpunit/phpunit
```

### Enterprise
```bash
composer require slim/slim slim/psr7 vlucas/phpdotenv firebase/php-jwt \
  php-di/php-di respect/validation predis/predis monolog/monolog \
  guzzlehttp/guzzle ramsey/uuid
composer require --dev phpunit/phpunit phpstan/phpstan squizlabs/php_codesniffer
```

---

## Backend | Laravel

### Simples
```bash
composer create-project laravel/laravel nome-do-projeto
```

### Intermediário
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

### Avançado
```bash
composer require laravel/sanctum spatie/laravel-permission
composer require --dev barryvdh/laravel-debugbar
```

### Complexo
```bash
composer require laravel/sanctum spatie/laravel-permission \
  predis/predis maatwebsite/excel
composer require --dev barryvdh/laravel-debugbar phpunit/phpunit
```

### Enterprise
```bash
composer require laravel/sanctum spatie/laravel-permission \
  predis/predis maatwebsite/excel guzzlehttp/guzzle \
  spatie/laravel-activitylog laravel/horizon
composer require --dev barryvdh/laravel-debugbar phpunit/phpunit \
  phpstan/phpstan laravel/telescope
```

---

## Configuração do .env
```bash
cp .env.example .env
php artisan key:generate  # só no Laravel
```

> Exemplo de `.env` para Slim:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=meu_banco
JWT_SECRET=
APP_ENV=development
```

---

## Rodar o servidor

### Slim
```bash
php -S localhost:8080 -t public
```

### Laravel
```bash
php artisan serve
```

---

## API
```bash
composer require guzzlehttp/guzzle vlucas/phpdotenv
```

> ⚠️ Sempre rode `composer outdated` pra verificar dependências desatualizadas
