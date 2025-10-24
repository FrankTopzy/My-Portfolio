import { useState } from "react"
import FollowCursor from "./components/Cursor"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Homepage/Home"


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Home/>
      <Footer/>
      <FollowCursor/>
    </>
  )
}

export default App
