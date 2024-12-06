import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './ScreenComponents/Home'
import { About } from './ScreenComponents/About'
import { Contact} from './ScreenComponents/Contact'
import { Navbar } from './Component/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'  element={<Home />} ></Route>
          <Route path='/about'  element={<About />} ></Route>
          <Route path='/contact'  element={<Contact />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
