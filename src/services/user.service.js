import {userRepository} from "../repositories/user.repository.js";

export const userService = {
    getCurrentUser: async (id) => {
        if (!id) throw new Error("Missing id");
        try {
            return await userRepository.getUserById(id);
        } catch (error) {
            throw new Error("Failed to retrieve user: " + error.message);
        }
    },

    editCurrentUser: async (id, data) => {
        if (!data || !id) throw new Error("Missing user data or id");

        try {
            return await userRepository.editUser(id, data);
        } catch (error) {
            throw new Error("Failed to edit user: " + error.message);
        }

    },

    createUser: async (data) => {
        if (!data) throw new Error("Missing user");

        try {
            return await userRepository.createUser(data);
        } catch (error) {
            throw new Error("Failed to create user: " + error.message);
        }
    }
}