import express    from 'express'
import { Client } from '../models';

const clients = express();

clients.get('/', (req, res, next) => {
  Client.find().then(clients => {
    const items = clients.map( i => i.toJSON() );
    if (req.xhr) return res.status(200).json(items);
    res.locals.state.clients = { items };
    next();
  }).catch(err => {
    console.trace(err);
    res.status(422).json({ error: err.toString() })
  })
});

export default clients;
