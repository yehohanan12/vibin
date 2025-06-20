// controllers/UserController.js
const userService = require('../Services/UserService');

class UserController {


    async register(req, res) {
        try {
            const user = await userService.registerUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        const users = await userService.getAllUsers();
        res.json(users);
    }

    async getOne(req, res) {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }

    async update(req, res) {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    }

    async delete(req, res) {
        const deleted = await userService.deleteUser(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted' });
    }
}

module.exports = new UserController();
