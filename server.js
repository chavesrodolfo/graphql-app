import express from 'express';
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from 'body-parser';
import schema from './schema.js';

const server = express();

server.use('/graphiql', graphiqlExpress({
    endpointURL: 'graphql'
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

server.get('/status', (req, res) => {
    res.send({ 'status': 'ok' });
});

server.listen(4000, () => {
    console.log('Listening http://localhost:4000');
});