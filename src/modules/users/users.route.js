import express from 'express';

import usersController from './users.controller.js';

const router = express.Router();

router.post('/create', usersController.createUser);

export const UserRoutes = router;
