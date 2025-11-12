import { FaCopyright } from "react-icons/fa6"

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex flex-col w-full text-[var(--navbar-bg)] px-4 py-4 min-h-[10vh] items-center justify-center font-bold">
      <p className="text-center">Built with TypeScript, ReactJs, Vite.js, TailwindCss, Framer Motion, and Vercel.</p>
      <p>Star this project on Github</p>
      <p className="flex items-center gap-2"><FaCopyright/> Frank Topzy {year}</p>
    </div>
  )
}

export default Footer
