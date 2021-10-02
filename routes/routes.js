import express from 'express';
import { getProducts,getProductById } from '../controllers/product-controller.js';
import { userSignup,userLogIn } from '../controllers/user-controller.js';


const router=express.Router();

router.post('/signup',userSignup)
router.post('/login',userLogIn)

router.get('/products',getProducts)
router.get('/product/:id',getProductById)

export default router;

