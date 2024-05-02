export const fetchLatestNews = async () => {
    try {
        let url = `https://newsdata.io/api/1/news?apikey=pub_416177c8dd037ac63282fc3deb970087dd853&country=in&category=business&language=en,ta&timezone=Asia/Kolkata&image=1`;

        const response = await fetch(url);
        const resJson = await response.json();
        let news1 = await resJson.results;
        let page = await resJson.nextPage;

        let news2 = [];
        for (let i = 0; i < 10; i++){
            if (!page) break;

            let url = `https://newsdata.io/api/1/news?apikey=pub_416177c8dd037ac63282fc3deb970087dd853&country=in&category=business&language=en,ta&timezone=Asia/Kolkata&image=1&page=${page}`;
            const response = await fetch(url);
            const resJson = await response.json();
            const newNews = await resJson.results;
            page = await resJson.nextPage;
            news2.push(...newNews)
            // console.log(page);
            // console.log(news2);
        }
        console.log(news1);
        const allNews = await [];
        allNews.push(...news1, ...news2);
        
        let newPosts = await allNews.map((post) => (
            {
                title: post.title,
                description: post.description,
                source: post.source_id,
                sourceUrl: post.link,
                imageUrl: post.image_url,
                publishedAt: new Date(post.pubDate).toISOString()
            }
        ));
        newPosts = await newPosts.filter((post) => (post.title && post.description && post.source && post.imageUrl && post.sourceUrl && post.publishedAt));


        return await newPosts;

    } catch (error) {
        console.log(error.message);
    }
}

const paginatedNews = async (page) => {
    let allNews = [];
    let url = `https://newsdata.io/api/1/news?apikey=pub_416177c8dd037ac63282fc3deb970087dd853&country=in&category=business&language=en,ta&timezone=Asia/Kolkata&image=1&page=${page}`;

    const response = await fetch(url);
    const resJson = await response.json();
    const news = await resJson.results;
    let pageid = await resJson.nextPage;
    allNews.push(...news);

    
    
    return allNews;
}