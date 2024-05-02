import { motion } from 'framer-motion';
import { styles } from '../style';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
    function HOC(props) {
        return (
            <div className='w-full bg-primary h-full'>
                <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView={'show'}
                onViewportEnter={'show'}
                animate={'animate'}
                viewport={{ amount: 0.01 , once:true}}
                className={`${styles.padding} max-w-[1350px] mx-auto relative z-0 bg-primary`}
            >
                <span className='hash-span' id={idName}>&nbsp;</span>
                    <Component {...props} />
            </motion.section>
            </div>
        )
  
};

export default SectionWrapper;
