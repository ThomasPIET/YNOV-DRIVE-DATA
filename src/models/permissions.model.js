import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const PermissionsModel = sequelize.define(
    'permission',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },

        file_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: { model: 'files', key: 'id' },
        },

        actor_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: { model: 'users', key: 'id' },
        },

        role: {
            type: DataTypes.ENUM('owner', 'reader'),
            allowNull: false,
        },

        granted_by: {
            type: DataTypes.UUID,
            allowNull: true,
            references: { model: 'users', key: 'id' },
        },

        expires_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        tableName: 'permissions',
        timestamps: true,
        underscored: true,
        indexes: [{ unique: true, fields: ['file_id', 'actor_id'] }],
    }
);
