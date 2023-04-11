let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    res.send('Welcome, random or quote of today?')
    // Controllers.userController.getapi(req, res);
})
router.get('/today', (req, res) => {
    Controllers.apiController.getapi(req, res);
})


module.exports = router;