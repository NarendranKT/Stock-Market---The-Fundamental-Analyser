import { styles } from "../style";
import {motion} from 'framer-motion'
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import { useEffect, useState } from "react";
import axios from 'axios';
import { NEWSAPI } from "../apis/apiUrlHandler";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const AllNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(50);

    useEffect(() => {
        setLoading(true);
        axios.get(`${NEWSAPI}/news`)
            .then((response) => {
                setNews(response.data.data);
            })
            .catch((err) => console.log(err))
        setLoading(false);
        }, [])
        
    if (news.length > 0) {
        news.sort((a, b) => (new Date(b.publishedAt) - new Date(a.publishedAt)));
    }
    
        
    // Pagination - Get current post
    const indexOfLastCard = currentPage * newsPerPage;
    const indexOfFirstCard = indexOfLastCard - newsPerPage;
    const currentNews = news.slice(indexOfFirstCard, indexOfLastCard);  
    
    // Change page
    const paginate = (number)=>{
        setCurrentPage(number);
    }
    return (
      <div className="bg-primary mt-10 flex flex-col flex-wrap">
            <motion.div variants={textVariant()}> 
                <p className={`${styles.sectionSubText}`}>market and business news | Global</p>
                <h1 className={`${styles.sectionHeadText}`}>News</h1>
            </motion.div>

            
            <div className="flex flex-wrap gap-7 mt-5">
                {
                    loading || news.length === 0 ?
                    <>
                        <div className="w-full text-center flex items-center justify-center">
                            <div
                            className="inline-block h-9 w-9 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite] text-center"
                            role="status">
                            </div>
                            <h2 className="text-[24px] ps-2 tracking-wide">Loading...</h2>
                        </div>
                    </>               
                :
                currentNews.map((newsrec, index) => (
                    <div key={index} >
                        <Card key={index} title={newsrec.title} source={newsrec.source} url={newsrec.sourceUrl} content={newsrec.description} image={newsrec.imageUrl} publishedAt={newsrec.publishedAt} />
                    </div>
                ))
            }
            {!loading && news.length !== 0 && <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate}/>}
            </div>
            
        </div>
  );
};

export default SectionWrapper(AllNews, "news");






