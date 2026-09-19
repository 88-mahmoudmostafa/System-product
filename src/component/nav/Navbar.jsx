import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import '../nav/Navbar.css'
import { Aye } from '../Context';
import OffcanvasBody from 'react-bootstrap/esm/OffcanvasBody';
import { useState } from 'react';

function NavScrollExample() {
  const {fast,setFast,textt,islogin,name,user,us,phone}=Aye()
  
     const isdat=(phth)=>location.pathname.startsWith(phth);
  const [nas,setNas]=useState(false)
  const cli=()=>{
    setNas(false);
    setFast(false)
  }
  return ( 
    
<>
    {islogin?(
          <Navbar  expand="lg" className="bg-body-tertiary mt-3 mb-3 ">
      <Container fluid className='cant'>
        <Navbar.Brand href="#" className='nav-title'> اداره المخزون والمبيعات</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={()=>setNas(!nas)} />
        <Navbar.Offcanvas id="navbarScroll" style={{width:'75%'}} show={nas} onHide={()=>setNas(!nas)}>
          {/* <OffcanvasBody style={{overflow:'auto',maxHeight:'100%',display:'flex',flexDirection:'column'}}> */}
          <Nav
            className="mas"   
            style={{ flex:1}}
            // navbarScroll
          >
            <Link to='/KM'  className={`lin ${isdat('/KM')?'naving':''}`} onClick={cli}>القائمه الريسيه</Link>
            <Link to='/DD'  className={`lin ${isdat('/DD')?'naving':''}`} onClick={cli}>بيانات الريسيه</Link>
            <Link to='/PU'  className={`lin ${isdat('/PU')?'naving':''}`} onClick={cli}>المشتريات</Link>
            <Link to='/SL'  className={`lin ${isdat('/SL')?'naving':''}`} onClick={cli}>المبيعات</Link>
            <Link to='/IV'  className={`lin ${isdat('/IV')?'naving':''}`} onClick={cli}>المخزون</Link>
            <Link to='/RE'  className={`lin ${isdat('/RE')?'naving':''}`} onClick={cli}>التقراير</Link>
            <Link to='/US'  className={`lin ${isdat('/US')?'naving':''}`} onClick={cli}>المستخدمين</Link>
            <Link to='/ST'  className={`lin ${isdat('/ST')?'naving':''}`} onClick={cli}>الاعدادات</Link>
              <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        معلومات المستخدام
      </Dropdown.Toggle>
      <Dropdown.Menu className='menu'>
       <Dropdown.Item href="#/action-3"  className='mrn-item'>
       <h6>المستخدام:</h6> 
       <p>{us?.name||''}</p> 
          
           </Dropdown.Item>
        <Dropdown.Item  href="#/action-3" className='mrn-item'>
         <h6>الصلاحيه:</h6> 
       <p>   ادمن</p>
        </Dropdown.Item>
          <Dropdown.Item  href="#/action-3" className='mrn-item'>
         <h6>الكاشير:</h6> 
       <p>  {us?.name||'المدير العام'}</p>
        </Dropdown.Item>
          <Dropdown.Item  href="#/action-3" className='mrn-item'>
         <h6>الهاتف:</h6> 
       <p>  {us?.phone}</p>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='mrn-item'>
         <h6>الشركه:</h6> 
       <p>   النصر اتجاره</p>
        </Dropdown.Item>
           <Dropdown.Item href="#/action-3" className='mrn-item'>
         <button onClick={textt}>تسجيل خروج</button> 
       
        </Dropdown.Item>
      </Dropdown.Menu>
                 </Dropdown>
         
          </Nav>
          {/* </OffcanvasBody> */}
        
        </Navbar.Offcanvas>
      </Container>
        </Navbar>
    ):(
      ''
     
    )}
  </>
  );
}

export default NavScrollExample;