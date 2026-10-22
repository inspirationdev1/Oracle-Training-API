import express from 'express';
import { signup, signin, google, signOut,sendemail } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get('/signout', signOut);
router.post("/sendemail", sendemail);
export default router;
