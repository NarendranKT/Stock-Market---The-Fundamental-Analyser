import { Link } from "react-router-dom";
import { hero1 } from "../assets";
import { styles } from "../style";
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const Hero = () => {
  return (
    <>
    <div className="h-full w-full">
        <img
          src={hero1}
          alt="stockmarket"
          className="lg:h-[650px] h-[650px] w-full overflow-hidden object-cover object-no-repeat brightness-50"
        />
      </div>

      <motion.div initial='hidden'whileInView={'show'} viewport={{ once:true,amount: 0.25 }} variants={staggerContainer()} className="w-full">
        
        <motion.div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} variants={fadeIn('left', 'tween', 0.1, 1)}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* round */}
          <div className='w-5 h-5 rounded-full bg-secondary' />
          {/* Line attacted to the round */}
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Stock Market Analysis
          </h1>
          <p className={`${styles.heroSubText}`}>
            Want to learn about market?
          </p>

          <div className="mt-10 md:flex justify-center items-center">
            <Link to='/learn' className="p-2 border hover:bg-white hover:text-primary font-medium">
              Learn more
            </Link>
          </div>
        </div>
      </motion.div>
            
      </motion.div>

      <div className='absolute top-[550px] w-full flex justify-center items-center my-auto'>
        <a href="#news">
          <div className='w-[30px] h-[64px] rounded-3xl border-[3px] border-white flex justify-center items-start p-2'>
            
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{duration:1.5, repeat: Infinity, repeatType: 'loop'}}
              className='w-2 h-2 bg-white rounded-full mb-1' />

          </div>
        </a>
      </div>
    </>
  );
};

export default Hero;
