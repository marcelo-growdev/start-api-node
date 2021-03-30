import { Router } from 'express';
import cors from 'cors';

const routes = Router();
routes.use(cors());

routes.get('/users', (req, res) => res.json('users'));

export default routes;
