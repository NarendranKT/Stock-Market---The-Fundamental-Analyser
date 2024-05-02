import axios from 'axios';
import { NEWSAPI, STOCKAPI } from './apiUrlHandler';
import { symbol } from '../constants';

export const newsAPI =  () => {
    const response =  axios.get(`${NEWSAPI}/news/today`)
        .then((res) => {return res?.data?.data})
        .catch((err)=>console.log(err));

    return response;
}

export const liveChart = async (symbol) => {
    try {
        const response = await axios.get(`${STOCKAPI}/live/${symbol}`);
        return await response.data;
    } catch (error) {
        console.log(error.message);
    }
} 

