import React, { useEffect, useState } from "react";
import { earningsApi } from "../apis/stockAPI";

const Earnings = ({symbol}) => {
    const [earningData, setEarningData] = useState  ({});
    
    useEffect(() => {
        earningsApi(symbol.id)
            .then((response) => {
                setEarningData(response)
                
            })
    }, []);

    

    if (Object.keys(earningData).length === 0) {
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

    if (earningData.status === 'failed') {
        return <div className="w-full text-center flex items-center justify-center ">
                <h2 className="text-[24px] ps-2 tracking-wide">No data found</h2>
        </div>
    }

  return (
    <>
      <div className=" flex flex-col w-full md:justify-center md:items-center">
        <div className="flex flex-wrap gap-x-32">
          {/* Earnings quarterly */}
          <div className="max-md:overflow-x-scroll">
          <h1 className="text-xl font-bold text-secondary ">Earnings Yearly</h1>
          <table className="mt-4 w-1/2 text-sm text-left rtl:text-right text-secondary border border-secondary ">
                  <thead className="border-b border-secondary/60">
                      <tr >
                        <th className="px-7 py-2 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">Year</th>
                        <th className="px-6 py-4">Revenue</th>
                        <th className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">Earnings</th>
                      </tr>
                  </thead>
                  <tbody className="md:text-sm text-xs">
                      {
                        earningData?.data?.earnings?.financialsChart?.yearly?.map((data, index) => (
                            <tr key={index} className="border-b border-secondary/60">
                                <td className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">{data.date}</td>
                                <td className="px-6 py-4 text-center">{(data.revenue/1000000000).toFixed(2)}B</td>
                                <td className="px-7 py-4 whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">{(data.earnings/1000000000).toFixed(2)}B</td>
                            </tr>
                        ))
                      }
                  </tbody>
          </table>
          </div>
          {/* Earnings Yearly */}
          <div className="max-md:overflow-x-scroll md:mt-0 mt-5">
            <h1 className="text-xl font-bold text-secondary ">Earnings Quarterly</h1>
            <table className="mt-4 w-1/2 text-sm text-left rtl:text-right text-secondary border border-secondary">
                    <thead className="border-b border-secondary/60">
                        <tr >
                          <th className="px-7 py-2 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">Quarter</th>
                          <th className="px-6 py-4">Revenue</th>
                          <th className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">Earnings</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {
                          earningData?.data?.earnings?.financialsChart?.quarterly?.map((data, index) => (
                              <tr key={index} className="border-b border-secondary/60">
                                  <td className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">{data.date}</td>
                                  <td className="px-6 py-4 text-center">{(data.revenue/1000000000).toFixed(2)}B</td>
                                  <td className="px-7 py-4 whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">{(data.earnings/1000000000).toFixed(2)}B</td>
                              </tr>
                          ))
                        }
                    </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 max-md:overflow-x-scroll ">
          <div className="">
            <h1 className="text-xl font-bold text-secondary ">Earnings History</h1>
            <table className="mt-4 w-full text-sm text-left rtl:text-right text-secondary border border-secondary">
                    <thead className="border-b border-secondary/60">
                        <tr >
                          <th className="px-7 py-2 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">EPS Actual</th>
                          <th className="px-6 py-4">EPS Estimate</th>
                          <th className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">EPS Diff</th>
                          <th className="px-6 py-4">Surprise %</th>
                          <th className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">Quarter</th>
                          <th className="px-6 py-4">Period</th>
                        </tr>
                    </thead>
                    <tbody className="md:text-sm text-xs">
                        {
                          earningData?.data?.earningsHistory?.history?.map((data, index) => (
                              <tr key={index} className="border-b border-secondary/60">
                              <td className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">{data.epsActual?data.epsActual:"N/A"}</td>
                              <td className="px-6 py-4 text-center">{data.epsEstimate? data.epsEstimate:"N/A"}</td>
                              <td className="px-7 py-4 whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">{data.epsDifference? data.epsDifference : 'N/A'}</td>
                              <td className="px-6 py-4 text-center">{data.surprisePercent? data.surprisePercent: 'N/A'}</td>
                              <td className="px-7 py-4 whitespace-nowrap bg-tertiary text-secondary text-md text-center uppercase">{data.quarter?data.quarter.split('T')[0]:"N/A"}</td>
                              <td className="px-6 py-4 text-center">{data.period}</td>
                              </tr>
                          ))
                        }
                    </tbody>
            </table>
          </div>
        </div>
      </div>   
    </>
  )
};

export default Earnings;
