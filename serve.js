require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_HOST || 'localhost';
app.listen(PORT, HOST, () => {
	console.log(`Listening at ${HOST}:${PORT}...`);
});