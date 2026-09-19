  import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Purchases.css'
import { FaCartPlus } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LuSaveAll } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { Aye } from '../Context';
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { TbXboxXFilled } from "react-icons/tb";

function Purchases() {
    const {search5,setSearch5,search1,setSearch1,setCalect,salect,mov,setMov,newpursh,textt,winprint,mok,pushname,setPushName,dat,setDat,savebillpu,show,setShow,time,setTime,total,Id,updetepursh,pursh,setPursh,purdelete,purfilter,purshsave,setSearched,searched,dr,setDr,km,setKm,suppfilter,setUn,un,clear,profilter,deleted,updeteclind,save,cleind,setCleind,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()
  useEffect(()=>{
   clear()
  },[])
   // time
      // useEffect(()=>{
      //  const timer=setInterval(() => {
       
          
      //     setTime(new Date())
      //  },1000);
      //  return()=>clearInterval(timer)
      // },[])

  return (
    <div className='purch'>
      <div className='purcd'>
         {/* title first,print,save,new */}    
         <div className='first'>
             <div className=''>
               <h1>تسجيل فاتوره مشتريات</h1>
               </div>
               <div className='last '>
                      {/* <dd>
                        <FaSignOutAlt className='dicon' onClick={textt}/>
                         <p>خروج</p>
                         
                      </dd> */}
                     
                      <dd className='pap' >
                         <IoIosPrint className='dp' onClick={winprint}/>  
                        <p>طباعه</p>
                      </dd>
                      <dd className='pap' >
                        <IoIosPrint className='dp' onClick={()=>{
                          savebillpu()
                          winprint()
                        }}/>
                          <p>حفظ وطباعه</p>
                      </dd>
                      <dd className='pap'>
                        <LuSaveAll className='ds'onClick={savebillpu}/>
                        <p>{mok?'تحديث':'حفظ'}</p>
        
                      </dd>
                        
                        <dd className='pap'>
                          <CiCirclePlus className='dpls' onClick={newpursh}/>
                          <p>جديد</p>
                          
                          </dd>               
                       
                        
               </div> 
                    
          </div> 

         {/* title purchases */}
         <div className='pur'>
        <div className='pur-ti'>
        <Link className='lik' to='/Km'>الريسيه/</Link>
        <Link className='lik pul'> المشتريات</Link>
        </div>
        <div className='car'>
              <h3>المشتريات</h3>
              <FaCartPlus className='pu-icon'/>
        </div>
        
          </div>
          {/* Bill purchases form */}
          <div className='pu-bill'>

        <div className='puhl'>
        <div className='mop'>
          <h2>فاتوره مشتريات جديده</h2>
          <FaCartPlus className='pu-icon'/>
        </div>
        </div>
   
        <div className='pufor'>
         
           <Form className='pucht' >
      {/* <fieldset disabled> */}
        <Form.Group className="mb-3  mot">
           <Form.Label htmlFor="disabledTextInput" className='mas-for' >اسم الموراد</Form.Label>
          <Form.Control id="disabledTextInput" onFocus={()=>setShow(true)} placeholder="اسم الموراد" value={pushname}
           onChange={(e)=>{setPushName(e.target.value); setSearch1(e.target.value)}}
           onKeyDown={(e)=>{
             if(e.key === 'ArrowDown'){
              e.preventDefault()
              setCalect(prev=> prev < suppfilter.length-1 ? prev+1:0)
             }
            else if(e.key === 'ArrowUp'){
              e.preventDefault()
              setCalect(prev=>prev > 0 ? prev-1 :suppfilter.length-1)
             }
             else if(e.key === 'Enter'&&suppfilter[salect] && show && search1 ){
             const p=suppfilter[salect]
              setSearch1('')
            setPushName(p.name)
            setName(p.name)
            setShow(false)

             }
           }} />
        </Form.Group>
                {search1 && show && suppfilter.length>0 &&(
                   <div className='clier'>
        <table>
          <thead>
          <tr>
            <th># </th>
            <th> الاسم</th>
          </tr>
          </thead>
          <tbody>

         
        {suppfilter.map((p,index)=>(
          <tr className='mars' key={p.id}
          id={`product-${index}`} 
          onMouseDown={()=>setCalect[index]}
          onClick={(e)=>{
            setSearch1('')
            setPushName(p.name)
            setName(p.name)
            setShow(false)
          }} style={{background: index===salect?'blue':'white',
                     color: index===salect?'white':'black'
          }}>
            <td>{index+1}</td>
            <td>{p.name}</td>
          </tr>
         ))}
          </tbody>
          </table>
       
        </div>
        
        )}
        <Form.Group className="mb-3 mot">
          <Form.Label htmlFor="disabledTextInput" className='mas-for'>رقم الفاتوره</Form.Label>
          <Form.Control type='number' id="disabledTextInput" placeholder="رقم الفاتوره" value={text} onChange={(e)=>setText(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3  mot">
          <Form.Label htmlFor="disabledTextInput" className='mas-for'>تاريخ الشراء</Form.Label>
          <Form.Control type='date' id="disabledTextInput" placeholder="" value={ads} onChange={(e)=>setAds(e.target.value)}/>
        </Form.Group>
        
        
      {/* </fieldset> */}
           </Form>

         </div>

        <div className='add-pro'>

        <Form className='MOZ' onSubmit={purshsave} >
    
           <Row className="rod  mb-3">
        <Form.Group  controlId="formGridEmail" className='pors'>
          <Form.Label className='fori'>اسم المنتج</Form.Label>
          <Form.Control type="name" placeholder="اسم المنتج" className='forn' value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail" className='prsed'>
          <Form.Label className='fori'>الواحده</Form.Label>
          <Form.Control type="text" placeholder="قطعه" className='forn' value={un} onChange={(e)=>setUn(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='fori'>الكميه</Form.Label>
          <Form.Control type="number" placeholder="1" className='forn' value={km} onChange={(e)=>setKm(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='fori'>سعر الواحده</Form.Label>
          <Form.Control type="number" placeholder="000" className='forn' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='fori'>الخصم</Form.Label>
          <Form.Control type="number" placeholder="00" className='forn' value={dis} onChange={(e)=>setDis(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='fori'>الضريبه</Form.Label>
          <Form.Control type="number" placeholder="00" className='forn' value={dat} onChange={(e)=>setDat(e.target.value)}/>
        </Form.Group>
       
        </Row>
         <div className='pu-btn'>
          <div className='utp'>
          <button className='pu-pg' type='submit'>{Id?'تعديل':' اضافه منتج'}</button>
          <button className='pu-pg' type='button' onClick={clear}> الغاء X</button>
        </div>
        </div>
          </Form>
        </div>

        <div className='pu-mas'>
          <nc className='los '>
            <h4>اجمالى الكميه</h4>
            <p>{pursh.reduce((sum,item)=>sum + Number(item.km ||1),0)}</p>
          </nc >
           <nc className='los'>
            <h4>اجمالى الخصم</h4>
            <p>{pursh.reduce((sum,item)=>sum+ Number(item.dis),0)}</p>
          </nc>
           <nc className='los '>
            <h4>اجمالى الضريبه</h4>
            <p>{pursh.reduce((sum,item)=>sum+ Number(item.dat),0)}</p>
          </nc>
           <nc className='los'>
            <h4>اجمالى الكلى</h4>
            <p>{pursh.reduce((sum,item)=>{
             return sum +(((Number(item.price)+Number(item.dr||0))-Number(item.dis||0))*Number(item.km))
            },0)}ج </p>
          </nc>
        
        </div>

       
          </div>

          {/* Bill table */}
          <div className='pu-tb'>
          <nm className='pu-fat'>
            <div className='nas'>
               <LuSaveAll className='nas-i'/>
                  <h2>فواتير شراء </h2>
                  
            </div>
         <div className='sear'>
            <input placeholder='بحث' type='search' value={search5} onChange={(e)=>setSearch5(e.target.value)}/>
            <FaSearch className='sc'/>

            </div>
          </nm>

           <div className='molo'>
            <div className='map'>
              <tt className='tt'>
                  <h6>اسم:</h6>
                <p>{pushname}</p>
              </tt>
                <tt className='tt'>
                  <h6>رقم الفاتوره:</h6>
                <p>{text||1}</p>
              </tt>
             
              
              </div>

              <div className='map'>
               <tt className='tt'>
                  <h6>تاريخ:</h6>
                    <p>{time.toLocaleDateString('en-us')}</p>
              </tt>
             <tt className='tt'>
              <h6>وقت:</h6>
                <p>{time.toLocaleTimeString('en-us')} </p>
                  {/* <p>{time.toLocaleTimeString('en-us')}</p> */}

              </tt>
              
            </div>
            </div>
          <table>
           
          <thead>
          <tr>
            <th>#</th>
            <th>اسم المنتج </th>
            <th> الواحده</th>
            <th> الكميه</th>
            <th> السعر</th>
            <th>الضريبه </th>
            <th> الخصم</th>
            <th> الاجمالى</th>
            <th> الجراءات</th>
          </tr>
          </thead>
          <tbody className='moi'>
            {purfilter.map((p,index)=>(
             <tr key={p.id}>
            <td>{index+1}</td>
            <td>{p.name}</td>
            <td>{p.un||'قطعه'}</td>
            <td>{p.km||1}</td>
            <td>{p.price||0}</td>
            <td>{p.dat ||0}</td>
            <td>{p.dis ||0}</td>
            <td>{((Number(p.price)+Number(p.dr ||0))-Number(p.dis||0))*Number(p.km )}</td>
            <td className='work'>
              <button className='ptn-work' onClick={()=>purdelete(p.id)}>X</button>
              <button className='ptn-work' onClick={()=>updetepursh(p)}>!</button>
            </td>
            
            </tr>
            ))}
         
          </tbody>
          </table>
                 <p className='mot'>01009837629 للتواصل <br/></p>

           
           </div>

      </div>
    {/* </div> */}
    </div>
  )
}

export default Purchases