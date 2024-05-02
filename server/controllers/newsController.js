import News from "../models/News.js";
import { fetchAlphaNews } from "../utils/alphaVantage.js";
import { gnews } from "../utils/gNews.js";
import { fetchNewsApi } from "../utils/newsApi.js";
import { fetchLatestNews } from "../utils/newsData.js";




export const fetchNews = async (req, res) => {
   
    try {
        // const newspost1 = await fetchAlphaNews(req, res);
        const newspost1 = await fetchNewsApi(req, res);
        const newspost2 = await fetchLatestNews();
        const newspost3 = await gnews();
        const newsposts = [...newspost1, ...newspost2, ...newspost3];
        const response = await saveToBase(newsposts);

        res.json({
            satus: 'Success',
            data: response
            
        })
    } catch (error) {
        console.log(error.message);
    }

}


// const fetchAlphaNews = async (req, res) => {
//     try {
//         const date = new Date();
//         const datenow = date.toJSON().split('T')[0].split('-').join('');
//         const alphavantageurl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&time_from=${datenow}T0000&sort=LATEST&apikey=APND4NG8IZY68VE8`;

//         const alphavantage = await fetch(alphavantageurl);
    
//         if(!alphavantage.ok){
//             throw new Error("Something went wrong");
//         }
//         const alphaposts = await alphavantage.json();
//         const posts = await alphaposts.feed;

//         //> alphaposts -> feed -> title, url(sourceurl), time_published, summary, banner_image, source,

//         let newPosts = posts.map((post) => (
//             {
//                 title: post.title,
//                 description: post.summary,
//                 source: post.source,
//                 sourceUrl: post.url,
//                 imageUrl: post.banner_image,
//                 publishedAt: post.time_published
//             }
//         ));

//         newPosts = newPosts.filter((post) => (post.title && post.description && post.source && post.imageUrl && post.sourceUrl));
    
//     const response = await saveToBase(newPosts);
//         return response;
        
//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         })
//     }
// }


// const fetchNewsApi = async (req, res) => {
//     try {
//     const date = new Date();
//     const datenow = date.toJSON().split('T')[0];
        
//     const newsapi = new Newsapi('7dae6dd00bf440088f1fe1c73ab606ea');
//     const posts = await newsapi.v2.topHeadlines({
//         category: 'business',
//         language: 'en',
//         country: 'in',
//         from: datenow
//     }).then(response => {
//         return response.articles;
//     }).catch(error=>console.log(error.message))

//     let newPosts = posts.map((post)=> (
//         {
//             title: post.title,
//             description: post.content,
//             source: post.source.name,
//             sourceUrl: post.url,
//             imageUrl: post.urlToImage,
//             publishedAt: post.publishedAt
//         }
//     ))
        
//     newPosts = newPosts.filter((post) => (post.title && post.description && post.source && post.imageUrl && post.sourceUrl));
    
//     const response = await saveToBase(newPosts);
//     // res.json({
//     //     status: 'success',
//     //     data: response
//     // })
//     return response;
    
//    } catch (error) {
//         res.json({
//             status: 'failed',
//            error: error.message
//         })
//    }
// }


const saveToBase = async (post) => {
    try {
        
        let news = await News.create(post);
        
        return news;
    } catch (error) {
        console.log(error.message);
    }
}


export const updateNews = async (req, res) => {
    try {
        // const records = await News.find();
        
        // for (var i = 0; i < records.length; i++){
        //     await News.updateOne({_id: records[i]._id}, {publishedAt: parseIcsDate(records[i].publishedAt)})
        // }

        // res.json(records);
        const start = new Date().setHours(0, 0, 0, 0)
        const records = await News.findOneAndDelete({ publishedAt: { $gte: start } });
        
        res.json({
            records
        })

    } catch (error) {
        console.log(error.message);
    }
}

function parseIcsDate(icsDate) {
  if (!/^[0-9]{8}T[0-9]{6}Z$/.test(icsDate))
    return new Date(icsDate).toISOString()
  
  var year   = icsDate.substr(0, 4);
  var month  = icsDate.substr(4, 2);
  var day    = icsDate.substr(6, 2);
  
  var hour   = icsDate.substr(9, 2);
  var minute = icsDate.substr(11, 2);
  var second = icsDate.substr(13, 2);
  
  return new Date(Date.UTC(year, month - 1, day, hour, minute, second)).toISOString();
}

export const getTodayNews = async (req, res) => {
    try {
        const start = new Date().setHours(0,0,0,0);
        const end = new Date().setHours(23, 59, 59, 999);
        
        const news = await News.find({ publishedAt: { $gte: start, $lt: end } });

        res.json({
            status: "success",
            data: news
        })
    } catch (error) {
        console.log(error.message);        
    }
}


export const getNews = async (req, res) => {
    const news = await News.find();

    res.json({
        status: "success",
        data: news
    })
}

