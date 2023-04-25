const express = require('express');
require('dotenv').config();
const cors = require('cors');
// const swaggerUI = require("swagger-ui-express");
// const docs = require('./documentation');
const app = express();

// set up port
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// adding routes
const users = require('./routes/users.js');
const admins = require('./routes/admin.js');
app.use('/api', users);
app.use('/api/admin', admins);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
let i = 0;
// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));