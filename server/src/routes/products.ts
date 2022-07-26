import { Router, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import Request from '../types/Request';
const fs = require('fs-extra');

const productsJson = '../products.json';
const router: Router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const products = await fs.readJson(productsJson);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

export default router;
