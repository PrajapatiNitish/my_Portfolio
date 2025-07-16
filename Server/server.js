import express from 'express'; //Data is comming in asynchronise. for synchronise data use require or commonJs.
import path from 'path';
import cors from 'cors';


const app = express();


app.use(cors()); //Allow other link using cors policy. CORS - Cross origine requests.
app.use(express.json()); //In case if we need to send json data.
app.use(express.urlencoded({ extended: true })); //Express can understand json fromate data.

// Serve static file
// app.use(express.static(path.join(__dirname, "client/dist")));

app.get('/api/jokes', (req, res) => {
    res.send("Hello from Backend!");
})


// Server is ready. Entry Point
app.get('/', (req, res) => {
    res.send("Welcome in server!");
});

// App listening
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server is Listening...");
})