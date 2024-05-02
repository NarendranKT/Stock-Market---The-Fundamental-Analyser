import HeatMap from "../components/HeatMap";
import StockPrice from "../components/StockPrice";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../style";
import TradingViewWidget from "../components/TradingViewWidget";
import { symbol } from "../constants";


const Dashboard = () => {

  return <div className=" mt-10 bg-primary">
    <div className="mb-0"> 
              <p className={`${styles.sectionSubText}`}>Explore the live chart of Nifty 50</p>
              <h1 className={`${styles.sectionHeadText}`}>NIFTY 50</h1>
    </div>
    <TradingViewWidget symbol={symbol.nifty50}/>
    <StockPrice  />
    <HeatMap />
  </div>;
};

export default SectionWrapper(Dashboard, "dashboard");
