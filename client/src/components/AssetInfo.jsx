import { useEffect, useState } from "react";

import { styles } from "../style";
import { assetProfile } from "../apis/stockAPI";


const AssetInfo = ({symbol}) => {
    const [asset, setAsset] = useState({});
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        assetProfile(symbol.id)
            .then((response) => setAsset(response.data))
        setLoading(false);
    },[])

    if (Object.keys(asset).length === 0) {
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
    <>
        {
            <div>
                <p className="text-secondary text-xs md:text-base ps-5 leading-relaxed tracking-wide ">
                    {asset.assetProfile.longBusinessSummary}
                </p>
                {/* asset table */}
                <div className="flex items-center flex-wrap md:justify-center w-full mt-5 overflow-x-scroll text-xs">
                    <table className="mt-4 w-full text-left rtl:text-right text-secondary border border-secondary text-xs">
                        
                        <tbody className="md:text-base  ">
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Industry</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.industry}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Sector</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.sector}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">Address</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.address1}, {asset.assetProfile.address2}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">pincode</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.zip}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">City & country</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.city}, {asset.assetProfile.country}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">audit risk</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.auditRisk}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">board risk</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.boardRisk}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">compensation risk</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.compensationRisk}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase px-1">shareholder rights risk</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.shareHolderRightsRisk}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">overall risk</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.overallRisk}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">full time employees</th>
                                <td className="md:px-6 px-2 text-wrap py-4">{asset.assetProfile.fullTimeEmployees}</td>
                            </tr>
                            <tr className="border-b border-secondary/60">
                                <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">website</th>
                                <td className="md:px-6 px-2 text-wrap py-4">
                                    <a href={`${asset.assetProfile.website}`} target="_blank" className="underline font-medium">{asset.assetProfile.website}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>                   
                </div>
                {/* top officers */}
                <div>
                    <p className={`${styles.sectionHeadText} uppercase mt-10`}>top officers</p>
                    <div className="flex items-strech justify-center flex-auto gap-x-10 flex-wrap">
                        {
                                asset.assetProfile.companyOfficers.map((staff) => (
                                <table className="mt-4 w-2/5 text-sm text-left rtl:text-right text-secondary border border-secondary" key={staff.name}>
                                    <tbody  className="text-xs md:text-base">
                                        <tr className="border-b border-secondary/60">
                                            <th className="px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase w-1/4">
                                                name
                                            </th>
                                            <td className="px-6  text-wrap py-4">
                                                {staff.name}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-secondary/60">
                                            <th className="md:px-7 py-4 font-bold whitespace-nowrap bg-tertiary text-secondary  text-center uppercase">
                                                title
                                            </th>
                                            <td className="md:px-6 px-2 text-wrap py-4">
                                                {staff.title}
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            ))
                        }
                    </div>
                </div>
            </div>
        }
    </>
    )
};

export default AssetInfo;
