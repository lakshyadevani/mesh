import express from 'express';

import { getArticles } from '../controller/article-controller.js';

const route = express.Router();


route.get('/articles',getArticles);
   

export default route;