import {UserModel} from "../models/user.model.js";

export const userRepository = {
     getUserById: async (id) => {
        return UserModel.findByPk(id);
     },

     createUser: async (user) => {
        return UserModel.create(user);
     }

};