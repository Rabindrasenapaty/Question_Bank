import express from 'express'
import { CreatePost, DeletePost, GetAllPost, GetSinglePost, UpdatePost } from '../controllers/post.controller.js';

const  router=express.Router();

router.post("/createPost",CreatePost)
router.get('/getallpost',GetAllPost)
router.get('/GetSinglePost',GetSinglePost)
router.delete('/DeletePost',DeletePost)
router.put('/UpdatePost',UpdatePost)

export default router