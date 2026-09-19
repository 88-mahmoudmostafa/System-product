 import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './Product.css'
import '../Clind/Clind.css'
import { Aye } from '../Context';
function Product() {
      const {Id,un,dr,setDr,km,setKm,updeteproduct,price2,setPrice2,clear,product,setProduct,productdelete,productfilter,productsave,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search2,setSearch2}=Aye()
    useEffect(()=>{
      clear()
    },[])
  return (
    <div className='pro-st'>
      {/* title */}
      <div className='mpr'>
        <div className='cod'>
        <h2>المنتجات</h2>
        <div className='lkg'>
          <Link to='kM' className='nk' >الريسيه/</Link>
          <Link  className='nk ak' >البيانات الاساسيه/</Link>
          <Link  className='nk  ak' >المنتجات</Link>
        </div>
        </div>
        

        </div>
         {/* form */}
        <div className='ahmed'>
        <Form onSubmit={productsave}>
            <div className='paks'>
                      <div>
                        <button className='tor'>+اضافه منتج</button>
                      </div>
                      <div className='sc-clin'>
                    <input placeholder='بحث عن منتج' type='text' value={search2} onChange={(e)=>setSearch2(e.target.value)}/>
                    <FaSearch className='clin-sc'/>
                   
                       </div>
                     </div>
      <Row className="mod mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>اسم المنتج</Form.Label>
          <Form.Control className='not' type="text" placeholder="اسم المنتج" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
             <Form.Group as={Col} controlId="formGridState">
          <Form.Label>الفئه</Form.Label>
          <Form.Select className='not'value={text} onChange={(e)=>setText(e.target.value)} >
            <option>اختر الفئاه</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
          <Form.Label>وحدات القياس</Form.Label>
          <Form.Select className='not' value={ads} onChange={(e)=>setAds(e.target.value)}>
            <option>اختر الواحه</option>
            <option>...</option>
            <option>...ddddddd</option>
            <option>...dfghjkl;</option>
          </Form.Select>
        </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>سعر الشراء</Form.Label>
          <Form.Control className='not' type="number" placeholder="00.0" value={price} onChange={(e)=>setPrice(e.target.value)} />
        </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label>سعر البيع</Form.Label>
          <Form.Control className='not' type="number" placeholder="00.0" value={price2} onChange={(e)=>setPrice2(e.target.value)} />
        </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>الكميه</Form.Label>
          <Form.Control className='not' type="number" placeholder="0.00" value={km} onChange={(e)=>setKm(e.target.value)} />
          
        </Form.Group>
           <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>الخصم</Form.Label>
          <Form.Control className='not' type="number" placeholder="0.00" value={dis} onChange={(e)=>setDis(e.target.value)} />
          
        </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>التكاليف</Form.Label>
          <Form.Control className='not' type="number" placeholder="0.00" value={dr} onChange={(e)=>setDr(e.target.value)} />
          
        </Form.Group>
        
      </Row>
      <div className='bsr'>
            <button className='btnd' type='submit'>{Id?'تعديل':'حفظ'}</button>
            <button className='baker' onClick={clear}>الغاء X</button>
          </div>
          
      </Form>
          </div>
          {/* table */}
        <div className='clcl'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>اسم المنتج</th>
                <th>الفائه</th>
                <th>وحدات القياس</th>
                <th>سعر البيع</th>
                <th> سعر الشراء</th>
                <th>الكميه</th>
                <th>الخصم</th>
                <th>التكاليف</th>
                <th>الاجرات</th>
              </tr>
            </thead>
            <tbody className='moj'>
              {productfilter.map((p,index)=>(
              <tr key={p.id}>
                <td>{index+1}</td>
                <td>{p.name}</td>
                <td>{p.text}</td>
                <td>{p.ads}</td>
                <td>{p.price2}</td>
                <td>{p.price}</td>
                <td>{p.km}</td>
                <td>{p.dis}</td>
                <td>{p.dr}</td>
                <td className='work'>
                   <button className='ptn-work' onClick={()=>productdelete(p.id)}>X</button>
                  <button className='ptn-work' onClick={()=>updeteproduct(p)}>!</button>
                </td>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    
  )
}

export default Product