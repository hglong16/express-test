import 'dotenv/config';
import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import cors from 'cors';

const users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

const messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, Received a GET HTTP method');
});

app.post('/', (req, res) => {
  res.send('Hello, Received a POST HTTP method');
});

app.put('/', (req, res) => {
  res.send('Hello, Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  res.send('Hello, Received a DELETE HTTP method');
});

app.get('/users', (req, res) => {
  res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  res.send(users[req.params.userId]);
});

app.post('/users', (req, res) => {
  res.send('Hello, Received a POST HTTP method on user resoucres');
});

app.put('/users', (req, res) => {
  res.send(`Hello, Received a PUT HTTP method on user/${req.params.userId} resoucres`);
});

app.delete('/users', (req, res) => {
  res.send('Hello, Received a DELETE HTTP method on user resoucres');
});

// messages

app.get('/messages', (req, res) => res.send(Object.values(messages)));

app.get('/messages/:messageId', (req, res) => res.send(messages[req.params.messageId]));

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
  };

  messages[id] = message;

  return res.send(message);
});

app.listen(process.env.PORT, () => { console.log(`Example app listening on port ${process.env.PORT}`); });
