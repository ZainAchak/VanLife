import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VansList from './pages/VansList'

import "./server"
import VanDetail from './pages/VanDetail'
import Header from './pages/Header'

export default function App() {
  return(
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/vans' element={<VansList/>}/>
          <Route path='/vans/:id' element={<VanDetail/>}/>
        </Routes>
      </main>
      <footer>
        <p>&copy; 2025 VanLife</p>
      </footer>
    </BrowserRouter>
  )
}
