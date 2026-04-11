import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkServiceToken } from '../middleware/serviceToken.middleware.js';

const router = Router();

router.get('/me', checkServiceToken, userController.getCurrentUser);
router.patch('/me', checkServiceToken, userController.editCurrentUser)

router.post('/', checkServiceToken, userController.createUser)

export default router;