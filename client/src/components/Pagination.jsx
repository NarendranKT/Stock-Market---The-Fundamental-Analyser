import { useState } from "react";
import {motion} from 'framer-motion'

const Pagination = ({ newsPerPage, totalNews, paginate }) => {
    const [active, setActive] = useState(1);
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumber.push(i);
    }

  return (
      <motion.div className="flex flex-wrap gap-3 w-full justify-between items-center text-[18px]">
        <a href="#news">
            <button className={`text-secondary border-secondary border-2 p-0.5 px-2 rounded-full font-medium hover:text-primary hover:bg-secondary cursor-pointer flex disabled:text-gray-600 disabled:border-gray-600 disabled:hover:bg-primary`} disabled={active === 1}
              onClick={() => {
                  setActive(active > 0 && active - 1)
                  paginate( active > 0 && active - 1)
              }}
            >
                {"< "}Prev
            </button>
        </a>
        <ul className="list-none flex flex-wrap items-center justify-center gap-2 md:w-[800px] max-md:hidden">
            {
                  pageNumber.map(number => (
                    <li key={number}>
                        <a key={number} href="#news" className={`font-medium ${number !== active && 'text-secondary'} border-secondary rounded-full px-3 py-1 text-center border-2 hover:text-primary hover:bg-secondary cursor-pointer mx-1 ${number === active && 'bg-secondary text-primary'}`}
                        onClick={() => {
                            setActive(number);
                            paginate(number)
                        }}
                        >
                          {number}  
                        </a>
                    </li>
                ))
            }
        </ul>
          <a href="#news">
              <button className="text-secondary border-secondary border-2 p-0.5 px-2 rounded-full font-medium hover:text-primary hover:bg-secondary cursor-pointer disabled:text-gray-600 disabled:border-gray-600 disabled:hover:bg-primary" disabled={active === pageNumber.length}
              onClick={() => {
                setActive(active > 0 && active + 1)
                paginate( active > 0 && active + 1)
            }}
            >
                Next {" >"}
            </button>
          </a>
      </motion.div>
  );
}

export default Pagination;
