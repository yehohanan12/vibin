// repositories/UserRepository.js
const User = require('../Entities/User');

class UserRepository {
    async createUser({ username, email, password, address }) {
        return await User.create({ username, email, password, address });
    }

    async findById(id) {
        return await User.findByPk(id);
    }

    async findByEmail(email) {
        return await User.findOne({ where: { email } });
    }

    async getAllUsers() {
        return await User.findAll();
    }

    async updateUser(id, data) {
        const user = await this.findById(id);
        if (!user) return null;
        return await user.update(data);
    }

    async deleteUser(id) {
        const user = await this.findById(id);
        if (!user) return null;
        await user.destroy();
        return true;
    }
}

module.exports = new UserRepository();
