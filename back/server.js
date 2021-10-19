const express = require("express");
const cors = require('cors');
const middleware = require('./middleware/Middleware')

const app = express();
const port = 4885;
const ip = '127.0.0.1';

app.use(cors());

app.use(middleware.decodeToken);

app.listen(port, ip, () => {
    console.log("Server running on port" + port);
})