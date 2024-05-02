import Newsapi from 'newsapi';

export const fetchNewsApi = async (req, res) => {
    try {
    const date = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
    // const datenow = date.toJSON().split('T')[0];
    
        
    const newsapi = new Newsapi('7dae6dd00bf440088f1fe1c73ab606ea');
    const posts = await newsapi.v2.topHeadlines({
        category: 'business',
        language: 'en',
        country: 'in',
        // from: datenow,
    }).then(response => {
        return response.articles;
    }).catch(error=>console.log(error.message))

    let newPosts = posts.map((post)=> (
        {
            title: post.title,
            description: post.content,
            source: post.source.name,
            sourceUrl: post.url,
            imageUrl: post.urlToImage,
            publishedAt: post.publishedAt
        }
    ))
        
    newPosts = newPosts.filter((post) => (post.title && post.description && post.source && post.imageUrl && post.sourceUrl));
    
    // const response = await saveToBase(newPosts);
    // res.json({
    //     status: 'success',
    //     data: response
    // })
    return newPosts;
    
   } catch (error) {
        res.json({
            status: 'failed',
           error: error.message
        })
   }
}