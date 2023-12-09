import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();
router.post('/', homeController.store);
router.get('/', homeController.index);
export default router;
