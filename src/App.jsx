import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Vans from './pages/Vans'
import About from './pages/About'

export default function App() {
  return(
    <BrowserRouter>
      <nav>
        <h1>#VANLIFE</h1>
        <div>
          <Link to='/about'>About</Link>
          <Link to='/'>Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Vans/>}/>
        <Route path='/home' element={<Vans/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}
