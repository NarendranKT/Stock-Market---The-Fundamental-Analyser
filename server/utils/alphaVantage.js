export const fetchAlphaNews = async (req, res) => {
    try {
        const date = new Date();
        const datenow = date.toJSON().split('T')[0].split('-').join('');
        const alphavantageurl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&time_from=${datenow}T0000&sort=LATEST&apikey=APND4NG8IZY68VE8`;

        const alphavantage = await fetch(alphavantageurl);
    
        if(!alphavantage.ok){
            throw new Error("Something went wrong");
        }
        const alphaposts = await alphavantage.json();
        const posts = await alphaposts.feed;

        //> alphaposts -> feed -> title, url(sourceurl), time_published, summary, banner_image, source,

        let newPosts = posts.map((post) => (
            {
                title: post.title,
                description: post.summary,
                source: post.source,
                sourceUrl: post.url,
                imageUrl: post.banner_image,
                publishedAt: parseIcsDate(post.time_published).toISOString()
            }
        ));

        newPosts = newPosts.filter((post) => (post.title && post.description && post.source && post.imageUrl && post.sourceUrl));
    
    // const response = await saveToBase(newPosts);
    return newPosts;
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


function parseIcsDate(icsDate) {
  if (!/^[0-9]{8}T[0-9]{6}$/.test(icsDate))
    throw new Error("ICS Date is wrongly formatted: " + icsDate);
  
  var year   = icsDate.substr(0, 4);
  var month  = icsDate.substr(4, 2);
  var day    = icsDate.substr(6, 2);
  
  var hour   = icsDate.substr(9, 2);
  var minute = icsDate.substr(11, 2);
  var second = icsDate.substr(13, 2);
  
  return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
}


// export const fetchTimeSeriesData = async (req, res) => {
//     try {
//         var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=APND4NG8IZY68VE8';

//         const alphavantage = await fetch(url);
        
//         if(!alphavantage.ok){
//             throw new Error("Something went wrong");
//         }

//         const data = await alphavantage.json();
//         const series = await data["Time Series (Daily)"];

//         return data;

//     } catch (error) {
//         res.json(error.message);
//     }
// }