const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config();
const cors = require('cors');
// const swaggerUI = require("swagger-ui-express");
// const docs = require('./documentation');
const app = express();

// set up port
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static(`${__dirname}/public`))
app.use(express.json({
    verify: (req, res, buf) => {
        const url = req.originalUrl;
        if (url.startsWith('/webhook')) {
            req.rawBody = buf.toString()
        }
    }
}));
app.use(cors());

// adding routes
const users = require('./routes/users.js');
const admins = require('./routes/admin.js');
app.use('/api', users);
app.use('/api/admin', admins);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));