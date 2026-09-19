import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbBrandInfakt } from "react-icons/tb";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { MdInventory2 } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { PiUniteDuotone } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import {Link} from 'react-router-dom'


import './Data.css'
function Sales() {
  return (
    <div className='sals'>
      <h2>البانات الاساسيه</h2>
      <div className='sal-s'>
      
      <div className='joy  col-md-6 col-lg-3'>
        <FaTruck className='i-1'/>
        <h3>الموردين</h3>
        <p>اداره بيان الاموردين والامشتريات الخاصه بها</p>
        <Link to='/SU' className='lk'>عرض البيانات</Link>
      </div>
      <div className='joy  col-md-6 col-lg-3'>
        <FaUserFriends className='i-2'/>
        <h3>العملاء</h3>
        <p>اداره بيانات العملاء والتواصل معاهم</p>
         <Link to='/CL' className='lk'>عرض البيانات</Link>
      </div>
      <div className='joy  col-md-6 col-lg-3'>
        <AiFillProduct  className='i-3'/>
        <h3>المنتجات</h3>
         <p>اداره جميع انواع المنتجات والخدمات المتوفره</p>
          <Link to='/PR' className='lk'>عرض البيانات</Link>
 ,
      </div>
      
       <div className='joy  col-md-6 col-lg-3'>
        <IoMdSettings  className='i-4'/>
        <h3>الاعدادات</h3>
         <p>اداره  الاعدادات العامه والبيانات الاساسيه</p>
          <Link className='lk' to='/Set'>عرض البيانات</Link>
      </div>
       <div className='joy  col-md-6 col-lg-3'>
        <PiUniteDuotone  className='i-5'/>
        <h3>الفئات</h3>
         <p>اداره فئات المنتجات والخدمات العامه</p>
       <Link to='/CA' className='lk'>عرض البيانات</Link>
      </div>
      <div className='joy  col-md-6 col-lg-3'>
        <FaScaleBalanced  className='i-6'/>
        <h3>الواحدات</h3>
         <p>اداره وحدات القياس  القياسيه والشرعيه</p>
          <Link to='/UN' className='lk'>عرض البيانات</Link>
 
      </div>
      <div className='joy  col-md-6 col-lg-3'>
        <FaScaleBalanced  className='i-6'/>
        <h3>فواتير المبيعات</h3>
         <p>الفوتير السابقه</p>
          <Link to='/Bill' className='lk'>عرض الفواتير</Link>
 
      </div>
        <div className='joy  col-md-6  col-lg-3'>
        <FaScaleBalanced  className='i-6'/>
        <h3>فواتير المشتريات</h3>
         <p>الفوتير السابقه</p>
          <Link to='/Billl' className='lk'>عرض الفواتير</Link>
 
      </div>
      

      </div>
        


    </div>
  )
}

export default Sales