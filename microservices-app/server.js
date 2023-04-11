const express = require("express");
const app = express();

let quoteRoutes = require('./routes/apiRoutes')
let disneyRoutes = require('./routes/disneyRoutes')


// parse requests of content-type -application/json
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my microservice application." });
});

app.use('/quote', quoteRoutes)
app.use('/disney', disneyRoutes)
// app.use('/api/posts', postRoutes)
// app.use('/api/comments', commentRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});