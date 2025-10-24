import Styles from './navbar.module.css';
import { BiCode } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import { Link , animateScroll as scroll} from 'react-scroll';
import { useEffect, useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { navLinks } from '../../data/constants';
import type { NavbarType } from '../../data/types';


function Navbar({isOpen, setIsOpen}: NavbarType) {
  const [scrollUp, setScrollUp] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll():void {
       window.scrollY > 10 ? setScrollUp(true) : setScrollUp(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    
  }, [])

  return (
    <div className="flex justify-center w-full">
      <header className={`${Styles.header} flex items-center justify-between gap-[100px] fixed top-5 bg-[var(--navbar-bg)] text-[#E6E49F] py-1 xl:py-3 px-3 xl:px-10 rounded-xl hover:scale-105 transition-all z-100`}>
        <div className="flex items-center font-[Lobster] font-bold">
          <BiCode className='text-2xl font-bold'/>
          <span className={`${scrollUp ? 'text-4xl' : 'text-5xl'} max-md:text-3xl lg: xl: transition-all text-white`}>TA</span>
          <BiCodeAlt className='text-2xl font-bold'/>
        </div>

        <div className='flex relative items-center'>
          <nav className={`${Styles.navbar}`}>
            <ul className="hidden flex-col md:flex md:flex-row gap-7 xl:gap-8 text-[12px] md:text-sm">
              {navLinks.map((link, index) => (
                <Link to={`${link.id}`} spy={true} smooth={true} duration={500} key={index} className='flex items-center gap-1 justify-center cursor-pointer whitespace-nowrap hover:translate-y-[-4px] hover:scale-105 transition-all hover:font-bold'>
                  <svg xmlns="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E3E7D3"><path d={`${link.svgPath}`}/></svg> 
                  {link.title}
                </Link>
              ))}
            </ul>
          </nav>

          {isOpen && (
            <nav className={`${Styles.rNav} absolute  w-[200px] bg-[var(--navbar-bg)] right-0 top-12 rounded-2xl`}>
              <ul className="flex flex-col items-start">
                {navLinks.map((link, index) => (
                  <Link to={`${link.id}`} spy={true} smooth={true} duration={500} key={index} className='flex items-center gap-1 justify-center px-5 py-4 cursor-pointer whitespace-nowrap hover:translate-y-[-4px] hover:scale-105 transition-all hover:font-bold' onClick={() => setIsOpen(false)}>
                    <svg xmlns="" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E3E7D3"><path d={`${link.svgPath}`}/></svg> 
                    {link.title}
                  </Link>
                ))}
              </ul>
            </nav>
          )}

          <div className={`${Styles.navMenu} block md:hidden`} onClick={() => setIsOpen(!isOpen)}>
            <HiOutlineMenuAlt2 className='text-2xl'/>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
