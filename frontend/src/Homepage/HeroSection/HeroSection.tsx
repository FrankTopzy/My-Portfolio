import { Link } from 'react-router-dom'
import frank from '../../assets/frank.jpg'
import Styles from './hero.module.css'
//import xLogo from '../../assets/icons8-x-color/icons8-x-48.png'
import gitHub from '../../assets/icons8-github-48.png'
import instaLogo from '../../assets/insta-logo/icons8-instagram-48.png'
import linkedIn from '../../assets/icons8-linkedin-color/icons8-linkedin-48.png'
import { FaXTwitter } from 'react-icons/fa6';
import TypedJs from '../../components/TypedJs'
import { motion } from 'framer-motion'


function HeroSection() {
  return (
    <div className="bg-black text-white flex justify-center pt-27 lg:pt-34" id='home'>
      <section className='pb-20 relative'>
        <div className='flex justify-center'>
          <img src={frank} alt="" className={`${Styles.blobImg} w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover`}/>
        </div>

        <div className='text-center mt-10'>
          <h1 className='flex flex-col text-sm md:text-lg'>
            Hey It's me 
            <span className={`${Styles.webkitText} text-3xl lg:text-5xl font-extrabold`}>Temitope Adeoye</span>
            a.k.a Frank Topzy
          </h1>

          <h2 className='text-xl mt-2'>I'm a <span className={`${Styles.fancyText} `}><TypedJs/></span></h2>
        </div>

        <div className='flex items-center justify-center mt-4 gap-3'>
          <Link to={''} className='hover:scale-110 hover:translate-y-[-5px] transition-all' target='blank'><img src={linkedIn} alt="" className='rounded-full max-sm:w-[40px] transition-all'/></Link>
          <Link to={''} className='bg-white p-1 rounded-full border-4 border-black hover:scale-110 hover:translate-y-[-5px] transition-all'><FaXTwitter className='text-black text-2xl md:text-3xl'/></Link>
          <Link to={''}><img src={gitHub} alt="" className='rounded-full max-sm:w-[40px] hover:scale-110 hover:translate-y-[-5px] transition-all'/></Link>
          <Link to={''}><img src={instaLogo} alt="" className='rounded-full hover:scale-110 hover:translate-y-[-5px] transition-all max-sm:w-[40px]'/></Link>
        </div>

        <div className="absolute bottom-4 w-full flex justify-center items-center">
          <a href="#about" className=''>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
