//Entry point of database
import fs from "fs"
import dotenv from "dotenv";
import mysql from 'mysql2';

dotenv.config();

// Build connection of mysql db with backend
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    ca: fs.readFileSync(process.env.DB_SSL_CA),
    rejectUnauthorized: true, //enable ssl
  },

  waitForConnections: true,
});

// Find any error related to database
connection.connect(error => {
    if(error) {
        console.log("db Error : ", error);
    }else {
        console.log("Db is running...")
    }
});


export default connection;
