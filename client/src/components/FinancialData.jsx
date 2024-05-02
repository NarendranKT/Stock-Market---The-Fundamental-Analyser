import { useEffect, useState } from "react";
import { financialDataApi } from "../apis/stockAPI";



const FinancialData = ({symbol}) => {
    const [financialData, setfinancialData] = useState({});
    
    useEffect(() => {
        financialDataApi(symbol.id)
            .then((response) => {
                setfinancialData(response.data)
            })
    }, [])
    
    if (Object.keys(financialData).length === 0) {
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
    
    delete financialData.financialData['maxAge']

    return (
        <div className="overflow-x-scroll flex justify-center">
            <table className="mt-4 text-sm text-left rtl:text-right text-secondary border border-secondary md:w-full">
                <tbody className="md:text-sm text-[11px]">
                    
                    {
                        Object.entries(financialData.financialData).map(([key, value])=>(
                            <tr key={key} className="border-b border-secondary/60">
                                <th className="md:px-7 px-2 py-4 font-bold whitespace-nowrap bg-tertiary text-white text-md text-center uppercase w-1/2">{key}</th>
                                <td className="md:px-6 max-md:text-center py-4 w-1/2 font-semibold text-white">{value}</td>
                            </tr>
                        ))   
                    }
                </tbody>
            </table>   
        </div>
    );
};

export default FinancialData;
