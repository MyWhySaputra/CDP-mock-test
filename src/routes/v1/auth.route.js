const express = require('express')
const router = express.Router()
const { register, login, verifyEmail, forgetPin, forgetPassword, resetPassword } = require('../../controller/auth.controller')

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *      - "Auth"
 *     summary: example to register
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
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
 *                  type: string
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
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *      - "Auth"
 *     summary: example to login with email or username and pin
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                emailOrUsername:
 *                  type: string
 *                pin:
 *                  type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
router.post('/auth/login', login)

router.get('/auth/verify-email', verifyEmail)

/**
 * @swagger
 * /api/v1/auth/forget-pin:
 *   put:
 *     tags:
 *      - "Auth"
 *     summary: example to reset pin
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                emailOrUsername:
 *                  type: string
 *                password:
 *                  type: string
 *                newPin:
 *                  type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
router.put('/auth/forget-pin', forgetPin)

/**
 * @swagger
 * /api/v1/auth/forget-password:
 *   post:
 *     tags:
 *      - "Auth"
 *     summary: example to forget password
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                emailOrUsername:
 *                  type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
router.post('/auth/forget-password', forgetPassword)

/**
 * @swagger
 * /api/v1/auth/reset-password:
 *   put:
 *     tags:
 *      - "Auth"
 *     summary: example to reset password
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *                newPassword:
 *                  type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 */
router.put('/auth/reset-password', resetPassword)

module.exports = router