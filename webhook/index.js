const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/router');

const app = express();
const BASE_URL = '/api';
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(BASE_URL, api);

app.use((req, res) => {
    res.status(404).json({
        error: `URL ${req.path} not found`
    });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));