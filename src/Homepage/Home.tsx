import HeroSection from './HeroSection/HeroSection'
import AboutMeSection from './AboutMe/AboutMeSection'
import Projects from './Projects/Projects'
import Experience from './WorkExperience/Experience'
import ContactMe from './Contact/ContactMe'

function Home() {
  return (
    <>
      <HeroSection/>
      <AboutMeSection/>
      <Experience/>
      <Projects/>
      <ContactMe/>
    </>
  )
}

export default Home
