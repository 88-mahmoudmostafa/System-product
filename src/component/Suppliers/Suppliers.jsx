import React, { Profiler, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../Clind/Clind.css'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './Suppliers.css'
import '../Clind/Clind.css'
import { Aye } from '../Context';


function Suppliers() {
    const {Id,clear,updetsupp,setSupp,supp,suppsave,suppdelete,suppfilter,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search1,setSearch1}=Aye()
  useEffect(()=>{
   clear()
  },[])
  return (
    <div className='suupp'>
          <div>
            {/* search */}
            <div className='cod'>
            <h2>الموردين</h2>
            <div className='lkg'>
              <Link to='/Km' className='nk' >الريسيه/</Link>
              <Link  className='nk ak' >البيانات الاساسيه/</Link>
              <Link  className='nk  ak' >الموردين</Link>
            </div>
            </div>
            {/* form */}
          <div className='ahmed'>
          <Form onSubmit={suppsave}>
        <div className='paks'>
            <div>
              <h4 className='tor' style={{color:'blue'}}>+اضافه موراد</h4>
            </div>
            <div className='sc-clin'>
          <input placeholder='بحث عن موراد' type='text' onClick={suppfilter} value={search1} onChange={(e)=>setSearch1(e.target.value)}/>
          <FaSearch className='clin-sc'/>
         
             </div>
           </div>
         <Row className="mod mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>اسم الموراد</Form.Label>
          <Form.Control className='not' type="text" placeholder="اسم موارد" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>رقم الهاتف</Form.Label>
          <Form.Control className='not' type="number" placeholder=" رقم الهاتف" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>البريد الاكترونى</Form.Label>
          <Form.Control className='not' type="email" placeholder="البريد الاكترونى" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
       
           <Form.Group as={Col} controlId="formGridState">
          <Form.Label>الحاله</Form.Label>
          <Form.Select className='not' value={ads} onChange={(e)=>setAds(e.target.value)}>
            <option>نشط</option>
            <option>غير نشط</option>
          </Form.Select>
        </Form.Group>    
        
          </Row>
          {/* save,updet */}
         <div className='bsr'>
        <button className='btnd' type='submit'><FaUser className='us'/>{Id?'تعديل':'حفظ موارد'}</button>
        <button className='baker'type='button' onClick={clear}>الغاء X</button>
        
      </div>   
      </Form>
        </div>
           {/* table */}
            <div className='clcl'>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>اسم الموراد</th>
                    <th>رقم الهاتف</th>
                    <th>البريد الاكترونى</th>
                    <th>الرصيد</th>
                    <th>الحاله</th>
                    <th>الاجرات </th>
                  </tr>
                </thead>
                <tbody className='moj'>
                  {suppfilter.map((p,index)=>(
                  <tr key={p.id}>
                    <td>{index+1}</td>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.phone}</td>
                    <td>{p.price}</td>
                    <td>{p.ads}</td>
                    <td className='work'>
                  <button className='ptn-work' onClick={()=>suppdelete(p.id)}>X</button>
                  <button className='ptn-work' onClick={()=>updetsupp(p)}>!</button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}

export default Suppliers