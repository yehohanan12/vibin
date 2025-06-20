// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const auth = require('../middlewares/auth');


router.get('/me', auth, userController.getProfile); // route protégée
router.post('/', userController.register.bind(userController));
router.post('/login', userController.login.bind(userController));
router.get('/', userController.getAll.bind(userController));
router.get('/:id', userController.getOne.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.delete.bind(userController));

module.exports = router;
