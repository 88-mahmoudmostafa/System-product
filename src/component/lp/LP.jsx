import React, { useState } from 'react'
import { Aye } from '../Context'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

import './Lp.css'
function LP() {
 
  const {pass,setPass,saveLp,setIsconst,is,setIs,textt }=Aye()
  const task=()=>{
  setIs(!is)
}

  return (
    <div className='lps'>
        <h1>النصر لتجاره</h1>
        <form className='lps-fo' onSubmit={saveLp}>
          <div className='bt'>
          <input placeholder='password' type={is?'text':'password'} value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <p onClick={task}>{is?<FaEye/>:<FaEyeSlash/>}</p>
          </div>
          <div className='mozq'>
          <button type='submit'>تسجيل</button>
          <button type='button' onClick={textt}>تسجيل خروج</button>
        </div>
        </form>
        </div>
  )
}

export default LP