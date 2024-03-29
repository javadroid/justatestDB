const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const allowedOrigins = [
    'http://localhost:3000',
    'jamfortetech.com',
    'apis.jamfortetech.com' // Add more origins as needed
  ];
const corOptions = {
    origin: allowedOrigins
};
const app = express();
global.__basedir = __dirname

// set up port
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
    // limit: '100mb',
    extended: true,
}));
// app.use(bodyParser({ limit: '50mb' }));
app.use(express.static(`public`))
app.use(express.json({
    verify: (req, res, buf) => {
        const url = req.originalUrl;
        if (url.startsWith('/webhook')) {
            req.rawBody = buf.toString()
        }
    }
}));
app.use(cors(corOptions));

// adding routes
const users = require('./routes/users.js');
const admins = require('./routes/admin.js');
const devApis = require('./routes/dev-api.js');
app.use('/api', users);
app.use('/api/admin', admins);
app.use('/control', devApis);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)).setTimeout(9000000);
// var server = app.listen();
// server.setTimeout(90000000);