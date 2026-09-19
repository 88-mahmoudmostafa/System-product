import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Clind.css'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {Aye} from '../Context'
import { useEffect } from 'react'


function Clind() {
  const {setAn,an,clear,profilter,deleted,updeteclind,save,cleind,setCleind,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()
  useEffect(()=>{
    clear()
  },[])
  return (
    <div className='clind'>
      {/* <div> */}
      {/* <div className='clin'> */}
        {/* title-clind */}
        <div className='cod'>
        <h2>العملاء</h2>
        <div className='lkg'>
          <Link to='/Km' className='nk' >الريسيه/</Link>
          <Link  className='nk  ak' >البيانات الاساسيه/</Link>
          <Link  className='nk  ak' >العملاء</Link>
        </div>
      </div>
          {/* login-clined */}
        <div className='ahmed'>
          <form onSubmit={save}>
             <div className='paks'>
               <div>
               <h4 className='tor br' style={{color:'blue'}}>+اضافه عميل</h4>
                </div>
             <div className='sc-clin'>
              <input placeholder='بحث عن عميل' type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <FaSearch className='clin-sc'/>      
              </div>
              </div>
         <Row className=" mod mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>اسم العميل</Form.Label>
          <Form.Control className='not' type="text" placeholder="اسم العميل"  value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>رقم الهاتف</Form.Label>
          <Form.Control className='not' type="number" placeholder=" رقم الهاتف"  value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>العنوان</Form.Label>
          <Form.Control className='not' type="text" placeholder="العنوان"  value={dis}  onChange={(e)=>setDis(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>الرصيد</Form.Label>
          <Form.Control className='not' type="number" placeholder="الرصيد"  value={price} onChange={(e)=>setPrice(e.target.value)} />
        </Form.Group>

           <Form.Group as={Col} controlId="formGridState">
          <Form.Label>الحاله</Form.Label>
          <Form.Select className='not'  value={ads} onChange={(e)=>setAds(e.target.value)}>
            <option>نشط</option>
            <option>غير نشط</option>
          </Form.Select>
        </Form.Group>    
        
      </Row>
      <div className='bsr'>
        <button className='btnd' type='Submit'><FaUser className='us'/>حفظ عميل</button>
        <button className='baker' type='button' onClick={clear}>الغاء X</button>
      </div>
      
        
           
      </form>
        </div>
        
          {/* table */}
        <div className='clcl'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>اسم العميل</th>
                <th>رقم الهاتف</th>
                <th>العنوان</th>
                <th>الرصيد</th>
                <th>الحاله</th>
                <th>الاجرات </th>
              </tr>
            </thead>
            <tbody className='moj'>
              {profilter.map((p,index)=>(
                <tr key={p.id}>
                  <td>{index+1}</td>
                <td>{p.name}</td>
                <td>{p.phone}</td>
                <td>{p.dis}</td>
                <td>{p.price}</td>
                <td>{p.ads}</td>
                <td className='work'>
                  <button className='ptn-work' onClick={()=>deleted(p.id)}>X</button>
                  <button className='ptn-work' onClick={()=>updeteclind(p)}>!</button>
                </td>
              </tr>
              ))}
            
            </tbody>
          </table>
        </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default Clind