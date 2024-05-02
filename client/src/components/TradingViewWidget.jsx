import { useEffect, useRef, useState } from "react";
import { liveChart } from "../apis/newsApi";
import { formatStockData } from "../utils/formatStockData";
import ReactApexChart from "react-apexcharts"
import { candleStickOption } from "../constants";



const TradingViewWidget = ({symbol}) => {

  const [stockData, setStockData] = useState([]);
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

  useEffect( () => {
    setLoading(true)
    liveChart(symbol.id).then(response => {
      setStockData(formatStockData({
        timestamp: response.chart.timestamp,
        open: response.chart.indicators.quote[0].open,
        close: response.chart.indicators.quote[0].close,
        high: response.chart.indicators.quote[0].high,
        low: response.chart.indicators.quote[0].low,
        volume: response.chart.indicators.quote[0].volume
      }))
    })
    setLoading(false);

    return () => clearInterval(fetchDataIntervalId.current);
  }, [fetchDataTrigger])

  setFetchDataInterval(60000 * 15);

  
    if (loading) {
      return (
        <>
                        <div className="w-full text-center flex items-center justify-center ">
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
    <div className="mt-0">
      {!loading && <>
          <ReactApexChart 
        series={
          [
            {
              data: stockData
            }
          ]
        }
          options={candleStickOption}
          id= "chart1"
          type="candlestick"
          height="450px"
          />
      </>
      }
    </div>
  );
};

export default TradingViewWidget;
