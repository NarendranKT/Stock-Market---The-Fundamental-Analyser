import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

// {title, description, source, sourceUrl, imageUrl, publishedAt, index}

 const Card = ({title, content, source, url, image, publishedAt}) => {
   return (
    <div className="sm:w-[550px] md:h-[580px] w-full ">
        <div className=" p-[1px] rounded-[20px] border-white-100/20 border md:h-[560px] overflow-hidden ">
            <div className=" p-5 rounded-[20px] bg-black-100">
                <div className="relative w-full h-[250px]">
                    <img src={`${image}`} alt="stock" className="w-full h-full object-cover rounded-2xl border border-white/10"/>
                </div>
                
                <div className="mt-5 md:h-[600px] py-1 bg-black-100">
                       <h3 className="font-semibold text-white text-[24px] bg-black-100">{ title.split(" ").splice(0, 10).join(" ")}..</h3>
                    <div className="bg-black-100 flex items-center mt-2 justify-between ">
                        <p className="bg-black-100 text-secondary text-[15px] font-medium">Source : <span className="text-white tracking-wide bg-black-100"> <a className="bg-black-100" href={`${url}`} target="_blank">{source}</a></span></p>
                        <p className=" pr-10 text-secondary/50 font-medium text-[15px] bg-black-100">
                            {publishedAt.split("T")[0]}
                        </p>
                    </div>
                    <p className="mt-2 text-secondary text-[16px] bg-black-100">
                        {content.split(" ").splice(0, 25).join(" ")}...
                    </p>
                    <div className="mt-2 bg-black-100">
                        <a className="rounded-full border w-fit p-0.5 px-2 text-secondary border-secondary hover:bg-secondary hover:text-primary hover:border-primary bg-black-100" target="_blank" href={url}>view more</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
   );
 };
 
 export default Card;
 