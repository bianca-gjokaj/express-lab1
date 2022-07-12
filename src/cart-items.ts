import express from 'express';

export const cartItemsRouter = express.Router();

cartItemsRouter.get('/', (req, res) => {
  res.json()
})