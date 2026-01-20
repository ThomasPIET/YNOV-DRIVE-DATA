import {userRepository} from "../repositories/user.repository.js";

export const userController = {
    getCurrentUser: async (req, res) => {
        try {
            const user = await userRepository.getUserById(req.body.id);
            return res.json(user);
        } catch (error) {
            return res.status(404).json({ message: 'User not found' });
        }
    },

    createUser: async (req, res) => {
        const data = {
            id: req.body.id,
            email: req.body.email,
            name: req.body.name
        };

        try {
            const user = await userRepository.createUser(data);
            return res.json(user);
        } catch (error) {
            throw new Error('Erreur lors de la création du User' + error.message);
        }
    }

};