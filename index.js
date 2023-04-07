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

// add routes
const router = require('./routes/router.js');
app.use('/api', router);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));