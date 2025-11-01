// Entery point of backend.
import express from "express"; //Data is comming in asynchronise. for synchronise data use require or commonJs.
import dotenv from "dotenv";
import cors from "cors"; //Resolve the cors policy error
import path from "path";
import { fileURLToPath } from "url";


//To use process.env file
dotenv.config();

// Build app
const app = express();

// Fix for __dirname and __filename in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server is ready. Entry Point
const port = process.env.PORT;

app.use(cors()); //Allow other link using cors policy. CORS - Cross origine requests.
app.use(express.json()); //In case if we need to send json data.
app.use(express.urlencoded({ extended: true })); //Express can understand json fromate data.

// get feedback of user from client
import feedbackRoute from "./routes/feedbackRoute.js";
app.use("/home-page", feedbackRoute);


// Serve React build file
app.use(express.static(path.join(__dirname, "../Client/dist")));

app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/dist", "index.html"));
});


// App listening
app.listen(port, () => {
  console.log("Server is running sir...", port);
});