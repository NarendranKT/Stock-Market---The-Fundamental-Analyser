import dayjs from 'dayjs';

export const navLinks = [
  {
    id: "news",
    title: "News",
  },
  {
    id: "dashboard",
    title: "Dashboard",
  },
  {
    id: "learn",
    title: "Learn",
  },
];

export const tabLinks = [
  {
    id: "about",
    name: "About"
  },
  {
    id: "financials",
    name: "Financials"
  },
  {
    id: "earnings",
    name: "Earnings"
  },
  {
    id: "analysis",
    name: "Analysis"
  }, {
    id: "history",
    name: 'Historical'
  }

]

export const symbol = {
  nifty50: {
    id: "^NSEI",
    name: "NIFTY 50"
  },
  "NIFTY 50": {
    id: "^NSEI",
    name: "NIFTY 50"
  },
  HDFCBANK: {
    id: "HDFCBANK.NS",
    name : "HDFC BANK"
  },
  TITAN: {
    id: "TITAN.NS",
    name: "Titan Company Limited"
  },
  TECHM: {
    id: "TECHM.NS",
    name : "Tech Mahindra Limited"
  },
  EICHERMOT: {
    id: "EICHERMOT.NS",
    name: "Eicher Motors Limited"
  },
  ASIANPAINT: {
    id: "ASIANPAINT.NS",
    name: "Asian Paints Limited"
  },
  DIVISLAB: {
    id: "DIVISLAB.NS",
    name: "Divi's Laboratories Limited"
  },
  TATACONSUM: {
    id: "TATACONSUM.NS",
    name: "Tata Consumer Products Limited"
  },
  SBILIFE: {
    id: "SBILIFE.NS",
    name: "SBI Life Insurance Company Limited"
  },
  DRREDDY: {
    id: "DRREDDY.NS",
    name: "Dr. Reddy's Laboratories Limited"
  },
  BAJAJFINSV: {
    id: "BAJAJFINSV.NS",
    name: "Bajaj Finserv Ltd."
  },
  "M&M": {
    id: "M&M.NS",
    name: "Mahindra And Mahindra"
  },
  NESTLEIND: {
    id: "NESTLEIND.NS",
    name: "Nestlé India Limited"
  },
  SHRIRAMFIN: {
    id: "SHRIRAMFIN.NS",
    name: "Shriram Finance Limited"
  },
  CIPLA: {
    id: "CIPLA.NS",
    name: "Cipla Limited"
  },
  SUNPHARMA: {
    id: "SUNPHARMA.NS",
    name: "Sun Pharmaceutical Industries Limited"
  },
  KOTAKBANK:{
    id: "KOTAKBANK.NS",
    name : "Kotak Mahindra Bank Limited"
  },
  HINDUNILVR: {
    id: "HINDUNILVR.NS",
    name: "Hindustan Unilever Limited"
  },
  ADANIPORTS: {
    id: "ADANIPORTS.NS",
    name: "Adani Ports and Special Economic Zone Limited"
  },
  ITC: {
    id: "ITC.NS",
    name: "ITC Limited"
  },
  HEROMOTOCO: {
    id: "HEROMOTOCO.NS",
    name: "Hero MotoCorp Limited"
  },
  ADANIENT: {
    id: "ADANIENT.NS",
    name: "Adani Enterprises Limited"
  },
  NTPC: {
    id: "NTPC.NS",
    name: "NTPC Limited"
  },
  POWERGRID: {
    id: "POWERGRID.NS",
    name: "Power Grid Corporation of India Limited"
  },
  RELIANCE: {
    id: "RELIANCE.NS",
    name: "Reliance Industries Limited"
  },
  SBIN: {
    id: "SBIN.NS",
    name: "State Bank of India"
  },
  BRITANNIA: {
    id: "BRITANNIA.NS",
    name: "Britannia Industries Limited"
  },
  JSWSTEEL: {
    id: "JSWSTEEL.NS",
    name: "JSW Steel Limited"
  },
  TATASTEEL: {
    id: "TATASTEEL.NS",
    name: "Tata Steel Limited"
  },
  HCLTECH: {
    id: "HCLTECH.NS",
    name: "HCL Technologies Limited"
  },
  ONGC: {
    id: "ONGC.NS",
    name: "Oil and Natural Gas Corporation Limited"
  },
  LTIM: {
    id: "LTIM.NS",
    name: "LTIMindtree Limited"
  },
  TATAMOTORS: {
    id: "TATAMOTORS.NS",
    name: "Tata Motors Limited"
  },
  INFY: {
    id: "INFY.NS",
    name: "Infosys Limited"
  },
  ICICIBANK: {
    id: "ICICIBANK.NS",
    name: "ICICI Bank Limited"
  },
  INDUSINDBK: {
    id: "INDUSINDBK.NS",
    name: "IndusInd Bank Limited"
  },
  WIPRO: {
    id: "WIPRO.NS",
    name: "Wipro Limited"
  },
  COALINDIA: {
    id: "COALINDIA.NS",
    name: "Coal India Limited"
  },
  APOLLOHOSP: {
    id: "APOLLOHOSP.NS",
    name: "Apollo Hospitals Enterprise Limited"
  },
  TCS: {
    id: "TCS.NS",
    name: "Tata Consultancy Services Limited"
  },
  BHARTIARTL: {
    id: "BHARTIARTL.NS",
    name: "Bharti Airtel Limited"
  },
  AXISBANK: {
    id: "AXISBANK.NS",
    name: "Axis Bank Limited"
  },
  MARUTI: {
    id: "MARUTI.NS",
    name: "Maruti Suzuki India Limited"
  },
  BPCL: {
    id: "BPCL.NS",
    name: "Bharat Petroleum Corporation Limited"
  },
  ULTRACEMCO: {
    id: "ULTRACEMCO.NS",
    name: "UltraTech Cement Limited"
  },
  GRASIM: {
    id: "GRASIM.NS",
    name: "Grasim Industries Limited"
  },
  "BAJAJ-AUTO": {
    id: "BAJAJ-AUTO.NS",
    name: "Bajaj Auto Limited"
  },
  BAJFINANCE: {
    id: "BAJFINANCE.NS",
    name: "Bajaj Finance Limited"
  },
  LT: {
    id: "LT>NS",
    name: "Larsen & Toubro Limited"
  },
  HINDALCO: {
    id: "HINDALCO.NS",
    name: "Hindalco Industries Limited"
  },
  HDFCLIFE: {
    id: "HDFCLIFE.NS",
    name: "HDFC Life Insurance Company Limited"
  }

  

}

export const candleStickOption =  {
              chart: {
                type: 'candlestick',
                id: 'chart1',
              },
              tooltip: {
                enabled: true,
                theme: "dark",
                hideEmptySeries: true,
              },
              xaxis: {
                type: "category",
                position: 'bottom',
                
                labels: {
                  show: true,
                  rotate: 0,
                  hideOverlappingLabels: true,
                   style: {
                      colors:"#ffffff",
                      fontSize: '10px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontWeight: 800,
                  },
                   group: {
                    groups: [],
                    style: {
                      colors: ["#ffffff"],
                      fontSize: '12px',
                      fontWeight: 400,
                      fontFamily: undefined,
                      cssClass: ''
                    }
                  },
                  axisBorder: {
                            show: true,
                            color: '#78909C',
                            height: 0,
                            width: '100%',
                            offsetX: 0,
                            offsetY: 0
                        },
                        axisTicks: {
                            show: true,
                            borderType: 'solid',
                            color: '#78909C',
                            height: 1,
                            offsetX: 0,
                            offsetY: 0
                        },
                  formatter: function(val) {
                    return dayjs(val).format('HH:mm')
                  }
                },
              },
              yaxis:{
                labels: {
                  hideOverlappingLabels: true,
                   style: {
                      colors: ["#ffffff"],
                      fontSize: '10px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontWeight: 800,
                      cssClass: 'apexcharts-yaxis-label'
                  },
                },

              }
}

export const basics = {
  stockMarket: [
    {
      title: "What is Stock Market?",
      desc: [`The term stock market refers to several exchanges in which shares of publicly held companies are bought and sold. Such financial activities are conducted through formal exchanges and via over-the-counter (OTC) marketplaces that operate under a defined set of regulations.`, `Both “stock market” and “stock exchange” are often used interchangeably. Traders in the stock market buy or sell shares on one or more of the stock exchanges that are part of the overall stock market.`]
    },
    {
      title: "What is Stock?",
      desc: [ `A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called "shares" which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own.` ,
      `Stocks are bought and sold predominantly on stock exchanges and are the foundation of many individual investors' portfolios. Stock trades have to conform to government regulations meant to protect investors from fraudulent practices.`]
    },
  ],

  shareHolder: [
    {
      title: "who are shareholders?",
      desc: [
        "Shareholders are individuals, entities, or institutions that own shares or stock in a corporation. When someone buys shares of a company, they become a shareholder, which means they own a portion of that company.",
        "Shareholders are entitled to certain rights, such as voting in corporate decisions (usually proportional to the number of shares they own), receiving dividends if the company distributes profits, and participating in the company's growth and financial success.",
        "Shareholders can be individuals, other corporations, mutual funds, pension funds, or any other entity that invests in the company's stock."]
    },
    {
      title: "What is Shareholder Ownership?",
      desc:[ `What shareholders own are shares issued by the corporation, and the corporation owns the assets held by a firm. If you own 33% of the shares of a company, it is incorrect to assert that you own one-third of that company. However, you do own one-third of the company’s shares. This is known as the “separation of ownership and control.`]
    },
  ],

  portfolio: [
    {
    title: "What is Portfolio?",
    desc:[ `A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, and cash equivalents, including closed-end funds and exchange traded funds (ETFs). People generally believe that stocks, bonds, and cash comprise the core of a portfolio.`]
  }
  ],

  analysis: [
    {
      title: "Fundamental Analysis",
      desc:["Fundamental analysis is a type of stock market analysis that looks at the underlying fundamentals of a company’s financials. This includes things such as balance sheet data, income statements, and cash flow statements. Investors use this type of analysis to determine the intrinsic value of a stock and make investment decisions based on that value. Fundamental analysis is typically used by long-term investors who are looking to buy and hold a stock for a long period of time"]
    },
    {
      title: "Technical Analysis",
      desc: ["Technical analysis is a type of stock market analysis used to predict the future price of a stock or index through the use of historical data. Technical analysis uses various tools, such as charts, trend lines, and indicators, to study the past performance of a stock in order to predict its future direction. Technical analysis is usually used by short-term or day traders who are looking to buy or sell a stock quickly."]
    },
    {
      title: "Peer Analysis",
      desc:["Peer group analysis establishes a valuation for stocks in investment research, as long as the group consists of companies similar to the one being researched. This is especially key when it comes to business areas and market capitalization. Investors can use this analysis to spot valuation anomalies for certain stocks."]
    }
  ],

  trading: [
    {
      title: "What is trading in stock market?",
      desc: ["Trading refers to the exchange of goods or services between two entities. In stock trading, the exchange occurs between investors or traders and companies issuing stocks. Trade takes place in organised stock markets with rules and regulations that all entities must adhere to. India also has regulatory bodies to supervise and maintain market integrity.",
      "Regarding stock trading, trade refers to buying and selling listed companies' stocks in primary and secondary markets. Traders must choose one of the different types of trade strategies based on their orientation towards trading, financial goals, and duration for which they want to invest their money."]
    },
    {
      title: "Types of trading",
      desc: ['Stock traders use different types of trade strategies according to their market knowledge and convictions. One major issue is that one trading strategy that works for one trader may not be successful for another. That is why traders employ different techniques to trade in the stock market.']
    },
    {
      title: "Intraday Trading",
      desc: [
        'Intraday trading, also known as day trading, is a common type of stock market trading. Although many traders use this strategy to make high profits, it also contains a high element of risk. Traders involved in day trading buy and sell stocks on the same day.',
        'Since day traders must close the positions on the same day, traders must keep a watch on the momentum of ETFs, indices, and stocks to place the orders at the right time. They can use the buy first and sell later approach or go for a sell first and buy later strategy. However, novice traders must refrain from trading on margin as it might increase their loss if the trade does not favour them.']
    },
    {
      title: "Positional Trading",
      desc: ["Similar to day trading, positional trading requires traders to monitor a stock's momentum before placing a buy order. However, positional trading does not offer the option to sell first and buy later. It is a medium-term trading strategy for investors ready to focus on long-term gains while ignoring short-term fluctuations.", "Some traders analyse the stock’s price action to discover their entry and exit points. Support and resistance lines drawn on a chart help them understand the journey of a particular stock. Some traders involved in positional trading also use technical indicators to foresee a particular stock’s future direction. Such indicators include volume, simple average, moving average, MACD, RSI, etc."]
    },
    {
      title: "Swing Trading",
      desc: [
        "Swing traders analyse charts in various durations, such as 5, 10, 15, 30, 60 minutes or even 24 hours. It helps them spot swings in price fluctuations. Sometimes, they may overlap day or positional trading. Traders often consider this the most challenging type of trade due to high volatility and constant monitoring. However, volatility is a swing trader’s best friend. The more volatility a stock has, the better will be the income opportunities. Hence, if a trader can accurately predict the swings trading, this type of trading is the best strategy they need."
      ]
    },
    {
      title: "Scalping",
      desc: [
        "Scalping is a type of day trading. While intraday traders stay invested in the stock market the whole day to identify opportunities for profits, scalping traders create several short-duration traders to leverage the waves. Scalpers need high observation skills and experience to pinpoint trades and place orders. It is common for scalpers to lose a few trades and take a few others. By the day’s end, they compare the profit-making trades with loss-making ones to analyse their loss or profit. A scalping trade might last for just a few minutes to an hour."
      ]
    },
    {
      title: "Momentum Trading",
      desc: [
        "Momentum trading is one of the easiest types of trade in the stock market. Traders in this trading strategy must predict a stock’s movement to identify the right time to enter or exit. The right time to exit is when a stock is expected to break out. Conversely, the right time to buy a stock is when the price is low."
      ]
    }
  ],

  investment: [
    {
      title: "What is an Investment?",
      desc: [
        "An investment is an asset or item acquired with the goal of generating income or appreciation. Appreciation refers to an increase in the value of an asset over time. When an individual purchases a good as an investment, the intent is not to consume the good but rather to use it in the future to create wealth.",
        "An investment always concerns the outlay of some resource today—time, effort, money, or an asset—in hopes of a greater payoff in the future than what was originally put in. For example, an investor may purchase a monetary asset now with the idea that the asset will provide income in the future or will later be sold at a higher price for a profit."
      ]
    },
    {
      title: "How an Investment works?",
      desc: [
        `The act of investing has the goal of generating income and increasing value over time. An investment can refer to any mechanism used for generating future income. This includes the purchase of bonds, stocks, or real estate property, among other examples. Additionally, purchasing a property that can be used to produce goods can be considered an investment.",
        "Basically investment is divided into two types.
       </br>
        <ul className="mt-5">
          <li>Short term investment</li>
          <li>Long term investment</li>
        </ul> `
      ]
    },
    {
      title: "what is short term investment?",
      desc: [`Short-term investments, also known as marketable securities or temporary investments, are financial investments that can easily be converted to cash, typically within Three years. Many short-term investments are sold or converted to cash after a period of only three-12 months.`]
    },
    {
      title: "what is long term investment",
      desc:[ `Long-term investments are assets that an individual or company intends to hold for a period of more than three years. Instruments facilitating long-term investments include stocks, real estate, cash, etc. Long-term investors take on a substantial degree of risk in pursuit of higher returns.`]
    },
  ],

  stockMarketExchanges: [
    {
      title: "Stock Exchange",
      desc: [
        `Stock Exchange market is a vital component of a stock market. It facilitates the transaction between traders of financial instruments and targeted buyers. A stock exchange in India adheres to a set of rules and regulations directed by Securities and Exchange Board of India or SEBI. The said authoritative body functions to protect the interest of investors and aims to promote the stock market of India.`
      ]
    },
    {
      title: "What is the Stock Exchange?",
      desc: [
        `The stock exchange in India serves as a market where financial instruments like stocks, bonds and commodities are traded.`,
        `It is a platform where buyers and sellers come together to trade financial tools during specific hours of any business day while adhering to SEBI’s well-defined guidelines. However, only those companies who are listed in a stock exchange are allowed to trade in it.`,
        `Stocks which are not listed on a reputed stock exchange can still be traded in an ‘Over The Counter Market’. But such shares would not be held high in esteem in the stock exchange market.`
      ]
    },
    {
      title: "Types of Stock Exchanges",
      desc: [
        `Bombay Stock Exchange (BSE): This particular stock exchange was established in 1875 in Mumbai at Dalal Street. It renowned as the oldest stock exchange not just in Asia and is the ‘World’s 10th largest Stock Exchange’.`,
        `The estimated market capitalisation of Bombay Stock Exchange as of April stands at $ 4.9 Trillion and has around 6000 companies publicly listed under it. The performance of BSE is measured by the Sensex, and it reached its all-time high in June in 2019, when it touched 40312.07.`,
        `National Stock Exchange (NSE): The NSE was established in 1992 in Mumbai and is accredited as the pioneer among the demutualised electronic stock exchange markets in India. This stock exchange market was established with the objective to eliminate the monopolistic impact of the Bombay Stock exchange in the Indian stock market.`,
        `The estimated market capitalisation of National Stock Exchange as of March 2016 was US$ 4.1 trillion and was acclaimed as the 12th largest stock exchange in the world. NIFTY 50 is NSE’s index, and it is extensively used by investors across the globe to gauge the performance of the Indian capital market.`
      ]
    },

    {
      title: "What is Sensex?",
      desc: [
        `Sensex was meant to denote the most popular market index of 30 companies listed under the Bombay Stock Exchange. The component companies listed in this index today are some of the biggest companies in this country with the most actively traded stocks. Sensex comes under BSE.`,
        `Apart from Sensex, other important indices of Bombay Stock Exchange include BSE 100, BSE 200, BSE 500, BSE MIDCAP, BSE SMLCAP, BSE PSU, BSE Auto, BSE Pharma, BSE FMCG, and BSE Metal.`
      ]
    },
    {
      title: "What is NIFTY 50?",
      desc: [
        `NIFTY 50 is a benchmark based index and also the flagship of NSE, which showcases the top 50 equity stocks traded in the stock exchange out of a total of 1600 stocks`,
        `stocks span across 12 sectors of the Indian economy which include – information technology, financial services, consumer goods, entertainment and media, financial services, metals, pharmaceuticals, telecommunications, cement and its products, automobiles, pesticides and fertilizers, energy, and other services.`,
        `Apart from Nifty, other key indices of NSE include Nifty Next50, Nifty500, Nifty Midcap150, Nifty Smallcap250 and Nifty MidSmallcap 400.`
      ]
    }
  ],
}

export const fundamentalData = {
  stocks: [
    {
      title: "Penny Stocks",
      desc: ["Penny stocks are stocks that are priced very low, mostly under Rs 20 per share, and such companies have low market capitalization as well"]
    },
    {
      title: "Blue Chip Stocks",
      desc: [`Blue-chip stocks are highly priced market stocks that have emerged as a preferred investment option over recent years. The companies that issue blue-chip stocks are highly esteemed in the stock exchange market and tend to have a stable financial record and credibility.`]
    }
  ],
  funds: [
    {
    title: "what is index funds?",
    desc: [`Index funds are investment funds that follow a benchmark index, When you put money in an index fund, that cash is then used to invest in all the companies that make up the particular index, which gives you a more diverse portfolio than if you were buying individual stocks.`]
  },
  {
    title: "What is mutual funds",
    desc:[ `A mutual fund is a pool of money managed by a professional Fund Manager. It is a trust that collects money from a number of investors who share a common investment objective and invests the same in equities, bonds, money market instruments and/or other securities.`]
  },
  ],
  etf: [
    {
      title: "What is ETF?",
      desc: ["ETF stands for 'Exchange-Traded Fund.' An ETF is a type of investment fund that holds assets such as stocks, commodities, or bonds and trades on stock exchanges, similar to individual stocks Investors can buy and sell ETF shares throughout the trading day at market prices, making them a popular choice for both individual and institutional investors seeking exposure to various markets with lower costs compared to traditional mutual funds."]
    }
  ],
  bonds: [
    {
      title: "What is Bonds?",
      desc:[ "A bond is a type of fixed-income investment. When you buy a bond, you are essentially lending money to a government or corporation in exchange for periodic interest payments, known as coupon payments."]
    }
  ],
  commodities: [
    {
      title: "What is Commodities?",
      desc: [
        "commodities are raw materials or primary agricultural products that can be bought and sold. Examples of commodities include metals like gold and silver, agricultural products like wheat and corn, energy sources like oil and natural gas, and soft commodities like cotton and coffee. Commodities are traded on commodity exchanges and can be bought and sold in standardized contracts. "
      ]
    }
  ],
}

export const balanceSheetData = {
  balanceSheet: [
    {
      title: "what is Balance Sheet?",
      desc: [
        "Balance sheet data refers to the financial information presented on a company's balance sheet. A balance sheet is one of the three main financial statements used by companies to report their financial performance and position. It provides a snapshot of a company's financial condition at a specific point in time, usually at the end of a reporting period such as a quarter or fiscal year.",
        "Balance sheet data provides valuable insights into a company's financial health, liquidity, solvency, and overall stability. Investors, creditors, analysts, and other stakeholders use this information to assess a company's performance, make investment decisions, and evaluate its ability to meet its financial obligations."
      ]
    }
  ],

  ohlc: [
    {
      title: "Open Price",
      desc: [
        "The price at which a financial instrument first trades when the market opens for a given time period, such as the opening price of a stock at the beginning of a trading day. It is the first price recorded after the market opens. "
      ]
    },
    {
      title: "High Price",
      desc: [
        "The highest price reached by a financial instrument during the specified time period. It represents the peak price at which the instrument traded during that period."
      ]
    },
    {
      title: "Low Price",
      desc: [
        "The lowest price reached by a financial instrument during the specified time period. It represents the lowest price level at which the instrument traded during that period. "
      ]
    },
    {
      title: "Close Price",
      desc: [
        "TThe price at which a financial instrument last trades when the market closes for a given time period, such as the closing price of a stock at the end of a trading day. It is the final price recorded before the market closes."
      ]
    },
  ],

  csp: [
    {
      title: "Current Stock Price",
      desc:[ "The current Stock price is the most recent selling price of a stock, currency, commodity, or precious metal that is traded on an exchange and is the most reliable indicator of that security's present value."]
    },
  ],

  marketCap: [
    {
    title: "What is the meaning of market cap?",
    desc: ["Market capitalization, or market cap, is one measurement of a company's size. It's the total value of a company's outstanding shares of stock, which include publicly traded shares plus restricted shares held by company officers and insiders."]
  },
  ],

  peratio: [
    {
    title: "Stock P/E",
    desc: ["The P/E for a stock is computed by dividing the price of a stock (the 'P') by the company's annual earnings per share (the 'E')"]
  },
  {
    title: "What is a good PE ratio for a stock?",
    desc: ["To give you some sense of what the average for the market is, though, many value investors would refer to 20 to 25 as the average P/E ratio range. And again, like golf, the lower the P/E ratio a company has, the better an investment the metric is saying it is."]
  },
  ],

  bookValue: [
    {
    title: "What do you mean by book value?",
    desc:[ "Book value is a company's equity value as reported in its financial statements. The book value figure is typically viewed in relation to the company's stock value (market capitalization) and is determined by taking the total value of a company's assets and subtracting any of the liabilities the company still owes."]
  },
  ],

  dividend: [
    {
    title: "What Is the Dividend Yield?",
    desc: ["The dividend yield, expressed as a percentage, is a financial ratio (dividend/price) that shows how much a company pays out in dividends each year relative to its stock price. It's important for investors to keep in mind that higher dividend yields do not always indicate attractive investment opportunities because the dividend yield of a stock may be elevated as a result of a declining stock price."]
  },
  ],

  roce: [
    {
      title: "ROCE",
      desc: ["Return on capital employed – sometimes referred to as the 'primary ratio' – is a financial ratio that is used to measure the profitability of a company and the efficiency with which it uses its capital. Put simply, it measures how good a business is at generating profits from capital."]
    },
    {
      title: "What is a good ROCE ratio?",
      desc:[ "The general rule about ROCE is the higher the ratio, the better. That's because it is a measure of profitability. A ROCE of at least 20% is usually a good sign that the company is in a good financial position. But keep in mind that you shouldn't compare the ROCE ratios of companies in different industries."]
    },
  ],

  roe: [
  {
    title: "ROE",
    desc: ["Return on equity (ROE) is the measure of a company's net income divided by its shareholders' equity. ROE is a gauge of a corporation's profitability and how efficiently it generates those profits. The higher the ROE, the better a company is at converting its equity financing into profits."]
  }, {
    title: "What is good ROE Ratio",
    desc: ["15% to 20% will be good Return on Equity. While average ratios, as well as those considered “good” and “bad”, can vary substantially from sector to sector, a return on equity ratio of 15% to 20% is usually considered good. At 5%, the ratio would be considered low."]
  },
  ],

  faceValue: [
  {
    title: "What is Face Value",
    desc:[ "As an investor, it is important to understand the key concept of the face value of shares and bonds. Whenever a publicly listed company issues its stocks through Initial Public Offering (IPOs), it fixes a price which is the face value. It is simply the price at which you purchase the shares of a particular company.",
    "Also known as the par value, face value is the value of the company as listed in its books and share certificates. It is fixed by the company, once it decides to issue its shares and bonds."]
  },
  {
    title: "Understanding working of face value of shares and bonds",
    desc: ["All companies issue shares and bonds at face value. There are no fixed criteria for fixing the face value of shares by a particular company. Typically, it is arbitrarily assigned by the company. Assigning face value is important from the company’s perspective as it helps the entity to calculate the accounting value of its shares. This value is then used in its balance sheet.",
    "The face value of the shares and bonds is clearly mentioned in the share/bond certificate. To know about the face value of shares, you are simply required to refer to your Demat Account. Knowing the face value of shares is the foremost step required, before you start trading in stocks."]
  },
  {
    title: "Is higher face value good or bad?",
    desc:[ "If the face value of a company is higher, it means, it can pay higher dividends and this can get more of the investors with income-earning mindsets to invest in the company."]
  },
  ],

  mean: [
    {
    title: "What is Mean by debt?",
    desc: ["The debt or bond market is where loan assets are bought and sold. There's no single physical exchange for bonds. Transactions are mainly made between brokers, large institutions, or individual investors. The equity or stock market is where stocks are bought and sold."]
  },
  {
    title: "What is Mean by debt free:",
    desc: ["If a company has zero debt on its balance sheet, then it is known as a debt free company. Debt plays an important role in the present performance and future growth of any company."]
  },
  {
    title: "What is mean by asset?",
    desc: ["An asset is an economic resource which can be owned or controlled to return a profit, or a future benefit. In financial trading, the term asset relates to what is being exchanged on markets, such as stocks, bonds, currencies or commodities."]
  },
  ],

  quarterly: [
  {
    title: "what is quarterly results of companies:",
    desc: ["A quarterly report is a summary or a collection of a company's financial statements, such as balance sheets and income statements, issued every three months"]
  },
 {
    title: "sales in quarterly report:",
    desc:[ "sales report, also known as a sales analysis report, is a comprehensive record of all the sales activity taking place within a company over a certain period of time. Essentially, it provides sales managers with an overview of all the sales processes and operations carried out by the business."]
  },    
  ],

  expenses: [
    {
      title: "What Is an Expense?",
      desc: ["An expense is the cost of operations that a company incurs to generate revenue. It is simply defined as the cost one is required to spend on obtaining something. As the popular saying goes, “it costs money to make money.",
      "Common expenses include payments to suppliers, employee wages, factory leases, and equipment depreciation."]
    },
  ],

  profit: [
  {
      title: "Operating profit ",
      desc: ["Operating profit is the net income derived from a company's core operations. Put another way, it is the amount of money that a company has left over after meeting its operating costs (gross profit) but before paying its taxes.","Tax is a mandatory fee or financial charge levied by any government on an individual or an organization to collect revenue for public works providing the best facilities and infrastructure."]
    },
  {
      title: "Net Profit",
      desc: "Net profit is the amount of money your business earns after deducting all operating, interest, and tax expenses over a given period of time. To arrive at this value, you need to know a company's gross profit. If the value of net profit is negative, then it is called net loss."
    },
  ],

  eps: [
    {
    title: "Earnings Per Share (EPS)",
    desc: ["Earnings per share is used for evaluating the profitability of a company. It can simply be understood as the value of earnings per outstanding share of a company's common stock."]
  },
  {
      title: "What are Earning per Share",
      desc: ["To simply define what is EPS, we can say that it is the share of a company’s profit that is distributed to each share of stocks. Further, it is considered to be a significant financial parameter as it helps to gauge a company’s financial health. To elaborate, higher EPS reflects greater profitability from the company and its overall ventures."]
    },
  {
      title: "Earnings Per Share Formula",
      desc: ["EPS = (Net Income − Preferred Dividends)/End-of-Period Common Shares Outstanding"]
    },
  ],

  cpg: [
    {
    title: "Compound annual growth rate",
    desc: ["The compound annual growth rate (CAGR) is the rate of return that would be required for an investment to grow from its beginning balance to its ending balance, assuming the profits were reinvested at the end of each period of the investment's life span."]
  },
  ],

  equityCapital: [
    {
    title: "What is meant by equity capital?",
    desc: ["The equity capital definition refers to capital that a company owns that is not tied to debt. This type of capital often involves investor money entering the company in exchange for shares."]
  },
  ],

  reserves: [
    {
      title: "Reserves in balance sheet",
      desc: ["The reserves are funds set aside to pay future obligations. The balance sheet reserves of insurance companies are regulated so that these companies have sufficient reserves to pay client claims."]
    }
  ],

  borrowing: [
    {
      title:"Borrowing",
      desc:[ 'Borrowing in Balance sheet of a company represents the amount of money that the company has borrowed through various sources.']
    },
  ],

  liabilities: [
    {
      title: "Liabilities",
      desc: [
        "Liabilities include loans, accounts payable, mortgages, deferred revenues, bonds, warranties, and accrued expenses. Liabilities can be contrasted with assets. Liabilities refer to things that you owe or have borrowed; assets are things that you own or are owed."
      ]
    }
  ],

  fixedAsset: [
    {
      title: "Fixed Assets",
      desc: [
        "Fixed assets are tangible, long-lived assets used by a company in its operations, such as machinery, factories, tools, furniture and computers. They are listed in the noncurrent asset section on a company's balance sheet because their useful lives extend beyond one year."
      ]
    }
  ],
  
  cashFlow: [
    {
      title: "Cash Flow",
      desc: [
       "Cash flow is the movement of money in and out of a company. Cash received signifies inflows, and cash spent is outflows. The cash flow statement is a financial statement that reports a company's sources and use of cash over time." 
      ]
    }
  ]
}


export const sidebar = {
  basics: [
    {
      id: "stockMarket",
      name: "Stock Market"
    },
    {
      id: "shareHolder",
      name: "Share Holder"
    },
    {
      id: "portfolio",
      name: "Portfolio"
    },
    {
      id: "analysis",
      name: "Analysis"
    },
    {
      id: "investment",
      name: "Investment"
    },
    {
      id: "stockMarketExchanges",
      name: "Stock Market Exchanges"
    }
  ],
  fundamentalData: [
    {id:"stocks",name:"Stocks"},
    {id:"funds",name:"Funds"},
    {id:"etf",name:"ETF"},
    { id: "bonds", name: "Bonds" },
    {id: "commodities", name: "Commodities"}
  ],
  balanceSheet: [
    {
      id:"balanceSheet",
      name:"Balance Sheet"
    },
    {
      id: "ohlc",
      name: "Open High Low Close",
    },
    {
      id: "csp",
      name: "Current Stock Price"
    },
    {
      id: "marketCap",
      name: "Market Captilize"
    },
    {
      id: "peratio",
      name: "P.E. Ratio"
    },
    {
      id: "bookValue",
      name: "Book Value"
    },
    {
      id: "faceValue",
      name: "Face Value"
    },
    {
      id: "mean",
      name: "Mean"
    },
    {
      id: "quarterly",
      name: "Quarterly"
    },
    {
      id: "expenses",
      name: "Expenses"
    },
    {
      id: "profit",
      name:"Profit"
    },
    {
      id: "eps",
      name: "Earnings per Share"
    },
    {
      id: "cpg",
      name: "Compounded annual growth rate"
    },
    {
      id: "equityCapital",
      name: "Equity Capital"
    },
    {
      id: "reserves",
      name: "Reserves"
    },
    {
      id: "borrowing",
      name: "Borrowing"
    },
    {
      id: "liabilities",
      name:"Liabilities"
    },
    {
      id: "fixedAsset",
      name: "Fixed Asset"
    },
    {
      id: "cashFlow",
      name: "Cash Flow"
    }
  ]
}


export const learn = [
 {
      title: "What is Stock Market?",
      desc: `The term stock market refers to several exchanges in which shares of publicly held companies are bought and sold. Such financial activities are conducted through formal exchanges and via over-the-counter (OTC) marketplaces that operate under a defined set of regulations. 
      
      Both “stock market” and “stock exchange” are often used interchangeably. Traders in the stock market buy or sell shares on one or more of the stock exchanges that are part of the overall stock market.`
  },
  {
    title: "What is Stock?",
    desc:`A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called "shares" which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own. 
    Stocks are bought and sold predominantly on stock exchanges and are the foundation of many individual investors' portfolios. Stock trades have to conform to government regulations meant to protect investors from fraudulent practices.`
  },
  {
    title: "What is Shareholder Ownership?",
    desc: `What shareholders own are shares issued by the corporation, and the corporation owns the assets held by a firm. If you own 33% of the shares of a company, it is incorrect to assert that you own one-third of that company. However, you do own one-third of the company’s shares. This is known as the “separation of ownership and control.`
  },
  {
    title: "What is Portfolio?",
    desc: `A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, and cash equivalents, including closed-end funds and exchange traded funds (ETFs). People generally believe that stocks, bonds, and cash comprise the core of a portfolio.`
  },
  {
    title: "what is trading and investing in the share market?",
    desc: `Trading refers to the short-term buying and selling of shares. Day trading, for example, involves squaring off positions within the same trading day. Investing, on the contrary, is buying and holding the shares over a longer-term, which can be for days, months, or years, before selling it.`
  },
  {
    title: "what is short term investment?",
    desc: `Short-term investments, also known as marketable securities or temporary investments, are financial investments that can easily be converted to cash, typically within Three years. Many short-term investments are sold or converted to cash after a period of only three-12 months.`
  },
  {
    title: "what is long term investment",
    desc: `Long-term investments are assets that an individual or company intends to hold for a period of more than three years. Instruments facilitating long-term investments include stocks, real estate, cash, etc. Long-term investors take on a substantial degree of risk in pursuit of higher returns.`
  },
  {
    title: "NSE & BSE",
    desc: `The stock exchange is a marketplace where securities can be traded between investors/traders with the help of brokers. The BSE and NSE are the leading stock exchanges in the Indian market.
    BSE stands for Bombay Stock Exchange, and NSE stands for National Stock Exchange.`
  },
  {
    title: "What is sensex?",
    desc: `Sensex was meant to denote the most popular market index of 30 companies listed under the Bombay Stock Exchange. The component companies listed in this index today are some of the biggest companies in this country with the most actively traded stocks. Sensex comes under BSE.
    Apart from Sensex, other important indices of Bombay Stock Exchange include BSE 100, BSE 200, BSE 500, BSE MIDCAP, BSE SMLCAP, BSE PSU, BSE Auto, BSE Pharma, BSE FMCG, and BSE Metal.`
  },
  {
    title: "What is NIFTY 50?",
    desc: `NIFTY 50 is a benchmark based index and also the flagship of NSE, which showcases the top 50 equity stocks traded in the stock exchange out of a total of 1600 stocks
    These stocks span across 12 sectors of the Indian economy which include – information technology, financial services, consumer goods, entertainment and media, financial services, metals, pharmaceuticals, telecommunications, cement and its products, automobiles, pesticides and fertilizers, energy, and other services.
    Apart from Nifty, other key indices of NSE include Nifty Next50, Nifty500, Nifty Midcap150, Nifty Smallcap250 and Nifty MidSmallcap 400.`
  },
  {
    title: "Penny stocks",
    desc: `Penny stocks are stocks that are priced very low, mostly under Rs 20 per share, and such companies have low market capitalization as well`
  },
  {
    title: "Blue Chip Stocks",
    desc: `Blue-chip stocks are highly priced market stocks that have emerged as a preferred investment option over recent years. The companies that issue blue-chip stocks are highly esteemed in the stock exchange market and tend to have a stable financial record and credibility.`
  },
  {
    title: "what is index funds?",
    desc: `Index funds are investment funds that follow a benchmark index, When you put money in an index fund, that cash is then used to invest in all the companies that make up the particular index, which gives you a more diverse portfolio than if you were buying individual stocks.`
  },
  {
    title: "What is mutual funds",
    desc: `A mutual fund is a pool of money managed by a professional Fund Manager. It is a trust that collects money from a number of investors who share a common investment objective and invests the same in equities, bonds, money market instruments and/or other securities.`
  },
  {
    title: "Fundamental Analysis",
    desc: "Fundamental analysis is a type of stock market analysis that looks at the underlying fundamentals of a company’s financials. This includes things such as balance sheet data, income statements, and cash flow statements. Investors use this type of analysis to determine the intrinsic value of a stock and make investment decisions based on that value. Fundamental analysis is typically used by long-term investors who are looking to buy and hold a stock for a long period of time."
  },
  {
    title: "Technical Analysis",
    desc: "Technical analysis is a type of stock market analysis used to predict the future price of a stock or index through the use of historical data. Technical analysis uses various tools, such as charts, trend lines, and indicators, to study the past performance of a stock in order to predict its future direction. Technical analysis is usually used by short-term or day traders who are looking to buy or sell a stock quickly."
  }, {
    title: "Current Stock Price",
    desc: "The current Stock price is the most recent selling price of a stock, currency, commodity, or precious metal that is traded on an exchange and is the most reliable indicator of that security's present value."
  }, {
    title: "What is the meaning of market cap?",
    desc: "Market capitalization, or market cap, is one measurement of a company's size. It's the total value of a company's outstanding shares of stock, which include publicly traded shares plus restricted shares held by company officers and insiders."
  },
  {
    title: "What are Open, High, Low, Prev, Close Prices?",
    desc: "High - Highest price at which the scrip has traded during a trade session. Low - Lowest price at which the scrip has traded during a trade session. Prev. Close - Price at which the scrip has traded at the end of the last trade session"
  },
  {
    title: "Stock P/E",
    desc: "The P/E for a stock is computed by dividing the price of a stock (the 'P') by the company's annual earnings per share (the 'E')"
  },
  {
    title: "What is a good PE ratio for a stock?",
    desc: "To give you some sense of what the average for the market is, though, many value investors would refer to 20 to 25 as the average P/E ratio range. And again, like golf, the lower the P/E ratio a company has, the better an investment the metric is saying it is."
  },
  {
    title: "What do you mean by book value?",
    desc: "Book value is a company's equity value as reported in its financial statements. The book value figure is typically viewed in relation to the company's stock value (market capitalization) and is determined by taking the total value of a company's assets and subtracting any of the liabilities the company still owes."
  },
  {
    title: "What Is the Dividend Yield?",
    desc: "The dividend yield, expressed as a percentage, is a financial ratio (dividend/price) that shows how much a company pays out in dividends each year relative to its stock price. It's important for investors to keep in mind that higher dividend yields do not always indicate attractive investment opportunities because the dividend yield of a stock may be elevated as a result of a declining stock price."
  },
  {
    title: "ROCE",
    desc: "Return on capital employed – sometimes referred to as the 'primary ratio' – is a financial ratio that is used to measure the profitability of a company and the efficiency with which it uses its capital. Put simply, it measures how good a business is at generating profits from capital."
  },
  {
    title: "What is a good ROCE ratio?",
    desc: "The general rule about ROCE is the higher the ratio, the better. That's because it is a measure of profitability. A ROCE of at least 20% is usually a good sign that the company is in a good financial position. But keep in mind that you shouldn't compare the ROCE ratios of companies in different industries."
  },
  {
    title: "ROE",
    desc: "Return on equity (ROE) is the measure of a company's net income divided by its shareholders' equity. ROE is a gauge of a corporation's profitability and how efficiently it generates those profits. The higher the ROE, the better a company is at converting its equity financing into profits."
  }, {
    title: "What is good ROE Ratio",
    desc: "15% to 20% will be good Return on Equity. While average ratios, as well as those considered “good” and “bad”, can vary substantially from sector to sector, a return on equity ratio of 15% to 20% is usually considered good. At 5%, the ratio would be considered low."
  },
  {
    title: "What is Face Value",
    desc: "As an investor, it is important to understand the key concept of the face value of shares and bonds. Whenever a publicly listed company issues its stocks through Initial Public Offering (IPOs), it fixes a price which is the face value. It is simply the price at which you purchase the shares of a particular company.                                                            Also known as the par value, face value is the value of the company as listed in its books and share certificates. It is fixed by the company, once it decides to issue its shares and bonds."
  },
  {
    title: "Understanding working of face value of shares and bonds",
    desc: "All companies issue shares and bonds at face value. There are no fixed criteria for fixing the face value of shares by a particular company. Typically, it is arbitrarily assigned by the company. Assigning face value is important from the company’s perspective as it helps the entity to calculate the accounting value of its shares. This value is then used in its balance sheet.                                                            The face value of the shares and bonds is clearly mentioned in the share/bond certificate. To know about the face value of shares, you are simply required to refer to your Demat Account. Knowing the face value of shares is the foremost step required, before you start trading in stocks."
  },
  {
    title: "Is higher face value good or bad?",
    desc: "If the face value of a company is higher, it means, it can pay higher dividends and this can get more of the investors with income-earning mindsets to invest in the company."
  },
  {
    title: "What is Mean by debt?",
    desc: "The debt or bond market is where loan assets are bought and sold. There's no single physical exchange for bonds. Transactions are mainly made between brokers, large institutions, or individual investors. The equity or stock market is where stocks are bought and sold."
  },
  {
    title: "What is Mean by debt free:",
    desc: "If a company has zero debt on its balance sheet, then it is known as a debt free company. Debt plays an important role in the present performance and future growth of any company."
  },
  {
    title: "What is mean by asset?",
    desc: "An asset is an economic resource which can be owned or controlled to return a profit, or a future benefit. In financial trading, the term asset relates to what is being exchanged on markets, such as stocks, bonds, currencies or commodities."
  },
  {
    title: "what is quarterly results of companies:",
    desc: "A quarterly report is a summary or a collection of a company's financial statements, such as balance sheets and income statements, issued every three months"
  },
 {
    title: "sales in quarterly report:",
    desc: "sales report, also known as a sales analysis report, is a comprehensive record of all the sales activity taking place within a company over a certain period of time. Essentially, it provides sales managers with an overview of all the sales processes and operations carried out by the business."
  },
 {
    title: "What Is an Expense?",
    desc: "An expense is the cost of operations that a company incurs to generate revenue. It is simply defined as the cost one is required to spend on obtaining something. As the popular saying goes, “it costs money to make money.          Common expenses include payments to suppliers, employee wages, factory leases, and equipment depreciation."
  },
 {
    title: "Operating profit ",
    desc: "Operating profit is the net income derived from a company's core operations. Put another way, it is the amount of money that a company has left over after meeting its operating costs (gross profit) but before paying its taxes.           Tax is a mandatory fee or financial charge levied by any government on an individual or an organization to collect revenue for public works providing the best facilities and infrastructure."
  },
 {
    title: "Net Profit",
    desc: "Net profit is the amount of money your business earns after deducting all operating, interest, and tax expenses over a given period of time. To arrive at this value, you need to know a company's gross profit. If the value of net profit is negative, then it is called net loss."
  },
 {
    title: "Earnings Per Share (EPS)",
    desc: "Earnings per share is used for evaluating the profitability of a company. It can simply be understood as the value of earnings per outstanding share of a company's common stock."
  },
 {
    title: "What are Earning per Share",
    desc: "To simply define what is EPS, we can say that it is the share of a company’s profit that is distributed to each share of stocks. Further, it is considered to be a significant financial parameter as it helps to gauge a company’s financial health. To elaborate, higher EPS reflects greater profitability from the company and its overall ventures."
  },
 {
    title: "eps formula",
    desc: "EPS = (Net Income − Preferred Dividends)/End-of-Period Common Shares Outstanding"
  },
 {
    title: "Compound annual growth rate",
    desc: "The compound annual growth rate (CAGR) is the rate of return that would be required for an investment to grow from its beginning balance to its ending balance, assuming the profits were reinvested at the end of each period of the investment's life span."
  },
 {
    title: "What is meant by equity capital?",
    desc: "The equity capital definition refers to capital that a company owns that is not tied to debt. This type of capital often involves investor money entering the company in exchange for shares."
  },
 
]
