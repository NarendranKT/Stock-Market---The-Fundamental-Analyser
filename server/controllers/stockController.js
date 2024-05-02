import yahooFinance from 'yahoo-finance2';
import { getCredentials, quote } from '../utils/yahooFin.js';

export const getSeries = async (req, res) => {
    try {
        const symbol = req.params.symbol
        const sevenDaysAgo = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
        const query = symbol;
        const queryOptions = {
            period1: sevenDaysAgo,
            interval: "15m",
            return: "object"
        };
        const chart = await yahooFinance.chart(query, queryOptions);
       
        res.json({
            chart
        })
    } catch (error) {
        res.json(error.message);
    }
}

export const assetProfile = async (req, res) => {
    try {
        const symbol = req.params.symbol;
        

        const queryOption = {
            modules: [
                "assetProfile"  
            ]
        }

        const stockSearch = await yahooFinance.quoteSummary(symbol, queryOption);
        
        res.json({
            data : stockSearch
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const earnings = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOption = {
            modules: [
                "earnings", "earningsHistory"
            ]
        }

        const result = await yahooFinance.quoteSummary(symbol, queryOption);
        res.json({
            status: "success",
            data : result
        })
    } catch (error) {
        res.json({
            status: "failed"
        })
    }
}

export const price = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOption = {
            modules: [
                "price"
            ]
        }

        const result = await yahooFinance.quoteSummary(symbol, queryOption);
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const financialData = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOption = {
            modules: [
                "financialData"
            ]
        }

        const result = await yahooFinance.quoteSummary(symbol, queryOption);
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const quoteType = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOption = {
            modules: [
                "quoteType"
            ]
        }

        const result = await yahooFinance.quoteSummary(symbol, queryOption);
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const recommendationTrend = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOption = {
            modules: [
                "recommendationTrend"
            ]
        }

        const result = await yahooFinance.quoteSummary(symbol, queryOption);
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const summary = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOption = {
            modules: [
                "summaryDetail",
                "summaryProfile",
            ]
        }

        const result = await yahooFinance.quoteSummary(symbol, queryOption);
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const recommendationBySymbol = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const result = await yahooFinance.recommendationsBySymbol(symbol);
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }  
}

export const earningsTrend = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOption = {
            modules: [

                "earningsTrend"
            ]
        }

        const result = await yahooFinance.quoteSummary(symbol, queryOption);
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}


export const insights = async (req, res) => {
    try {
        const symbol = req.params.symbol;

        const queryOptions = { lang: 'en-US', reportsCount: 200, region: 'IN' };
        const result = await yahooFinance.insights(symbol, queryOptions);

        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const search = async (req, res) => {
    try {

        const queryOptions = { lang: 'en-US', quotesCount: 20, newsCount: 50, region: 'IN' };
        const result = await yahooFinance.search(queryOptions);
        const posts = result.news;

        res.json({
            data : posts
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const statistics = async (req, res) => {
    try {
        const symbol = req.params.symbol;
        const result = await yahooFinance.quoteSummary(symbol, { modules: ["defaultKeyStatistics"] });
        res.json({
            status: 'success',
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}

export const historical = async (req, res) => {
    try {
        const symbol = req.params.symbol;
        const month = req.params.month;
        const period = new Date(Date.now() - month * 30 * 24 * 60 * 60 * 1000);
        const queryOptions = { period1:period, includeAdjustedClose: true};
        const result = await yahooFinance.historical(symbol, queryOptions);
        // console.log(result);
        res.json({
            status: 'success',
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed',
            data: error
        })
    }
}








export const quoties = async (req, res) => {
    try {
        const { cookie,crumb } = await getCredentials()
        
        const quotes = await quote('itc.ns', cookie, crumb)
        const response = JSON.parse(quotes);
        res.json({
            data: response
        })
    } catch (error) {
        console.log(error.message);
    }
}


export const balanceSheet = async (req, res) => {
try {
    
// "aggressive_small_caps"
// "conservative_foreign_funds"
// "day_gainers"
// "day_losers"
// "growth_technology_stocks"
// "high_yield_bond"
// "most_actives"
// "most_shorted_stocks"
// "portfolio_anchors"
// "small_cap_gainers"
// "solid_large_growth_funds"
// "solid_midcap_growth_funds"
// "top_mutual_funds"
// "undervalued_growth_stocks"
// "undervalued_large_caps"
    
    // const queryOptions = { scrIds: 'undervalued_growth_stocks', count: 10, region: 'IN', lang: 'en-US' };
    
    // const result = await yahooFinance.screener(queryOptions, { validateResult: false });


    const symbol = req.params.symbol;

        const queryOption = {
            modules: [

                "balanceSheetHistory", "balanceSheetHistoryQuarterly"
            ]
        }
    const result = await yahooFinance.quoteSummary(symbol, queryOption)
        res.json({
            data : result
        })
    } catch (error) {
        res.json({
            status: 'failed'
        })
    }
}
