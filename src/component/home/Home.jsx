
import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import './Home.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { IoMdPrint } from "react-icons/io";
import { Aye } from '../Context';
import { IoIosPrint } from "react-icons/io";









function Homo() {
      const {clear,updetsupp,setSupp,supp,suppsave,suppdelete,suppfilter,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()
  
  return (
    <div className="home ">
  <div className="homes   row g-0 "  >
    
    {/* الناحية اليمين - فورم الدخول  */}
     {/* <div className="col-md-6   bg-white p-5 ">
      <h3 className="fw-bold mt-5"><span className="bg-primary text-white p-1 rounded-2 ms-2">🏪</span> النصر لتجاره</h3>
      <h2 className="fw-bolder mt-5"> مرحباً 👋</h2>
      <h2 className="text-black-50 fs-5 mt-5">سجل الدخول لمتابعة تجارتك وأرباحك</h2>
       هنا تحط الـ inputs بتاعة تسجيل الدخول 
    </div>  */}

    {/* الناحية الشمال - الجزء البرتقالي */}
    <div className="cop col-md-12  text-white  text-center d-flex flex-column justify-content-center align-items-center" 
         style={{background: 'linear-gradient(135deg, #e29a2d 10%, #f13538 90%)'}}>
       
    
      <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width:'120px', height:'130px'}}>

     
        <div className="bg-white rounded-circle" style={{width:'80px', height:'80px'}}></div>
      
      </div>
       {/* الناحية اليمين - فورم الدخول  */}
     <div className="  col-md-6    p-5  " style={{width:'100%'}}>
      <h3 className=" fw-bold mt-1  text-center d-flex flex-row justify-content-center align-items-center" ><span className="bg-primary text-white p-1 rounded-2 ms-2">🏪</span> النصر لتجاره</h3>
     
    
      
    </div> 

      <h4 className="fw-bold">جديد معنا؟</h4>
        <h2 className="text-white fs-5 mt-5">سجل الدخول لمتابعة تجارتك وأرباحك</h2>
      <p className="small text-white-50 lh-lg mt-2 fs-5">
        أنشئ حسابك الآن وابدأ رحلتك في عالم التسوق واستمتع بأفضل العروض الحصرية
      </p>
    
      <Link to='/C' type='button' className="btn  btn btn-light rounded-pill fw-bold mt-4 px-4 py-2 text-primary">
       <FaUser/>انشاء حسابك+ 
      </Link>
    </div>

  </div>
</div>
  
  )
}

export default Homo