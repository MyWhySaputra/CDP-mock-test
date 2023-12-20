const router = require("express").Router();
const { createTask, getTasks, updateTitleTask, updateStatusTask, deleteTask } = require("../../controllers/user.controller");
const { Auth } = require("../../middleware/middleware");

/**
 * @swagger
 * /todo/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to create Todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
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
router.post("/create", Auth, createTask)

/**
 * @swagger
 * /todo:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to get Todo
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
router.get("/", Auth, getTasks)

/**
 * @swagger
 * /todo/updateTitle:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to ypdateTitle Todo
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
router.put("/updateTitle", Auth, updateTitleTask)

/**
 * @swagger
 * /todo/updateStatus:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to ypdateTitle Todo
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
router.put("/updateStatus", Auth, updateStatusTask)

/**
 * @swagger
 * /todo/delete:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to ypdateTitle Todo
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
router.delete("/delete", Auth, deleteTask)

module.exports = router