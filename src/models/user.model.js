import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const UserModel = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: 'users',
        timestamps: true,
        underscored: true,
    }
);
