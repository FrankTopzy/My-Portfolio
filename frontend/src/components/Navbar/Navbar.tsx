import Styles from './navbar.module.css';
import instaLogo from '../../assets/logo-instagram.svg'

function Navbar() {
  return (
    <div className="flex justify-center w-full">
      <header className={`${Styles.header} flex items-center fixed top-5 bg-[var(--navbar-bg)] text-[var(--text-color)] py-4 px-10 rounded-xl`}>
        <div className="mr-20">
          
          <span className="text-3xl">TA.</span>
        </div>

        <div className='flex items-center gap-10'>
          <nav>
            <ul className="flex gap-6">
              <li>Home</li>
              <li>About Frank</li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Contact Frank</li>
            </ul>
          </nav>

          <div>
            <img src={instaLogo} alt="" width={40} className='text-white'/>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
