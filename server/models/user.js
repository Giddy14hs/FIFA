// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   googleId: { type: String, unique: true }, // Google ID for the user
//   email: { type: String, required: true },
//   username: { type: String, required: true },
//   password: { type: String }, // Keep this optional for users who sign up via Google
// });

// const User = mongoose.model('User', userSchema);
// export default User;


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true // Changed to true since Google users won't have a password
    },
    googleId: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                user.password = await bcrypt.hash(user.password, 12);
            }
        }
    }
});

// Instance method to compare password
User.prototype.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

export default User;

