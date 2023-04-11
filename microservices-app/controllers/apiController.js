const api_url = "https://zenquotes.io/api/today";
const axios = require('axios')
// const response = await fetch('https://zenquotes.io/api/today');

function getapi(req, res) {
    axios("https://zenquotes.io/api/random")
        .then(response => res.send(response.data[0].q))
    // let data = response.json()
    // res.send(data)
    // .then(data => res.send(data.body))
    // let data = await response.json();
    // console.log(data);
}

// getapi(api_url);

module.exports = { getapi }


// const getComments = (res) => {
//     Models.Comment.findAll({}).then(function (data) {
//         res.send({ result: 200, data: data })
//     }).catch(err => {
//         throw err
//     })
// }