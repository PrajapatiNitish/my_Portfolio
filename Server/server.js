// Entery point of backend.
import express from "express"; //Data is comming in asynchronise. for synchronise data use require or commonJs.
import dotenv from "dotenv";
import cors from "cors"; //Resolve the cors policy error

//To use process.env file
dotenv.config();

// Build app
const app = express();

// Server is ready. Entry Point
const port = process.env.PORT; //This port will be client_url or public url or domain that we are going to buy.

const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((origin) => origin.trim())
  : [];


  console.log(allowedOrigins)

app.use(
  cors({
    origin: [(origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); //Allow frontend server through cros origin policy
      } else {
        callback(new Error("CORS not allowed"));
      }
    }], //need to add domain url
    methods: ["POST"],
    credentials: true,
  })
); //Allow other link using cors policy. CORS - Cross origine requests.

app.use(express.json()); //In case if we need to send json data.
app.use(express.urlencoded({ extended: true })); //Express can understand json fromate data.

// get feedback of user from client
import feedbackRoute from "./routes/feedbackRoute.js";
app.use("/home-page", feedbackRoute);

// App listening
app.listen(port, () => {
  console.log("Server is running sir...", port);
});
