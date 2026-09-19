import Form from 'react-bootstrap/Form';
import { FaUser } from "react-icons/fa";
import './Login.css'
import { Link } from 'react-router-dom';
import { useState,useEffect, useRef } from 'react';
import { Aye } from '../Context';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BsNutFill } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CgPushRight } from "react-icons/cg";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";





function Create() {
      const {is,setIs,saveLogin,pass,setPass,setAn,an,savebill,winprint,dr,setDr,clinname,setClinName,searchs,setSearchs,productfilter,show,setShow,time,setTime,setSearched,searched,total,tol,sal,setSal,updetesal,saldelete,salfilter,profilter,salsave,dat,setDat,mov,setMov,pars,setPars,km,setKm,un,setUn,price2,setPrice2,clear,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()

  const tasks=()=>{
    setIs(!is)
  }
  
  return (
<div dir="" className="container  ">
  <div className="kl row g-0 shadow-lg rounded-4 " >
     {/* الناحية الشمال - الجزء البرتقالي */}
    <div className="ns jy col-md-5 text-white  text-center d-flex flex-column justify-content-center align-items-center" 
         style={{background: 'linear-gradient(135deg, #e29a2d 0%, #f13538 100%)'}}>
      
      <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width:'120px', height:'120px'}}>
        <div className="bg-white rounded-circle  mm-clic" style={{width:'90px', height:'90px'}}></div>
      </div>

      <h4 className="fw-bold">النصر لتجاره</h4>
      {/* <p className="spsp"> */}
   {/* أنشئ حسابك الآن وابدأ رحلتك في عالم التسوق واستمتع بعروضنا المميز      </p> */}
<Link to='/C' className='LL'>لديك حساب بالفعل <CgPushRight className='i-cont'/></Link>

     
    </div>

    {/* الناحية اليمين - فورم الدخول */}
    <div className="ns no col-md-7 ">
        <div className='popopo'>
    <div  className='mama'>
            
    <h5 className="vvv  fw-bold">النصر لتجاره<span className="  bg-primary text-white  rounded-2 ">🏪</span> </h5>
            
   </div>


    <Form className='jj'onSubmit={saveLogin} >
    
      <div className='input-selt'>
          {/* name */}
        <div className='box'>
        <input  className='open' value={name} onChange={(e)=>setName(e.target.value)} id='name' type='text' placeholder=''/>
        <label className='lobs' htmlFor='name'>الاسم بالكامل</label>
        <p className='p-i'><FaRegUser className='toned'/></p>
        </div>
        {/* phone */}
        <div className='box'>
        <input className='open openss' dir='auto' value={phone} onChange={(e)=>setPhone(e.target.value)} type="number"   placeholder="" />
       
        <label  className='lobs loobs' for='phones'>رقم الهاتف</label>
      <DropdownButton id="dropdown-item-button" title=" " className='f-c' >
      <Dropdown.ItemText className='i-tem'>مصر(01+)</Dropdown.ItemText>
      <Dropdown.Item className='i-tem' as="button">السعوديه (923+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الكويت  (19+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الامارات (23+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الامارات (11+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">ليبا (1312+)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">قطر (11)</Dropdown.Item>
      <Dropdown.Item className='i-tem' as="button">الاردن (0202)</Dropdown.Item>
    </DropdownButton>
         
       </div>
       {/* password */}
       <div className='box'>
        
        <input className='open'  value={pass} onChange={(e)=>setPass(e.target.value)}   placeholder='' id='passed'type={is?'text':'password'}/>
        <label className='lobs' for='passed'>كلمه المرور</label>
        <p className='p-i'><RiLockPasswordLine/></p>
        <p className='p-2' onClick={tasks}>{is?<FaEye/>:<FaEyeSlash/>}</p>
        {/* <p className='task' onClick={task}>{nour?<IoEye/>:<IoEyeOff/>}</p> */}
     
      </div>
        <div className='byo'>
      <button type='submit' className='pans'>  انشاء حساب <FaUserPlus className='ton'/></button>

      <div className='hrrr'>
           <hr/><p>او</p><hr/>
      </div>
    
      <button className='ggg'> التسجيل  بستخدام جوجل<FaGoogle className='tonn'/></button>
        </div> 
      </div>
    
        </Form>
        
           </div> 
     
    </div>
   
  </div>
</div>
  );

}
export default Create;