// Entery point of backend.

import express from "express"; //Data is comming in asynchronise. for synchronise data use require or commonJs.
import path from "path";
import cors from "cors"; //Resolve the cors policy error
import connection from "./dbConfig/db.js"; //import database connection

// Build app
const app = express();

app.use(cors()); //Allow other link using cors policy. CORS - Cross origine requests.

app.use(express.json()); //In case if we need to send json data.
app.use(express.urlencoded({ extended: true })); //Express can understand json fromate data.

// Serve static file
// app.use(express.static(path.join(__dirname, "client/dist/index.html")));

// Server is ready. Entry Point
// App listening
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running sir...", port);
});

// Send data on port 8081
app.get("/", (req, res) => {
  res.send("Welcome in Server sir!");
});

app.post("/home-page/formdata", (req, res) => {
  const { username, useremail, userfeedback } = req.body;

  //Create userId
  const userId = () => {
    const name = username.slice(0, 3).toLowerCase();
    const date = new Date(); //Get current date
    const year = date.getFullYear(); //Get current year example 2025
    const dayOfMonth = date.getDate(); //Day of month 1-30 or 31
    const dayOfWeek = date.getDay(); //Day of week 1-7
    const monthofYear = date.getMonth() + 1; //To get month 1-12


    return `${name[0]}${dayOfMonth}${dayOfWeek}${name[1]}${monthofYear}${name[2]}${year}`;
  };
  
  const sql = `INSERT INTO feedbackData (userId, name, email, feedback) VALUES (?, ?, ?, ?)`;
  const values = [userId(), username, useremail, userfeedback];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Server Error");
    }
  });

  return res
    .status(200)
    .send("Thanks for feedback, I will definitely work on it.");
});


process.on("SIGINT", () => { // Graceful shutdown
  connection.end((err) => {
    if (err) {
      console.log("Error during disconnection:", err.stack);
    }
  });
  process.exit();
});