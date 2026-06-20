module seuprojeto

go 1.21

require (
    // WEB
    github.com/gin-gonic/gin v1.9.1
    github.com/gin-contrib/cors v1.4.0

    // BANCO
    gorm.io/gorm v1.25.5
    gorm.io/driver/mysql v1.5.2
    gorm.io/driver/postgres v1.5.4

    // REDIS
    github.com/redis/go-redis/v9 v9.3.0

    // JWT
    github.com/golang-jwt/jwt/v5 v5.1.0

    // CONFIG
    github.com/joho/godotenv v1.5.1
    github.com/spf13/viper v1.18.0

    // VALIDAÇÃO
    github.com/go-playground/validator/v10 v10.16.0

    // LOGS
    go.uber.org/zap v1.26.0

    // TESTES
    github.com/stretchr/testify v1.8.4
)
