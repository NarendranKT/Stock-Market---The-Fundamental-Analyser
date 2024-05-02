import express from 'express';
import { fetchNews, getTodayNews, updateNews, getNews } from '../controllers/newsController.js';

const router = express.Router();
router.get('/fetchnews', fetchNews);
router.get('/update', updateNews)
router.get('/news/today', getTodayNews);
router.get('/news', getNews)

export default router;