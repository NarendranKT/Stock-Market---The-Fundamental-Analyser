import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'


const Nav = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 bg-black fixed top-0 z-20 border-b border-secondary/20`}
    >

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt="logo" className='w-14 h-14' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Stock Market&nbsp;<span className=' lg:block hidden'>| Analysis</span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {
            navLinks.map((navlink) => (
              <li key={navlink.id}
              className={`${active === navlink.title? "text-secondary":"text-white"} hover:text-secondary text-[18px] font-medium cursor-pointer`}>
                <Link to={`/${navlink.id}`}
                  onClick={() => {
                    setActive(navlink.title)
                  }}
                >
                  {navlink.title}
                </Link>
              </li>
            ))
          }
        </ul>
        

        {/* MOBILE VIEW */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>{setToggle(!toggle)}}
          />

          <div className={`${!toggle?'hidden' : 'flex'} p-6 absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl border bg-black `}>

            <ul className='list-none flex sm:hidden flex-col justify-end items-start gap-4'>
              {
                navLinks.map((navlink) => (
                  <li key={navlink.id}
                  className={`${active === navlink.title? "text-white":"text-secondary"} hover:text-white text-[16px] font-medium cursor-pointer font-poppins `}>
                    <Link href={`/${navlink.id}`}
                      onClick={() => {
                        setToggle(!toggle)
                        setActive(navlink.title)
                      }}
                    >
                      {navlink.title}
                    </Link>
                  </li>
                ))
              }
            </ul>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Nav;