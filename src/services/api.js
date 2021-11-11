const axios = require("axios").default;

// TODO: Passar baseURL para variável de ambiente
const baseURL = "https://api-mobilespecs.azharimm.site/v2"

const api = axios.create({
    baseURL: baseURL,
    timeout:10000
})



module.exports = api