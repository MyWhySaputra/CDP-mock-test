const express = require('express')
const router = express.Router()
const { login, verifyEmail, forgetPassword, resetPassword } = require('../../controller/auth.controller')

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *      - "User"
 *     summary: example to register
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *                pin:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
router.post('/auth/register', register)

/**
 * @swagger
 * /api/v2/auth/login:
 *   post:
 *     tags:
 *      - "Auth"
 *     summary: example to login with email or username and pin
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                :
 *                  type: string
 *                pin:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
router.post('/auth/login', login)

router.get('/auth/verify-email', verifyEmail)

router.post('/auth/forget-password', forgetPassword)

router.get("/auth/reset-password", (res) => {
    res.render("reset-password.ejs")
})

router.put('/auth/reset-password', resetPassword)

module.exports = router