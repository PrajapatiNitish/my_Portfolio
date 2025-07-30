import mysql from 'mysql2';

//This is created to perform any database operation in node js.

// Build connections with mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Nitish45',
    database: 'portfolio_db'
});

// Find any error related database
connection.connect(error => {
    if(error) {
        console.log("Error", error);
    }else {
        console.log("Db is running...")
    }
});


export default connection;