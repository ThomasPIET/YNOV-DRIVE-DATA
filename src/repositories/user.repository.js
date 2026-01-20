import {UserModel} from "../models/user.model.js";

export const userRepository = {
     getUserById: async (id) => {
        return UserModel.findByPk(id);
     },

    editUser: async (id, data) => {
       const user = await UserModel.findByPk(id);
       if (!user) {
           return null;
       }

       return user.update(data);
    },

     createUser: async (user) => {
        return UserModel.create(user);
     }

};