import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../style";
import { Link} from 'react-router-dom'

const StockPrice = () => {
    
    const [stockPrice, setStockPrice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetchDataTrigger, setFetchDataTrigger] = useState(0);
    const fetchDataIntervalId = useRef();

    const setFetchDataInterval = (interval) => {
        // Clear old interval
        if (fetchDataIntervalId.current) {
        clearInterval(fetchDataIntervalId.current);
        fetchDataIntervalId.current = undefined;
        }

        // Set new interval
        if (interval > 0) {
        fetchDataIntervalId.current = setInterval(() => {
            setFetchDataTrigger(Date.now());
        }, interval);
        }
    };
    
    useEffect(() => {
    
        const fetchStockPrice = () => {
            setLoading(true);
         const config = {
                params: {
                    Indices: 'NIFTY 50'
                },
            headers: {
                'X-RapidAPI-Key': 'ccffd41fa7msh04d05e9aa248f0bp19e9d9jsna1d3007a8fea',
                'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
            }
        };

        axios.get('https://latest-stock-price.p.rapidapi.com/price', config)
            .then((response) => {
                setStockPrice(response.data);
                setLoading(false);
            })
            .catch((err) => console.log(err));           
        }
        fetchStockPrice();

        return () => clearInterval(fetchDataIntervalId.current);
    },
[fetchDataTrigger]);

    setFetchDataInterval(60000);

    if (stockPrice.length === 0) {
        return (
            
        <>
                    <div className="mt-14"> 
                <p className={`${styles.sectionSubText}`}>Explore all the stocks of Nifty 50</p>
                <h1 className={`${styles.sectionHeadText}`}>NIFTY 50</h1>
            </div>
                        <div className="w-full text-center flex items-center justify-center">
                            <div
                            className="inline-block h-9 w-9 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite] text-center"
                            role="status">
                            </div>
                            <h2 className="text-[24px] ps-2 tracking-wide">Loading...</h2>
                        </div>
                    </>       
        )
    }

    
    return (
        <div className="md:w-full h-full overflow-x-scroll mt-14">
            <div> 
                <p className={`${styles.sectionSubText}`}>Explore all the stocks of Nifty 50</p>
                <h1 className={`${styles.sectionHeadText}`}>All companies</h1>
            </div>
            <table className="mt-4 w-full text-sm text-left rtl:text-right text-secondary border border-secondary">
                <thead className="md:text-base text-xs uppercase text-secondary border border-secondary ">
                    <tr className="text-xs">
                    <th scope="col" className="px-6 py-3 bg-tertiary ">
                        Symbol
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Change
                    </th>
                    <th scope="col" className="px-6 py-3 bg-tertiary">
                        Last Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Open
                    </th>
                    <th scope="col" className="px-6 py-3 bg-tertiary">
                        Volume
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Day High
                    </th>
                    <th scope="col" className="px-6 py-3 bg-tertiary">
                        Day Low
                    </th>
                    <th scope="col" className="px-6 py-3">
                        1 Year High
                    </th>
                    <th scope="col" className="px-6 py-3 bg-tertiary">
                        1 Year Low
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                stockPrice.map((stock) => (
                    <tr key={stock.identifier} className="border-b border-secondary/60">
                        <th scope="row" className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary md:text-base text-xs"><Link className=" underline font-bold" to={`/chart/${stock.symbol}`}>{stock.symbol}</Link></th>
                        <td className="px-6 py-4">{stock.pChange}%</td>
                        <td className="px-6 py-3 bg-tertiary">{stock.lastPrice}</td>
                        <td className="px-6 py-4">{stock.open}</td>
                        <td className="px-6 py-3 bg-tertiary">{(stock.totalTradedVolume/1000000).toFixed(2)}M</td>
                        <td className="px-6 py-4">{stock.dayHigh}</td>
                        <td className="px-6 py-3 bg-tertiary">{stock.dayLow}</td>
                        <td className="px-6 py-4">{stock.yearHigh}</td>
                        <td className="px-6 py-3 bg-tertiary">{stock.yearLow}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default StockPrice;
