import express from 'express';
const server = express();

server.get('/status', (req, res) => {
    res.send({ 'status': 'ok' });
});

server.listen(4000, () => {
    console.log('Listening http://localhost:4000');
});