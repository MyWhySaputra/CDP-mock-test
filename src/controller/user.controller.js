const { ResponseTemplate } = require("../helper/template_helper")
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function createTask(req, res) {
    let { title } = req.body

    try {
        const data = await prisma.task.create({
        data: {
            title: title,
            completed: false,
            userId: req.user.id,
        },
        })

        let resp = ResponseTemplate(data, "create title success", null, 200);
        res.status(200).json(resp);
        return

    } catch (error) {
        let resp = ResponseTemplate(null, "internal server error", error, 500);
        res.status(500).json(resp);
        return
    }
}

async function getTasks(req, res) {

    try {
        const data = await prisma.task.findMany({
        where: {
            userId: req.user.id,
            deleted_at: null,
        },
        })
        let resp = ResponseTemplate(data, "get datas success", null, 200)
        res.status(200).json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, "internal server error", error, 500)
        res.status(500).json(resp)
        return
    }
}

async function updateTitleTask(req, res) {

    let { id , title } = req.body
    
    try {
        const data = await prisma.task.update({
        where: {
            id: parseInt(id),
        },
        data: {
            title: title,
        },
        })
        let resp = ResponseTemplate(data, "update title success", null, 200)
        res.status(200).json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, "internal server error", error, 500);
        res.status(500).json(resp);
        return;
    }
};

async function updateStatusTask(req, res) {

    let { id } = req.body

    try {
        const data = await prisma.task.update({
        where: {
            id: parseInt(id),
        },
        data: {
            completed: true,
        },
        });
        let resp = ResponseTemplate(data, "update status success", null, 200);
        res.status(200).json(resp);
        return;

    } catch (error) {
        let resp = ResponseTemplate(null, "internal server error", error, 500);
        res.status(500).json(resp);
        return;
    }
};

async function deleteTask(req, res) {
    let { id } = req.body

    try {
        const data = await prisma.task.update({
        where: {
            id: parseInt(id),
        },
        data: {
            deleted_at: new Date(),
        }
        });
        let resp = ResponseTemplate(data, "delete success", null, 200);
        res.status(200).json(resp);
        return;
    } catch (error) {
        let resp = ResponseTemplate(null, "internal server error", error, 500);
        res.status(500).json(resp);
        return
    }
}

module.exports = {
    createTask,
    getTasks,
    updateTitleTask,
    updateStatusTask,
    deleteTask
}