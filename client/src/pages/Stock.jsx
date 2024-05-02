import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { useParams } from "react-router-dom";
import { symbol, tabLinks } from "../constants";
import TradingViewWidget from "../components/TradingViewWidget";
import AssetInfo from "../components/AssetInfo";
import FinancialData from "../components/FinancialData";
import { useState } from "react";
import Earnings from "../components/Earnings";
import Statistics from "../components/Statistics";
import Historical from "../components/Historical";
import RecommendedSymbols from "../components/RecommendedSymbols";


const Stock = () => {
    let { stock } = useParams();
    const [tab, setTab] = useState('about');
    const [quoteOpt, setQuoteOpt] = useState(1)

    const handleSelect = (selected) => {
        setTab(selected);
    }
    
    const handleMonth = (month) => {
        setQuoteOpt(month);
    }
    
    return (
    <div className="mt-16">
        <div> 
            <p className={`${styles.sectionSubText}`}>{symbol[stock].name}</p>
            <h1 className={`${styles.sectionHeadText}`}>{stock}</h1>
            <TradingViewWidget symbol={symbol[stock]} />
            <RecommendedSymbols symbol={symbol[stock]} />
        </div>
        
        <div className=" text-secondary mt-14 flex justify-center border border-secondary bg-tertiary font-medium hover:cursor-pointer top-28 sticky z-50">
            <ul className="flex items-center justify-between md:justify-around flex-wrap md:text-base text-xs">
                {
                    tabLinks.map((tablink) => (
                        <li className={` ${tab === tablink.id ? "bg-[#04030a] text-white font-bold md:px-20 py-3 px-2": "bg-tertiary hover:bg-[#04030a] hover:text-white hover:text-bold md:px-20 py-3 px-2"}`} key={tablink.id} onClick={()=>handleSelect(tablink.id)}><button>{tablink.name}</button></li>    
                    ))
                }                
            </ul> 
        </div>
        
        <div className="pt-5">
            {tab === 'about' && <AssetInfo symbol={symbol[stock]}/>}
            {tab === 'financials' && <FinancialData symbol={symbol[stock]}/>}
            {tab === 'earnings' && <Earnings symbol={symbol[stock]}/>}
            {tab === 'analysis' && <Statistics symbol={symbol[stock]}/>}
            {tab === 'history' &&
                <>  
                    <div className="my-4 ps-10 flex flex-wrap items-center">
                        
                        <div className="flex flex-wrap justify-around gap-x-5 items-center">
                            <button className={`${quoteOpt === 1 ? 'rounded-full bg-secondary font-medium text-primary border-2 border-secondary px-4 py-1 text-xs md:text-base' : 'rounded-full border-2 border-secondary text-secondary px-4 py-1 text-xs md:text-base'}`}
                            onClick={()=>handleMonth(1)}
                            >
                                1M
                            </button>
                            <button className={`${quoteOpt === 3 ? 'rounded-full bg-secondary font-medium text-primary border-2 border-secondary px-4 py-1 text-xs md:text-base' : 'rounded-full border-2 border-secondary text-secondary px-4 py-1 text-xs md:text-base'}`}
                            onClick={()=>handleMonth(3)}>
                                3M
                            </button>
                            <button className={`${quoteOpt === 6 ? 'rounded-full bg-secondary font-medium text-primary border-2 border-secondary px-4 py-1 text-xs md:text-base' : 'rounded-full border-2 border-secondary text-secondary px-4 py-1 text-xs md:text-base'}`}
                            onClick={()=>handleMonth(6)}>
                                6M
                            </button>
                            <button className={`${quoteOpt === 12 ? 'rounded-full bg-secondary font-medium text-primary border-2 border-secondary px-4 py-1 text-xs md:text-base' : 'rounded-full border-2 border-secondary text-secondary px-4 py-1 text-xs md:text-base'}`}
                            onClick={()=>handleMonth(12)}>
                                1Y
                            </button>
                            <button className={`${quoteOpt === 12*3 ? 'rounded-full bg-secondary font-medium text-primary border-2 border-secondary px-4 py-1 text-xs md:text-base' : 'rounded-full border-2 border-secondary text-secondary px-4 py-1 text-xs md:text-base'}`}
                            onClick={()=>handleMonth(12*3)}>
                                3Y
                            </button>
                        </div>                        
                    </div>
                    <Historical symbol={symbol[stock]} month={quoteOpt}/>
                </>
            }
        </div>
        

    </div>
  );
};

export default SectionWrapper(Stock, 'chart');
