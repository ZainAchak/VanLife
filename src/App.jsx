import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VansList from './pages/Vans/VansList'

import "./server"
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Host'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './pages/Host/HostLayout'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='vans' element={<VansList/>}/>
          <Route path='vans/:id' element={<VanDetail/>}/>
          
          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
