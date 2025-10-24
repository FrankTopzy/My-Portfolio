import Title from "../../components/Title"
import VerticalTimelin from "../../components/VerticalTimelin"
import { motion } from 'framer-motion'


function Experience() {
  return (
    <div className="bg-black text-white flex flex-col items-center" id="experience">
      <section className="pt-[100px] lg:px-[200px] px-10 pb-10 max-w-[1300px]">
        <Title title="Work Experience" align="left"/>
        <VerticalTimelin/>

        <div className="flex justify-center items-center">
          <a href="#projects" className=''>
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

export default Experience
