module seuprojeto

go 1.21

require (
    // ===== WEB =====
    github.com/gin-gonic/gin v1.9.1
    github.com/gofiber/fiber/v2 v2.51.0

    // ===== BANCO =====
    gorm.io/gorm v1.25.5
    gorm.io/driver/mysql v1.5.2
    gorm.io/driver/postgres v1.5.4

    // ===== JWT =====
    github.com/golang-jwt/jwt/v5 v5.1.0

    // ===== REDIS =====
    github.com/redis/go-redis/v9 v9.3.0

    // ===== CONFIG =====
    github.com/joho/godotenv v1.5.1
    github.com/spf13/viper v1.18.0

    // ===== MENSAGERIA =====
    github.com/rabbitmq/amqp091-go v1.9.0
    github.com/segmentio/kafka-go v0.4.47

    // ===== LOGS =====
    go.uber.org/zap v1.26.0

    // ===== VALIDAÇÃO =====
    github.com/go-playground/validator/v10 v10.16.0

    // ===== SWAGGER =====
    github.com/swaggo/gin-swagger v1.6.0

    // ===== CLOUD =====
    github.com/aws/aws-sdk-go-v2 v1.24.0
    github.com/aws/aws-sdk-go-v2/service/s3 v1.47.0

    // ===== TESTES =====
    github.com/stretchr/testify v1.8.4
    github.com/stretchr/mockery v2.36.0
)
