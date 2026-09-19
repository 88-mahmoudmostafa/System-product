import React from 'react'
import Navbar from './component/nav/Navbar'
import Home from './component/home/Home'
import Deta from './component/DATA/Data'
import Inventory from './component/inventory/Inventor'
import Purchases from './component/purchases/Purchases'
import Report from './component/reports/Reports'
import Sales from './component/Sales/Sala'
import User from './component/user/User'
import Setting from './component/setting/Setting'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Log from './component/login/Login'
import CLin from './component/Clind/Clind'
import Pro from './component/Product/Product'
import Unit from './component/Unit/Unit'
import Supp  from './component/Suppliers/Suppliers'
import Cat from './component/categories/Categors'
import Billl from './component/bill/Bill'
import Billll from './component/billpurch/billpurch'
import Kam from './component/km/Km'
import { Aye } from './component/Context'
import PP from './component/lp/LP'


function App() {
 const {islogin}=Aye()
  return (
    <>
    
        <Navbar/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Km' element={<Kam/>}/>
          <Route path='/LP' element={<PP/>}/>
          <Route path='/DD' element={<Deta/>}/>
          <Route path='/PU' element={<Purchases/>}/>
          <Route path='/SL' element={<Sales/>}/>
          <Route path='/IV' element={<Inventory/>}/>
          <Route path='/RE' element={<Report/>}/>
          <Route path='/Bill' element={<Billl/>}/>
          <Route path='/Billl' element={<Billll/>}/>
          <Route path='/US' element={<User/>}/>
          <Route path='/ST' element={<Setting/>}/>
          <Route path='/CL' element={<CLin/>}/>
          <Route path='/PR' element={<Pro/>}/>
          <Route path='/UN' element={<Unit/>}/>
          <Route path='/SU' element={<Supp/>}/>
          <Route path='/Set' element={<Setting/>}/>
          <Route path='/CA' element={<Cat/>}/>
          <Route path='/C' element={<Log/>}/>
          
      
        </Routes>

    </>
   
      
      
    
  )
}

export default App