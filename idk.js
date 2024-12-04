const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const app = express();

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, app);

app.use(cors());

app.get('/estudiantes', (req, res) => {
    res.send('Hola estudiantes');
})

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});