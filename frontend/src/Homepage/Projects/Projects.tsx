import { motion } from 'framer-motion'
import Title from '../../components/Title'

function Projects() {
  return (
    <div className="bg-[var(--navbar-bg)] text-white flex flex-col items-center h-[100vh]" id="projects">
      <section className='pt-[100px] max-w-[1300px]'>
        <div>
          <Title title='My Projects' align='left'/>
        </div>

        <div className="flex justify-center items-center">
          <a href="#contact" className=''>
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

export default Projects
