const { ComparePassword } = require('../helper/hash_pass_helper')
const { ResponseTemplate } = require('../helper/template.helper')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
var jwt = require('jsonwebtoken')
const transporter = require('../lib/nodemailer')

async function register(req, res) {

    const { name, email, username, password, pin } = req.body

    const hashPass = await HashPassword(password)

    const hashPin = await HashPassword(pin)

    const payload = {
        name,
        email,
        username,
        password: hashPass,
        pin: hashPin,
    }

    const emailUser = await prisma.user.findUnique({
        where: {email: payload.email},
    })

    if (emailUser) {
        let resp = ResponseTemplate(null, 'Email already exist', null, 404)
        res.status(404).json(resp)
        return
    }

    const usernameUser = await prisma.user.findUnique({
        where: {username: payload.username},
    })

    if (usernameUser) {
        let resp = ResponseTemplate(null, 'Username already exist', null, 404)
        res.status(404).json(resp)
        return
    }

    try {
        
        await prisma.user.create({
            data: payload
        })

        await transporter.sendMail({
            from: process.env.EMAIL_SMTP, 
            to: payload.email, 
            subject: "Verification your email", 
            text: `Click here to verify your email`,
            html: `<a href="${process.env.BASE_URL}api/v1/auth/verify-email?email=${payload.email}">Click here to verify your email</a>`,
        })

        const userView = await prisma.user.findUnique({
            where: {
                email: payload.email
            },
            select: {
                id: true,
                name: true,
                email: true,
                username: true,
            },
        });

        let resp = ResponseTemplate(userView, 'success, please check your email', null, 200)
        res.status(200).json(resp);
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.status(500).json(resp)
        return

    }
}

async function login(req, res) {

    try {
        const { emailOrUsername, pin } = req.body

        const checkUser = await prisma.user.findUnique({
            where: {
                OR: [
                    { email: emailOrUsername },
                    { username: emailOrUsername }
                ],
            }
        })

        if (checkUser === null) {
            let resp = ResponseTemplate(null, 'email is not found or incorrect', null, 400)
            res.status(400).json(resp)
            return
        }

        const checkPassword = await ComparePassword(pin, checkUser.pin)

        if (!checkPassword) {
            let resp = ResponseTemplate(null, 'pin is not correct', null, 400)
            res.status(400).json(resp)
            return
        }

        const token = jwt.sign({
            id: checkUser.id,
            email: checkUser.email
        }, process.env.SECRET_KEY)

        const data = {
            token: token
        }

        let resp = ResponseTemplate(data, 'success', null, 200)
        res.status(200).json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.status(500).json(resp)
        return
    }
}

async function verifyEmail(req, res) {

    const { email } = req.query

    try {

        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                is_verified: true
            }
        })

        let resp = ResponseTemplate(null, 'your email has been verified', null, 200)
        res.status(200).json(resp);
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.status(500).json(resp)
        return
    }
}

async function forgetPin(req, res) {

    const { emailOrUsername, password, newPin} = req.body

    try {

        const checkUser = await prisma.user.findUnique({
            where: {
                OR: [
                    { email: emailOrUsername },
                    { username: emailOrUsername }
                ],
            }
        })

        if (checkUser === null) {
            let resp = ResponseTemplate(null, 'email or username is not found', null, 400)
            res.status(400).json(resp)
            return
        }

        const checkPassword = await ComparePassword(password, checkUser.password)

        if (!checkPassword) {
            let resp = ResponseTemplate(null, 'password is not correct', null, 400)
            res.status(400).json(resp)
            return
        }

        const hashPin = await HashPassword(newPin)

        await prisma.user.update({
            where: { email: checkUser.email },
            data: {
                pin: hashPin,
            },
        })

        let resp = ResponseTemplate(null, 'check your email', null, 200)
        res.status(200).json(resp);
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        Sentry.captureException(error)
        res.status(500).json(resp)
        return
    }
}

async function forgetPassword(req, res) {

    const { emailOrUsername } = req.body

    try {

        const checkUser = await prisma.user.findUnique({
            where: {
                OR: [
                    { email: emailOrUsername },
                    { username: emailOrUsername }
                ],
            }
        })

        if (checkUser === null) {
            let resp = ResponseTemplate(null, 'email or username is not found', null, 400)
            res.status(400).json(resp)
            return
        }

        const token = jwt.sign({
            email: checkUser.email,
        }, process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        await transporter.sendMail({
            from: process.env.EMAIL_SMTP, 
            to: email, 
            subject: "Reset your password",
            html: `Copy your token = ${token}`,
        })

        let resp = ResponseTemplate(null, 'check your email', null, 200)
        res.status(200).json(resp);
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        Sentry.captureException(error)
        res.status(500).json(resp)
        return
    }
}

async function resetPassword(req, res) {

    const { token, newPassword } = req.body

    try {

        const user = await jwt.verify(token, process.env.SECRET_KEY)

        const encryptedPassword = await HashPassword(newPassword)

        await prisma.user.update({
            where: { email: user.email },
            data: {
                password: encryptedPassword,
            },
        })

        let resp = ResponseTemplate(null, 'Password reset successfully', null, 200)
        res.status(200).json(resp);
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        Sentry.captureException(error)
        res.status(500).json(resp)
        return
    }
}

module.exports = {
    register,
    login,
    verifyEmail,
    forgetPin,
    forgetPassword,
    resetPassword
}