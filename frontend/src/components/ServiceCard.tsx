//import React from 'react'
import Tilt  from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import frank from '../assets/frank.jpg'
//import { fadeIn, textVariant } from '../utils/motion';

type ServiceCardPropsType = {
  src: string;
  progLang: string;
}

function ServiceCard({src, progLang} : ServiceCardPropsType) {
  return (
    <Tilt className="w-[200px]">
      <motion.div className="w-full bg-[#E6E49F] text-black green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className='flex justify-center items-center flex-col gap-10 py-6'>
          <img src={src} width={70}/>
          <h3 className='font-bold text-[20px]'>{progLang}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default ServiceCard