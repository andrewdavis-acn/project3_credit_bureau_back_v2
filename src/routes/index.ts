import express from 'express'
import home from './home'
import userProfile from './userProfile';
import userCredit from './userCredit';

const router = express.Router();

router.use('/', home)
router.use('/user/profile',userProfile)
router.use('/user/credit',userCredit)

export default router;