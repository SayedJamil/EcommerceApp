const fetch = require('node-fetch');
const response = await fetch("https://amazon24.p.rapidapi.com/api/category?country=US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "amazon24.p.rapidapi.com",
        "x-rapidapi-key": "52e79b23a4msh852ca5a19699b27p157ccejsnca2281634a80"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
const products = await response.data();

console.log(products);

module.exports = products;