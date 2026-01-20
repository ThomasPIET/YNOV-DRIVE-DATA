import { userService } from "../services/user.service.js";

export const userController = {
    getCurrentUser: async (req, res) => {
        const id = req.params?.id ?? req.body?.id;
        if (!id) {
            return res.status(400).json({ status: 400, message: "Missing id" });
        }

        try {
            const user = await userService.getCurrentUser(id);
            if (!user) {
                return res.status(404).json({ status: 404, message: "User not found" });
            }
            return res.status(200).json({ status: 200, data: user });
        } catch (error) {
            return res.status(500).json({ status: 500, message: error.message });
        }
    },

    createUser: async (req, res) => {
        const data = {
            id: req.body.id,
            email: req.body.email,
            name: req.body.name
        };

        if (!data.id || !data.email || !data.name) {
            return res.status(400).json({ status: 400, message: "Missing data" });
        }

        try {
            const user = await userService.createUser(data);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({status: 500, message: error.message});
        }
    }
};