import React from 'react'
import Form from 'react-bootstrap/Form';
import './Setting.css'
import {Link} from 'react-router-dom'
import { IoSettings } from "react-icons/io5";
import { AiTwotonePrinter } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";
import { IoIosRefresh } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { BsClipboard2 } from "react-icons/bs";


function Setting() {
  return (
    <div className='sett'>
      {/*title  */}
      <div className='set-i'>
         <div className='bak'>
               <h3>الاعدادات</h3>
               <IoSettings className='fg'/>
        </div>
        <div>
          <Link to='/Km' className='t-i'>الريسيه/</Link>
          <Link className='t-i ii'>الاعدادات</Link>
        </div>
       
     
      </div>
      

      <div className='set'>
        {/* الضراب */}
         <div className='pat'>
          <h2><FaPercent className='mog'/>  الضريبه والرسوم</h2>
   
  
       
       <Form className='for-set'>
      <p>تفعيل الضريبه</p>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
      </Form>
      <Form.Group className="mb-3">
        <Form.Label className='pp'>نسبه الضريبه(%)</Form.Label>
        <Form.Control placeholder="14" className='sv'  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='pp'>تطبيق الضريبه على</Form.Label>
        <Form.Select  className='sv' >
          <option>الاجمالى</option>
        </Form.Select>
      </Form.Group>
         </div>

         {/* setting bill */}
         <div className='pat'>
        <h2><AiFillCalendar className='mog'/>اعدادات الفاتوره </h2>
       <Form.Group className="mb-3">
        <Form.Label className='pp'>اسم الفاتوره</Form.Label>
      <Form.Control placeholder="فاتوره مبيعات" className='sv'  />
      </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label className='pp'>رقم الفاتوره التالى</Form.Label>
        <Form.Control placeholder="1001" className='sv'  />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label  className='pp'>طريقه الطباعه الافتراضيه</Form.Label>
        <Form.Select className='sv'  >
          <option>طباعه مباشره</option>
        </Form.Select>
      </Form.Group>
         </div>
          {/* data */}
         <div className='pat'>
          <div>
            <h2> <BsBuilding className='mog'/>بيانات الشركه   </h2>
        
            </div>
      <Form>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='pp'>اسم الشركه</Form.Label>
        <Form.Control type="text" placeholder="النجاح لتجاره"className='sv' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='pp'>رقم الهاتف</Form.Label>
        <Form.Control type="number" placeholder="01009836789"className='sv'  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='pp'>البريد الاكترونى</Form.Label>
        <Form.Control type="email" placeholder="info@alanajgmail.com"  className='sv' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='pp'>العنوان</Form.Label>
        <Form.Control type="text" placeholder="القاهره" className='sv' />
      </Form.Group>
       </Form>
         </div>

      </div>

      {/* tow */}
      <div className='set'>
        <div className='pat'>
       <h2><AiTwotonePrinter className='mog'/>اعدادات اطباعه</h2>

      <Form.Group className="mb-3">
        <Form.Label className='pp'>حجم الورقه</Form.Label>
        <Form.Select className='sv'  >
          <option>a4</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>اتجاه الطباعه</Form.Label>
        <Form.Select className='sv'  >
          <option>عمودى</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>عدد النسخ الافتراضيه</Form.Label>
        <Form.Control placeholder="1" className='sv'  />
      </Form.Group>
      </div>

      <div className='pat'>
        <h2><MdOutlineSettings className='mog'/>اعدادات النظام</h2>

           <Form.Group className="mb-3">
        <Form.Label className='pp'>اللغه</Form.Label>
        <Form.Select className='sv' >
          <option>العربيه</option>
        </Form.Select>
            </Form.Group>

           <Form.Group className="mb-3">
        <Form.Label className='pp'>العمله</Form.Label>
        <Form.Select className='sv' >
          <option>جنيه مصرى</option>
        </Form.Select>
             </Form.Group>

            <Form.Group className="mb-3">
        <Form.Label className='pp'>المظهر</Form.Label>
        <Form.Select className='sv'  >
          <option>فاتح</option>
        </Form.Select>
             </Form.Group>
      </div>

      <div className='pat'>
        <h2><AiFillBell className='mog'/>الاشعارات   </h2>
     
          <Form>
      <Form.Check // prettier-ignore
      className='ck'
        type="switch"
              id="disabled-custom-switch"
        label="اشعارات المبيعات"
      />
      <Form.Check // prettier-ignore
        className='ck'
        type="switch"
        label="اشعارات المخزون"
        id="disabled-custom-switch"
      />
      <Form.Check // prettier-ignore
        className='ck'
        type="switch"
        label="اشعارات المشتريات"
        id="disabled-custom-switch"
      />
    </Form>
      </div>

      </div>
      {/* there */}
      <div className='psel'>
        <h2>النسخه الاحطياطيه</h2>
        <div className='ns'>
          
          <div className='nsf'>
            <button className='gom'><BsClipboard2 className='gg'/>انشاء نسخه احطياطيه</button>
          </div>
           {/* <h2>النسخه الاحطياطيه</h2> */}
          <div className='fns'>
           
            <button className='gom'>استعاده النسخه<IoIosRefresh className='gg'/></button>
             <button className='gom'>
            <AiFillCalendar className='gg'/>حفظ الاعدادات</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Setting