import React from 'react'
 import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Categors.css'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useEffect } from 'react';
import '../Clind/Clind.css'
import { Aye } from '../Context';

function Categors() {
     const {setCat,cat,catdelete,catfilter,catsave,updetecat,price2,setPrice2,clear,email,Id,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search4,setSearch4}=Aye()
useEffect(()=>{
  clear()
},[])
  return (
    <div className='cat'>
      {/* categotes-title */}
      
        <div className='cat-ti'>
        <h2>الفئاه</h2>
        <div className='cat-li'>
          <Link to='/Km' className='nk' >الريسيه/</Link>
          <Link  className='nk' >البيانات الاساسيه/</Link>
          <Link  className='nk  ak' >الفئاه</Link>
        </div>
        </div>
        {/* form */}
          <div className='ahmed'>
          <form onSubmit={catsave}>
              <div className='paks'>
            <div>
              <h4 className='tor'>+اضافه فئاه</h4>
            </div>
            <div className='sc-clin'>
          <input placeholder='بحث عن فئاه' type='text' value={search4} onChange={(e)=>setSearch4(e.target.value)}/>
          <FaSearch className='clin-sc'/>
         
             </div>
           </div>
         <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>اسم الفئاه</Form.Label>
          <Form.Control className='not' type="text" placeholder="اسم الفئاه" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>       
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>الوصف</Form.Label>
          <Form.Control className='not' type="text" placeholder="الوصف" value={text} onChange={(e)=>setText(e.target.value)}/>
        </Form.Group>
       
          
        
      </Row>
      <div className='bsr'>
        <button className='btnd' type='submit'><FaUser className='us'/>{Id?'تعديل':'اضافه'}</button>
        <button className='baker' onClick={clear}>الغاءX</button>
      </div>
           
      </form>
        </div>
      {/* table */}
        <div className='clcl'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>اسم الفئاه</th>
                <th>الوصف</th>
                <th>الاجرات </th>
              </tr>
            </thead>
            <tbody className='moj'>
              {catfilter.map((p,index)=>(
              <tr key={p.id}>
                <td>{index+1}</td>
                <td>{p.name}</td>
                <td>{p.text}</td>
                <td className='work'>
                  <button className='ptn-work' onClick={()=>catdelete(p.id)}>X</button>
                  <button className='ptn-work' onClick={()=>updetecat(p)}>!</button>
                </td>
        
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  )
}

export default Categors