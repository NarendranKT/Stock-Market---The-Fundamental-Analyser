import { useEffect, useState } from "react";
import { statisticsApi } from "../apis/stockAPI";


const Statistics = ({symbol}) => {

    const [statistics, setStatistics] = useState({});
    const [data, setData] = useState({})

    
    useEffect(() => {
        statisticsApi(symbol.id)
            .then((response) => {
                setData(response)
                setStatistics(response?.data?.defaultKeyStatistics)
            })
    },[])

        // if (data) {
        //     setStatistics(data?.data?.defaultKeyStatistics);
        // }
    
    if (Object.keys(data).length === 0 || Object.keys(statistics).length == 0) {
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

    if (data.status === 'failed') {
        return <div className="w-full text-center flex items-center justify-center ">
                <h2 className="text-[24px] ps-2 tracking-wide">No data found</h2>
        </div>
    }


  return (
    <>
        <div className="flex items-center flex-wrap md:justify-center w-full mt-5 overflow-x-scroll text-xs">
                    <table className="mt-4 w-full text-left rtl:text-right  border border-secondary text-xs text-white">
                        
                        <tbody className="md:text-base  ">
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase w-1/2">Price Hint</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.priceHint? statistics?.priceHint: "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Enterprise Value</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.enterpriseValue? `${(statistics?.enterpriseValue/1000000000).toFixed(0)}B`: "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Forward P.E.</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.forwardPE? statistics?.forwardPE : "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Profit Margin</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.profitMargins? statistics?.profitMargins: "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Float Shares</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.floatShares? `${(statistics?.floatShares/1000000000).toFixed(2)}B`: "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Shares Outstanding</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.sharesOutstanding? `${(statistics?.sharesOutstanding/1000000000).toFixed(2)}B`: "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Held Percent Insiders</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.heldPercentInsiders? statistics?.heldPercentInsiders.toFixed(4): "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Held Percent Institutions</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.heldPercentInstitutions? statistics?.heldPercentInstitutions.toFixed(4): "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Beta</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.beta? statistics?.beta: "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Implied Shares Outstanding</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{statistics?.impliedSharesOutstanding? statistics?.impliedSharesOutstanding: "N/A"}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Category</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.category? statistics?.category: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Book Value</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.bookValue? statistics?.bookValue: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Price To Book</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.priceToBook? statistics?.priceToBook: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Fund Family</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.fundFamily? statistics?.fundFamily: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Legal Type</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.legalType? statistics?.legalType: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Last Fiscal Year End</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.lastFiscalYearEnd? new Date(statistics?.lastFiscalYearEnd).toDateString() : "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Next Fiscal Year End</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.nextFiscalYearEnd? new Date(statistics?.nextFiscalYearEnd).toDateString(): "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Most Recent Quarter</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.mostRecentQuarter? new Date(statistics?.mostRecentQuarter).toDateString(): "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Earnings Quarterly Growth</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.earningsQuarterlyGrowth? statistics?.earningsQuarterlyGrowth: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Net Income To Common</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.netIncomeToCommon? `${(statistics?.netIncomeToCommon/1000000000).toFixed(2)}B`: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Trailing EPS</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.trailingEps? statistics?.trailingEps: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Forward Eps</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.forwardEps? statistics?.forwardEps: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">PEG Ratio</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                   {statistics?.pegRatio? statistics?.pegRatio: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Last Split Factor</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.lastSplitFactor? statistics?.lastSplitFactor: "N/A"}
                                </td>
                            </tr>
                            
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Last Split Date</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.lastSplitDate? new Date(statistics?.lastSplitDate*1000).toDateString(): "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Enterprise To Revenuer</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.enterpriseToRevenue? statistics?.enterpriseToRevenue: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Enterprise To Ebitda</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.enterpriseToEbitda? statistics?.enterpriseToEbitda: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">52 Week Change</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics['52WeekChange']? statistics["52WeekChange"]: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">S&P 52 Week Change</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.SandP52WeekChange? statistics?.SandP52WeekChange: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Last Divident Value</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.lastDividendValue? statistics?.lastDividendValue: "N/A"}
                                </td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Last Divident Date</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    {statistics?.lastDividendDate? new Date(statistics?.lastDividendDate).toDateString(): "N/A"}
                                </td>
                            </tr>
                        </tbody>
                    </table>                   
        </div>
    </>
  )
};

export default Statistics;
