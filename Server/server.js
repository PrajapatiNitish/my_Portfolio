import express from 'express'; //Data is comming in asynchronise. for synchronise data use require or commonJs.
import path from 'path';
import cors from 'cors';
import db from './dbConfig/db.js'; // import database connections.
import connection from './dbConfig/db.js';

// Build app
const app = express();


app.use(cors()); //Allow other link using cors policy. CORS - Cross origine requests.
app.use(express.json()); //In case if we need to send json data.
app.use(express.urlencoded({ extended: true })); //Express can understand json fromate data.

// Serve static file
// app.use(express.static(path.join(__dirname, "client/dist")));


// Server is ready. Entry Point
app.get('/', (req, res) => {
    res.send("Welcome in server!");
});

// App listening
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server is Listening...");
})


// Database work

// Show all tables in my database.

let userId = "admin_check";
let userName = "Nitish Prajapati";
let userEmail = "adminprajapati@gmail.com";
let userFeedback = "Hi, I am your admin Nitish, This message is sending for testing.";
let created_at = new Date();

let q = "INSERT INTO feedbackData (userId, name, email, feedback, created_at) VALUES (?, ?, ?, ?, ?)";

let userData = [userId, userName, userEmail, userFeedback, created_at]

let idCheckQ = '';

try {
    db.query(idCheckQ, (error, result) => {
        if(error) throw error;
        console.log(result)
    })
} catch(error) {
    console.log(error)
}

if (userId == id) {
    console.log("Duplicate id found!");
} else {
    try {
        db.query(q, userData, (error, result) => {
            if (error) throw error;
            console.log(result);
            console.log(result.length); // To check how many feedback have been added.
        });
    } catch (error) {
        console.log(error)
    }
}

connection.end();