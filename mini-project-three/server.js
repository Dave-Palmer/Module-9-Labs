require("dotenv").config();

const express = require("express");
const app = express();
let dbconnect = require('./dbconnect')
let racingRoutes = require('./routes/racingRoutes')
let shooterRoutes = require('./routes/shooterRoutes')
let strategyRoutes = require('./routes/strategyRoutes')
let Controllers = require('./controllers')


// parse requests of content-type -application/json
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

app.use('/api/racing', racingRoutes)
app.use('/api/shooter', shooterRoutes)
app.use('/api/strategy', strategyRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    Controllers.racingController.initialiseCollection("https://www.freetogame.com/api/games?category=racing")
    Controllers.shooterController.initialiseCollection("https://www.freetogame.com/api/games?category=shooter")
    Controllers.strategyController.initialiseCollection("https://www.freetogame.com/api/games?category=strategy")
});