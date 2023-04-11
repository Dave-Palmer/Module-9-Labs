const axios = require('axios')


function getAllCharacters(req, res) {
    axios("https://api.disneyapi.dev/characters")
        .then(response => { res.send(response.data) })
}

function getOneCharacter(req, res) {
    axios("https://api.disneyapi.dev/characters/" + req.params.id)
        .then(response => { res.send(response.data) })
}

module.exports = { getAllCharacters, getOneCharacter }