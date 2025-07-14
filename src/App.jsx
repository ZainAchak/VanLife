import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VansList from './pages/VansList'

import "./server"

export default function App() {
  return(
    <BrowserRouter>
      <header>
        <Link className='site-logo' to='/'>#VANLIFE</Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vans' element={<VansList/>}/>
      </Routes>
      <footer>
        <p>&copy; 2025 VanLife</p>
      </footer>
    </BrowserRouter>
  )
}
