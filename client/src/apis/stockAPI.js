import axios from 'axios';
import { STOCKAPI } from './apiUrlHandler';



export const liveChart = async (symbol) => {
    try {
        const response = await axios.get(`${STOCKAPI}/live/${symbol}`);
        return await response.data;
    } catch (error) {
        console.log(error.message);
    }
} 


export const assetProfile = async (symbol) => {
        try {
        const response = await axios.get(`${STOCKAPI}/assetProfile/${symbol}`);
        return await response.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const financialDataApi = async (symbol) => {
        try {
        const response = await axios.get(`${STOCKAPI}/financialData/${symbol}`);
        return await response.data;
    } catch (error) {
        console.log(error.message);
    }
}


export const earningsApi = async (symbol) => {
    try {
        const response = await axios.get(`${STOCKAPI}/earnings/${symbol}`);
        return await response.data
    } catch (error) {
        console.log(error.message);
    }
}

export const statisticsApi = async (symbol) => {
    try {
        const response = await axios.get(`${STOCKAPI}/statistics/${symbol}`);
        return await response.data
    } catch (error) {
        console.log(error.message);
    }
}


export const historicalApi = async (symbol, month) => {
    try {
        const response = await axios.get(`${STOCKAPI}/historical/${symbol}/${month}`);
        return await response.data
    } catch (error) {
        console.log(error.message);
    }
}

export const recommendedSymbol = async (symbol) => {
    try {
        const response = await axios.get(`${STOCKAPI}/recommendationBySymbol/${symbol}`);
        return await response.data
    } catch (error) {
        console.log(error.message);
    }
}