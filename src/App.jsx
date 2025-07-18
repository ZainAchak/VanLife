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
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostSingleVanDetail from './pages/Host/HostSingleVanDetail'
import HostSingleVanPricing from './pages/Host/HostSingleVanPricing'
import HostSingleVanPhotos from './pages/Host/HostSingleVanPhotos'

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
            <Route path='vans' element={<HostVans/>}/>
            
            <Route path='vans/:id' element={<HostVanDetail/>}>
              <Route index element={<HostSingleVanDetail/>}/>
              <Route path='pricing' element={<HostSingleVanPricing/>}/>
              <Route path='photos' element={<HostSingleVanPhotos/>}/>
            </Route>
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
