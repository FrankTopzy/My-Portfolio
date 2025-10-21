import ServiceCard from "../../components/ServiceCard"
import Title from "../../components/Title"
import icons from '../../assets/icons8-twitter-50.png'
//import { motion } from 'framer-motion'


function AboutMeSection() {
  return (
    <div className="bg-[var(--navbar-bg)] text-white flex pt-[100px] h-[70vh] py-[32px]" id='about'>
      <div 
        className="px-[130px]"
      >
        <Title title="About Me" align="left"/>

        <div>
          <p>
            I am a Computer Science student at Federal University of Agriculture, Abeokuta  with over 1 year plus of experience as a Frontend Web Developer. I blend technical expertise with security knowledge to craft well-rounded web applications. I am looking to join a company that values innovation, collaboration, and continuous learning and am confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology. Outside of coding, I am a Melomaniac and a Forex Trader. I continuously seek to enhance my skills and stay updated with the latest industry technologies.
          </p>
        </div>

        <div>
          <div>{<ServiceCard title="css" icon={icons}/>}</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection
