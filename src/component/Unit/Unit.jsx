import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Clind/Clind.css'
import './Unit.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Aye } from '../Context';
function Unit() {
        const {Id,setUnited,united,unitdelete,unitedsave,unitfilter,updeteunit,price2,setPrice2,clear,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search3,setSearch3}=Aye()
   useEffect(()=>{
      clear()
   },[])
  return (
<div className='Unt'>
           {/* title */}
        <div className='cod'>
        <h2>وحدات القياس</h2>
        <div className='lkg'>
          <Link to='/Km' className='nk' >الريسيه/</Link>
          <Link  className='nk ak' >البيانات الاساسيه/</Link>
          <Link  className='nk  ak' >الواحدات</Link>
        </div>
        </div>
         {/* form */}
          <div className='ahmed'>
          <form onSubmit={unitedsave}>
           <div className='paks'>
            <div>
              <h4 className='tor'>+اضافه وحده</h4>
            </div>
            <div className='sc-clin'>
          <input placeholder='بحث عن وحده' type='text' value={search3} onChange={(e)=>setSearch3(e.target.value)}/>
          <FaSearch className='clin-sc'/>
         
             </div>
           </div>
         <Row className="mod mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>اسم الوحده</Form.Label>
          <Form.Control className='not' type="text" placeholder="اسم الوحده" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>الرمز</Form.Label>
          <Form.Control className='not' type="text" placeholder=" الرمز" value={ads} onChange={(e)=>setAds(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>الوصف</Form.Label>
          <Form.Control className='not' type="text" placeholder="الوصف" value={Text} onChange={(e)=>setText(e.target.value)} />
        </Form.Group>
     
      </Row>
      <div className='bsr'>
        <button className='btnd'><FaUser className='us'type='submit'/>{Id?'تعديل':'اضافه واحده'}</button>
        <button className='baker'type='button' onClick={clear}>الغاء X</button>
      </div>
    
        
           
      </form>
        </div>
           {/* table */}
        <div className='clcl'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>اسم الواحدات</th>
                <th>الرمز</th>
                <th>الوصف</th>
                <th>الاجرات </th>
              </tr>
            </thead>
            <tbody className='moj'>
              {unitfilter.map((p,index)=>(
              <tr key={p.id}>
                <td>{index+1}</td>
                <td>{p.name}</td>
                <td>{p.ads}</td>
                <td>{p.text}</td>
                <td className='work'>
                  <button className='ptn-work'onClick={()=>unitdelete(p.id)}>X</button>
                  <button className='ptn-work' onClick={()=>updeteunit(p)}>!</button>
                </td>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    
  )
}

export default Unit