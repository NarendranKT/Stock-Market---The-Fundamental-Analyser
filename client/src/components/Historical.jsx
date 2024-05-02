import { useEffect, useState } from "react";
import { historicalApi } from "../apis/stockAPI";

const Historical = ({symbol, month}) => {

    const [historical, setHistorical] = useState({});

  useEffect(() => {
    historicalApi(symbol.id, month).then(
        (response)=>setHistorical(response))
  }, [symbol, month])
  

    if (Object.keys(historical).length === 0) {
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

    if (historical.status === 'failed') {
        return <div className="w-full text-center flex items-center justify-center ">
                <h2 className="text-[24px] ps-2 tracking-wide">No data found</h2>
        </div>
    }
    

  return (
      <>
        {
          <div className="w-full flex md:justify-center h-[500px] overflow-y-scroll max-md:overflow-x-scroll">
              <table className=" table mt-4 text-sm text-left rtl:text-right text-secondary border border-secondary w-full ">
                  <thead className="border-b border-secondary sticky md:top-0 z-40 top-[10px]">
                      <tr className="border border-secondary z-50">
                        <th className="py-2 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center ">Date</th>
                        <th className="text-center py-4 bg-primary">Open</th>
                        <th className="py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center ">High</th>
                        <th className="text-center py-4 bg-primary">Low</th>
                        <th className="py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center ">Close</th>
                        <th className="text-center py-4 bg-primary">Volume</th>
                      </tr>
                  </thead>
                  <tbody className="md:text-sm text-xs ">
                      {
                        historical.data.map((data, index) => (
                            <tr key={index} className="border-b border-secondary/60">
                                <td className="py-4 whitespace-nowrap bg-tertiary text-secondary text-md text-center ">{new Date(data.date).toDateString()}</td>
                                <td className="py-4 text-center">{data.open}</td>
                                <td className="py-4 whitespace-nowrap bg-tertiary text-secondary text-md text-center ">{data.high}</td>
                                <td className="py-4 text-center">{data.low}</td>
                                <td className="py-4 whitespace-nowrap bg-tertiary text-secondary text-md text-center ">{data.adjClose}</td>
                                <td className="py-4 text-center">{data.volume}</td>
                                
                            </tr>
                        ))
                      }
                  </tbody>
              </table>
            </div>
        }   
    </>
  )
};

export default Historical;
