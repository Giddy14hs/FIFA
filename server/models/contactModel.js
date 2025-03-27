// import mongoose from "mongoose";

// const contactSchema = mongoose.Schema({
//   email: {type: String, required: true},
//   message: {type: String, required: true}
// });

// export default mongoose.model("Contact", contactSchema);


import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

export default Contact;
