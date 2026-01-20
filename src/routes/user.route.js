import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

const router = Router();

router.get('/me', userController.getCurrentUser);
router.patch('/me', userController.editCurrentUser)

router.post('/', userController.createUser)

export default router;