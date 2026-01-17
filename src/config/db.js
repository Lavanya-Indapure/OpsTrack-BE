// const { Pool } = require('pg');
// require('dotenv').config();


// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// })


// pool.on('connect', ()=>{
//     console.log('Connected to PostgreSQL : Database -> ',process.env.DB_NAME)
// })


// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('DB connection error:', err);
//   } else {
//     console.log('DB time:', res.rows[0]);
//   }
// });


const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // optional
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL : Database -> ', process.env.DB_NAME))
  .catch((err) => console.error('DB connection error:', err));

module.exports = sequelize; // <-- important

