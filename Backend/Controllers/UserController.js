const userService = require('../Services/UserService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

class UserController {

    async register(req, res) {
        try {
            const user = await userService.registerUser(req.body);
            const cleanUser = user.toJSON();
            delete cleanUser.password;
            res.status(201).json(cleanUser);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const users = await userService.getAllUsers();
        // Supprimer les mots de passe de tous les utilisateurs
        const cleanUsers = users.map(user => {
            const u = user.toJSON();
            delete u.password;
            return u;
        });
        res.json(cleanUsers);
    }

    async getOne(req, res) {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        const cleanUser = user.toJSON();
        delete cleanUser.password;
        res.json(cleanUser);
    }

    async update(req, res) {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) return res.status(404).json({ error: 'User not found' });
        const cleanUser = user.toJSON();
        delete cleanUser.password;
        res.json(cleanUser);
    }

    async delete(req, res) {
        const deleted = await userService.deleteUser(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted' });
    }


    async login(req, res) {
        const { email, password } = req.body;
        const user = await userService.getUserByEmail(email);
        if (!user) return res.status(401).json({ error: 'Utilisateur introuvable' });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ error: 'Mot de passe incorrect' });

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });

        const cleanUser = user.toJSON();
        delete cleanUser.password;

        res.json({ token, user: cleanUser });
    }

    async getProfile(req, res) {
        try {
            const userId = req.user.id;
            const user = await userService.getUserById(userId);
            if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' });
            const cleanUser = user.toJSON();
            delete cleanUser.password;
            res.json(cleanUser);
        } catch (err) {
            res.status(500).json({ error: 'Erreur serveur' });
        }
    }


}

module.exports = new UserController();
