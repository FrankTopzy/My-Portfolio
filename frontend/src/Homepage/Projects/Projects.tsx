import { motion } from 'framer-motion'
import Title from '../../components/Title'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/constants'

function Projects() {
  return (
    <div className="bg-[var(--navbar-bg)] text-white flex flex-col items-center" id="projects">
      <section className='pt-[100px] pb-[40px] max-w-[1350px]'>
        <div className='px-[30px] sm:px-[90px] xl:px-[200px]'>
          <Title title='My Projects' align='left'/>
          <p>Following projects showcase my skills and experience through examples of my work. Each project is briefly described with links to code repositories in it.</p>

          <div className='my-[50px] w-full items-center gap-6 flex flex-wrap'>
            {projects.map((project) => (
              <ProjectCard projectTitle={project.title} projectInfo={project.projectInfo} techStacks={project.techStack} projectLink={project.liveLink} githubLink={project.sourceCode} projectImg={project.imgSrc}/>
            ))}
          </div>
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
