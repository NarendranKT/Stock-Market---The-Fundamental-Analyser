// TradingViewWidget.jsx
import { useEffect, useRef, memo } from 'react';
import SectionWrapper from '../hoc/SectionWrapper';
import { styles } from '../style';


function HeatMap() {
    const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "exchanges": [],
          "dataSource": "SENSEX",
          "grouping": "sector",
          "blockSize": "market_cap_basic",
          "blockColor": "change",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": true,
          "isDataSetEnabled": true,
          "isZoomEnabled": false,
          "hasSymbolTooltip": true,
          "width": 1100,
          "height": 900
        }`;
          container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container mt-14 sm:flex flex-col hidden" ref={container}>
      <div > 
      <h1 className={`${styles.sectionHeadText}`}>HEAT MAP</h1>
    </div> 
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(HeatMap)
