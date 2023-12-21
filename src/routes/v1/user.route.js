const router = require("express").Router();
const { createTask, getTasks, updateTitleTask, updateStatusTask, deleteTask } = require("../../controllers/user.controller");
const { Auth } = require("../../middleware/middleware");

/**
 * @swagger
 * /user/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "User"
 *     summary: Example to create task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.post("/user/create", Auth, createTask)

/**
 * @swagger
 * /user:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "User"
 *     summary: Example to get task
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.get("/user/", Auth, getTasks)

/**
 * @swagger
 * /user/updateTitle:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "User"
 *     summary: Example to update title task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.put("/user/updateTitle", Auth, updateTitleTask)

/**
 * @swagger
 * /user/updateStatus:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "User"
 *     summary: Example to update status task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.put("/user/updateStatus", Auth, updateStatusTask)

/**
 * @swagger
 * /user/delete:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "User"
 *     summary: Example to delete task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.delete("/user/delete", Auth, deleteTask)

module.exports = router