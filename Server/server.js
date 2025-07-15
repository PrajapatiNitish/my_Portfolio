import express from 'express'; //Data is comming in asynchronise. for synchronise data use require or commonJs.
import path from 'path';
const app = express();


app.use(express.json()); //In case if we need to send json data.
app.use(express.urlencoded({ extended: true })); //Express can understand json fromate data.

// Serve static file
app.use(express.static(path.join(__dirname, "client/build")));

app.get('/jokes', (req, res) => {
    // const jokes = [
    //     {
    //         id: 1,
    //         title: "A joke",
    //         content: "This is the first jokes",
    //     },

    //     {
    //         id: 2,
    //         title: "A new joke",
    //         content: "This is second jokes",
    //     },

    //     {
    //         id: 1,
    //         title: "Another new joke",
    //         content: "This is the last jokes",
    //     },
    // ];

    res.send("Hello from backend!");
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