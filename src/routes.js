import { Router } from 'express';

import UserController from './app/controllers/UserCotroller';

const routes = new Router();

routes.get('/', async (req, res) => {
  return res.json({ message: 'Hello world' });
});

routes.post('/users', UserController.store);

export default routes;
