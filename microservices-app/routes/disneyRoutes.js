let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    res.send('Welcome, random or quote of today?')
    // Controllers.userController.getapi(req, res);
})
router.get('/characters', (req, res) => {
    Controllers.disneyController.getAllCharacters(req, res);
})
router.get('/character/:id', (req, res) => {
    Controllers.disneyController.getOneCharacter(req, res);
})


module.exports = router;