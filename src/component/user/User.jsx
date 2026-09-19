import React from 'react'
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import './User.css'
import { FaUserFriends } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { Aye } from '../Context'; 
function User() {
  const {search6,setSearch6,pass,setPass,user,setUser,userdelete,userfilter,usersave,updeteuser,dat,setDat,mov,setMov,pars,setPars,km,setKm,un,setUn,price2,setPrice2,clear,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()

  return (
    <div className='usere'>
      {/* title-user */}
      <div className='us-t'>
        <div className='us-l'>
          <Link className='us-li' to='Km'>الريسيه/</Link>
          <Link className='us-li sb'>المستخدام</Link>
        </div>
        <h3><FaUserFriends className='mout'/>المستخدامين</h3>
      </div>
      {/* adduser */}
      <div className='sc-fr'>
       <div className='fr-om'>
        <h3><FaUser className='mou'/>اضافه مستخدام جديد</h3>
          <Form onSubmit={usersave} className='frpo'>
         <Row className="roped mb-3" >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='ppp'>اسم المستخدام</Form.Label>
          <Form.Control className='uss' type="text" placeholder="ادخل اسم المستخدام" value={name} onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
       <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className='ppp'>رقم الهاتف</Form.Label>
          <Form.Control className='uss' type="number" placeholder="ادخل رقم الهاتف" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className='ppp'>البريد الاكترونى</Form.Label>
          <Form.Control className='uss' type="email" placeholder="ادخل البريد الاكترونى" value={email} onChange={(e)=>setEmail(e.target.value)} />
           </Form.Group>
         </Row>

         <Row className="roped mb-3">
      
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className='ppp'>كلمه المرور</Form.Label>
          <Form.Control className='uss' type="password" placeholder="ادخل كلمه المرور" value={dis} onChange={(e)=>setDis(e.target.value)}/>
          </Form.Group>

         <Form.Group as={Col} controlId="formGridState">
          <Form.Label className='ppp'>الصلاحيه</Form.Label>
          <Form.Select className='uss' defaultValue="اختر الصلاحيه"  value={pass} onChange={(e)=>setPass(e.target.value)}>
            <option>اختر الصلاحيه</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        </Row>
          
      <button type='submit'>اضافه</button>
            </Form>
         </div>
         {/* search user */}
         <div className='sc-om'>
    <Form.Group className="mb-3">
        <Form.Label className='ppp  ks'><FaSearch className='mou'/>بحث عن مستخدام</Form.Label>
        <Form.Control className='uss ms' placeholder="اكتب اسم المستخدام او الهاتف" value={search6} onChange={(e)=>setSearch6(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='ppp'>الصلاحيه </Form.Label>
        <Form.Select className='uss ms'  value={dis} onChange={(e)=>setDis(e.target.value)}  >
          <option>الصلاحيه</option>
        </Form.Select>
      </Form.Group>
        <button> <FaSearch className='mou'/>بحث</button>
         </div>

      </div>

      {/* user */}
      <div className='us-last'>
            <div className='s-1'>
          <us>
          <h2>{user.length}</h2>
          <p>اجمالى المستخدمين</p>
          </us>
            <FaUserFriends className='g'/>
              </div>
             <div className='s-2'>
          <us>
          <h2>8</h2>
          <p>غياب نظام</p>
          </us>
           <FaCheckCircle className='b'/>
               </div>
             <div className='s-3'>
          <us>
          <h2>3</h2>
          <p>مستخدمين بنتظام</p>
          </us>
          <FaUser className='r'/>

               </div>
             <div className='s-4'>
          <us>
          <h2>1</h2>
          <p>مستخدمين لم يستخدمو</p>
          </us>
          <FaUserTimes className='r'/>

              </div>


      </div>
      {/* table */}
      <div className='us-tab'>
            <h2><FaUserPlus className='mou'/>قائمه المستخدمين</h2>
        <table className='tab-us'>
          <thead>
            <tr>
              <th>#</th>
              <th>اسم المستخدام</th>
              <th>البريد الاكترونى</th>
              <th>رقم الهاتف</th>
              <th>الصلاحيه</th>
              <th>كلمه المرور</th>
              <th>تاريخ الاضافه</th>
              <th>الاجرات</th>
            </tr>

          </thead>
        <tbody>
          {userfilter.map((p,index)=>(
         <tr key={p.id}>
          <td>{index+1}</td>
          <td>{p.name}</td>
          <td>{p.email}</td>
          <td>{p.phone}</td>
          <td>{p.ads}</td>
          <td>{p.pass}</td>
  
          <td></td>
          <td>
            <button className='ptn-work' onClick={()=>userdelete(p.id)}>X</button>
            <button className='ptn-work' onClick={()=>updeteuser(p)}>!</button>
          </td>
          </tr>
          ))}
        
        </tbody>
      

        </table>
      </div>
    </div>
  )
}

export default User