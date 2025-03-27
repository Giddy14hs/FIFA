import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log('Attempting to connect to MySQL with these settings:', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    // Don't log the password
});

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: console.log,
        pool: {
            max: 5,
            min: 0,
            acquire: 60000,
            idle: 10000
        },
        dialectOptions: {
            connectTimeout: 120000
        },
        retry: {
            max: 3,
            match: [
                /SequelizeConnectionError/,
                /SequelizeConnectionRefusedError/,
                /SequelizeHostNotFoundError/,
                /SequelizeHostNotReachableError/,
                /SequelizeInvalidConnectionError/,
                /SequelizeConnectionTimedOutError/,
                /TimeoutError/,
                /ECONNABORTED/
            ]
        }
    }
);

// Test the connection with more detailed error logging
sequelize.authenticate()
    .then(() => {
        console.log('✅ Connected to MySQL successfully');
        console.log(`Connected to database: ${process.env.DB_NAME} on host: ${process.env.DB_HOST}`);
    })
    .catch(err => {
        console.error('❌ MySQL connection error:', err);
        console.error('Connection details:', {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USER
        });
        // Log the full error stack
        console.error('Full error:', err.stack);
    });

export default sequelize;
