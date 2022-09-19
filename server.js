const express = require('express');
require("dotenv").config();

const PORT = process.env.NODE_DOCKER_PORT || 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello World a")
});

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}.`);
});