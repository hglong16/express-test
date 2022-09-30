import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

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
app.listen(process.env.PORT, () => { console.log(`Example app listening on port ${process.env.PORT}`); });
