//Entry point of database

import mysql from 'mysql2';

// Build connection of mysql db with backend
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Nitish45",
  database: "portfolio_db",
  waitForConnections: true,
});

// Find any error related to database
connection.connect(error => {
    if(error) {
        console.log("Error : ", error);
    }else {
        console.log("Db is running...")
    }
});


export default connection;