import 'dotenv/config';
import bodyparser from 'body-parser';
import express from 'express';
import cors from 'cors';
import products from './routes/products';
import connectDB from '@/database/database';

const app = express();

connectDB();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 5000);

app.get('/', (_req, res) => {
  res.send('API Running');
});

app.use('/api/products', products);

const port = app.get('port');
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`),
);

export default server;
