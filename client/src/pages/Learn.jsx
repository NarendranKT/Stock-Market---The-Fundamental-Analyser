import { useState } from "react";
import { styles } from "../style";
import { balanceSheetData, basics, fundamentalData, sidebar } from "../constants";



const SideBar = ({learning, setLearning, topic, setTopic}) => {

  return (
    <aside id="sidebar-multi-level-sidebar" className="mt-24 fixed top-0 left-0 z-0 w-[350px] h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-secondary/30 text-secondary" aria-label="Sidebar">
        <div className="h-full px-3 py-5 overflow-y-auto bg-primary ">
            <ul className="space-y-2 font-medium mt-7 text-lg">
              <li>
                  <button className={`flex items-center w-full p-2 rounded-lg  hover:bg-secondary group hover:text-primary hover:transition-colors duration-300 delay-100 font-medium text-xl ${learning === 'basics' ? 'bg-secondary text-primary font-extrabold tracking-wider ' : 'text-secondary'}`}
                  onClick={()=>{setLearning("basics")}}
                  >
                    <span className="ms-3">Basics</span>
                  </button>                 
                  <ul className={`${learning === 'basics' ? 'flex flex-col ps-5 pt-2 cursor-pointer h-full':'hidden h-0'} `}>
                  
                    {
                      sidebar.basics.map((item)=>(
                        <li key={item.id} className={`${topic['basics'] === item.id && 'text-xl text-white'} py-2 transition-all duration-100 ease-out hover:text-xl hover:text-white rounded-lg px-6`} onClick={()=>{setTopic('basics',item.id)}}>{item.name}</li>
                      ))
                    }
                  
                  </ul>
              </li>   
                        
              <li>
                <button className={`flex items-center w-full p-2 rounded-lg  hover:bg-secondary group hover:text-primary text-xl hover:transition-colors duration-300 delay-100 font-medium ${learning === 'fundamentalData' ? 'bg-secondary font-extrabold tracking-wider text-primary' : 'text-secondary'}`}
                  onClick={()=>setLearning("fundamentalData")}>
                    <span className=" ms-3 whitespace-nowrap">Fundamental Data</span>
                  </button>
                  <ul className={`${learning === 'fundamentalData' ? 'flex flex-col ps-5 pt-2 cursor-pointer h-full':'hidden h-0'} transition-[height]`}>
                  {
                sidebar.fundamentalData.map((item) => (
                      <li key={item.id} className={`${topic['fundamentalData'] === item.id && 'text-xl text-white'} py-2 transition-all duration-100 ease-out hover:text-xl hover:text-white rounded-lg px-6`} onClick={()=>{setTopic('fundamentalData',item.id)}}>{item.name}</li>
                    ))
                  }
                    
                  </ul>
              </li>
              
              <li>
                  <button className={`flex items-center w-full p-2 rounded-lg  hover:bg-secondary group hover:text-primary text-xl hover:transition-colors duration-300 delay-100 font-medium ${learning === 'balanceSheet' ? 'bg-secondary font-extrabold tracking-wider text-primary' : 'text-secondary'}`} onClick={()=>setLearning("balanceSheet")}>
                    <span className=" ms-3 whitespace-nowrap">Balance Sheet Data</span>                    
                  </button>
                  <ul className={`${learning === 'balanceSheet' ? 'flex flex-col ps-5 pt-2 cursor-pointer h-full':'hidden h-0'} transition-[height]`}>
                    {
                      sidebar.balanceSheet.map((item)=>(
                        <li key={item.id} className={`${topic['balanceSheet'] === item.id && 'text-xl text-white'} py-2 transition-all duration-100 ease-out hover:text-xl hover:text-white rounded-lg px-6`} onClick={()=>{setTopic('balanceSheet',item.id)}}>{item.name}</li>
                      ))
                    }
                  </ul>
              </li>
            </ul>
        </div>
      </aside>
  )
}

const Learn = () => {
  
  const [learning, setLearning] = useState("basics");
  const [topic, setTopic] = useState({
    basics: "stockMarket",
    fundamentalData: "stocks",
    balanceSheet: "balanceSheet"
  })

  const switchLearning = (item) => {
    setLearning(item);
  }

  const switchTopic = ( name, item) => {
    setTopic({ ...topic, [name]:item});
  }

console.log(basics[topic[learning]]);
  return (
    <div className={`${styles.paddingY} text-white mt-14 flex justify-normal`}>

      {/* sidebar */}
      <div className="w-[350px]">
        <SideBar learning={learning} setLearning={switchLearning} topic={topic} setTopic={switchTopic} />
      </div>
      
      <div className={`${styles.paddingX} max-w-7xl bg-primary text-white`}>
          {
            learning === 'basics' &&
            <div>
                {basics[topic[learning]].map((data, index) => (
                  <div key={index} className="pt-3">
                    <h1 className={`${styles.sectionHeadText} text-secondary`}>{data.title}</h1>
                    {data.desc.map((item, index) => (
                      <p className="ps-10 tracking-wider leading-relaxed text-slate-300 py-2 text-xl" key={index}>{item}</p>
                    ))}
                  </div>
                ))}
            </div>
        }
        {
            learning === 'fundamentalData' &&
            <div>
                {fundamentalData[topic[learning]].map((data, index) => (
                  <div key={index} className="pt-3">
                    <h1 className={`${styles.sectionHeadText} text-secondary`}>{data.title}</h1>
                    {data.desc.map((item, index) => (
                      <p className="ps-10 tracking-wider leading-relaxed text-slate-300 py-2 text-xl" key={index}>{item}</p>
                    ))}
                  </div>
                ))}
            </div>
          }
          {
            learning === 'balanceSheet' &&
            <div>
                {balanceSheetData[topic[learning]].map((data, index) => (
                  <div key={index} className="pt-3">
                    <h1 className={`${styles.sectionHeadText} text-secondary`}>{data.title}</h1>
                    {data.desc.map((item, index) => (
                      <p className="ps-10 tracking-wider leading-relaxed text-slate-300 py-2 text-xl" key={index}>{item}</p>
                    ))}
                  </div>
                ))}
            </div>
          }
     </div>

    </div>
  )

};

export default Learn;
