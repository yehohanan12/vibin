// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { authMiddleware, requireRole } = require('../Middlewares/auth');

//Routes publiques (pas besoin d'authentification)
router.post('/login', userController.login.bind(userController));
router.post('/', userController.register.bind(userController));

//Appliquer l'authMiddleware à toutes les routes suivantes
router.use(authMiddleware);

// Route pour l'utilisateur connecté
router.get('/me', userController.getProfile.bind(userController));

// Routes réservées aux admins
router.get('/admin/users', requireRole('admin'), userController.getAll.bind(userController));

// Routes utilisateurs (à restreindre selon le besoin)
router.get('/', requireRole('admin'), userController.getAll.bind(userController)); // ou accessible à tous les connectés
router.get('/:id', userController.getOne.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.delete.bind(userController));

module.exports = router;
