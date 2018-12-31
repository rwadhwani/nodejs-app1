const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("<h1>Server is running on port " + port + "</h1>Hello world!"));

app.listen(port, () => console.log(`app listening on port ${port}`));