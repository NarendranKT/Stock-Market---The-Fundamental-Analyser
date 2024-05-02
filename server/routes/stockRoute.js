import express from 'express';
import { getSeries, assetProfile, financialData, earnings, price, quoteType, recommendationTrend, summary, recommendationBySymbol, earningsTrend, balanceSheet, insights, search, statistics, quoties, historical  } from '../controllers/stockController.js';

const router = express.Router();

router.get('/live/:symbol', getSeries)
router.get('/assetProfile/:symbol', assetProfile);
router.get('/financialData/:symbol', financialData);
router.get('/earnings/:symbol', earnings);
router.get('/price/:symbol', price);
router.get('/quoteType/:symbol', quoteType);
router.get('/recommendationTrend/:symbol', recommendationTrend);
router.get('/summary/:symbol', summary);
router.get('/recommendationBySymbol/:symbol', recommendationBySymbol);
router.get('/earningTrend/:symbol', earningsTrend);
router.get('/balanceSheet/:symbol', balanceSheet);
router.get('/insights/:symbol', insights);
router.get('/news', search);
router.get('/statistics/:symbol', statistics);
router.get('/historical/:symbol/:month', historical);


export default router;



router.get('/quoties', quoties);