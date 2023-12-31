const swaggerDefinition = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'CDP-Mock-Test',
            version: '1.0.0',
            description: 'Your API description',
        },
        servers: [
            {
                url: process.env.BASE_URL,
            },
            {
                url: 'http://localhost:3000',
            },

        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: "Authorization",
                    description: "Input your Token for Get Access",
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: [
        './src/routes/v1/auth.route.js',
        './src/routes/v1/user.route.js'
    ],

}

module.exports = swaggerDefinition