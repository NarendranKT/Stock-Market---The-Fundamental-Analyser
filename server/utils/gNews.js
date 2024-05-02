export const gnews = async () => {
    try {

        let date = new Date().toISOString().split('T')[0];
        const url = `https://gnews.io/api/v4/top-headlines?category=business&apikey=f4d3e2453187ef400c942f9305dba484&country=in&lang=en&from=${date}T00:00:00Z`

        const res = await fetch(url);
        const news = await res.json();
        let newPosts = await news.articles.map((post) => (
            {
                title: post.title,
                description: post.description,
                source: post.source.name,
                sourceUrl: post.url,
                imageUrl: post.image,
                publishedAt: new Date(post.publishedAt).toISOString()
            }
        ));

        return newPosts;
    } catch (error) {
        console.log(error.message);
    }
}