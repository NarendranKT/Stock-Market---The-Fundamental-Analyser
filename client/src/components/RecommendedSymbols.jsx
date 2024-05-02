import { useEffect, useState } from "react";
import { styles } from "../style";
import { recommendedSymbol } from "../apis/stockAPI";

const RecommendedSymbols = ({ symbol }) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        recommendedSymbol(symbol.id).then(
            (response) => {
                setStocks(response?.data?.recommendedSymbols)
            }
        )
    }, [symbol])

  return (
    <div className="mt-10">
        <h1 className={`${styles.sectionHeadText}`}>
            Recommeded Symbols
        </h1>
        <p className={`${styles.sectionSubText}`}>
            These stocks were Recommeded if you like {symbol.name}
        </p>
        
        <ul className="flex flex-wrap flex-col md:flex-row ps-10 justify-evenly mt-5">
            {stocks.map((stock)=>(
                <li className="text-lg list-disc py-1" key={stock.symbol}>
                    {stock.symbol}
                </li>
            ))}
        </ul>
    </div>
  )
};

export default RecommendedSymbols;
