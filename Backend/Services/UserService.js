// services/UserService.js
const userRepository = require('../Repositories/UserRepository');

class UserService {
    async registerUser(data) {
        const existing = await userRepository.findByEmail(data.email);
        if (existing) throw new Error('Email déjà utilisé');
        return await userRepository.createUser(data);
    }

    async getUserById(id) {
        return await userRepository.findById(id);
    }

    async getAllUsers() {
        return await userRepository.getAllUsers();
    }

    async updateUser(id, data) {
        return await userRepository.updateUser(id, data);
    }

    async deleteUser(id) {
        return await userRepository.deleteUser(id);
    }
}

module.exports = new UserService();
