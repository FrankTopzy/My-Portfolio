import { motion } from 'framer-motion'

function Projects() {
  return (
    <div className="bg-[var(--navbar-bg)] text-white flex flex-col h-[70vh]" id="projects">
      <section>

        <div className="absolute w-full flex justify-center items-center">
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
