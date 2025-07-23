// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import {  RouterProvider, 
          createBrowserRouter, 
          createRoutesFromElements, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VansList, {loader as vansListLoader} from './pages/Vans/VansList'

import "./server"
import VanDetail, {loader as HostVanDetailLoader} from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Host'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './pages/Host/HostLayout'
import HostVans, {loader as hostVansLoader} from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostSingleVanDetail from './pages/Host/HostSingleVanDetail'
import HostSingleVanPricing from './pages/Host/HostSingleVanPricing'
import HostSingleVanPhotos from './pages/Host/HostSingleVanPhotos'
import NotFound404 from './pages/NotFound404'
import BrokenPage from './pages/BrokenPage'
import Login from './pages/Login'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='login' element={<Login/>}/>
    <Route  path='vans' 
            loader={vansListLoader} 
            element={<VansList/>}
            errorElement={<BrokenPage/>}/>
    <Route path='vans/:id' loader={HostVanDetailLoader} element={<VanDetail/>}/>
    
    <Route path='host' element={<HostLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='income' element={<Income/>}/>
      <Route path='reviews' element={<Reviews/>}/>
      <Route  path='vans' 
              loader={hostVansLoader} 
              errorElement={<BrokenPage/>} 
              element={<HostVans/> }/>
      
      <Route path='vans/:id' element={<HostVanDetail/>}>
        <Route index element={<HostSingleVanDetail/>}/>
        <Route path='pricing' element={<HostSingleVanPricing/>}/>
        <Route path='photos' element={<HostSingleVanPhotos/>}/>
      </Route>
    </Route>
    <Route path='*' element={<NotFound404/>}/>
  </Route>
))

export default function App() {
  return(
    <RouterProvider router={router}/>
  )
}

{/* <BrowserRouter>
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
        <Route path='*' element={<NotFound404/>}/>
      </Route>
    </Routes>
</BrowserRouter> */}
