// Entery point of backend.
import express from "express"; //Data is comming in asynchronise. for synchronise data use require or commonJs.
import dotenv from "dotenv";
import path from "path";
import cors from "cors"; //Resolve the cors policy error

import showFeedbackRoute from "./routes/showFeedbackRoute.js";
import feedbackRoute from "./routes/feedbackRoute.js";

//To use process .env file
dotenv.config();

// Build app
const app = express();

app.use(cors()); //Allow other link using cors policy. CORS - Cross origine requests.

app.use(express.json()); //In case if we need to send json data.
app.use(express.urlencoded({ extended: true })); //Express can understand json fromate data.



// Server is ready. Entry Point
const port = process.env.PORT || 8080;

// Send data on port 8081
app.get("/", async(req, res) => {
  return res.send("Server is running...");
});

// Send Database all feedback to server
app.use("/", showFeedbackRoute);

// get feedback of user from client
app.use("/home-page", feedbackRoute);



// App listening
app.listen(port, () => {
  console.log("Server is running sir...", port);
});