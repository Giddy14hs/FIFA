import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Form = sequelize.define('Form', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    radioInput: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loanCategory: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true
});

export default Form;