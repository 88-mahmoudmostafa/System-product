import React, { useEffect, useState } from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import { LuSaveAll } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { TbXboxXFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import  Form  from 'react-bootstrap/Form';
import './Sala.css'
import '../Clind/Clind.css'
import { Aye } from '../Context';
function Sala() {
 
    const {search2,setSearch2,setCalect,salect,kamede,kamed,Id,mok,newsal,setAn,an,savebill,winprint,dr,setDr,clinname,setClinName,searchs,setSearchs,productfilter,show,setShow,time,setTime,setSearched,searched,total,tol,sal,setSal,updetesal,saldelete,salfilter,profilter,salsave,dat,setDat,mov,setMov,pars,setPars,km,setKm,un,setUn,price2,setPrice2,clear,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()
   
   
  return (
    <div className='hom-com'>
        {/* title first */}
      
        <div className='first'>
            <div>
                 <h3>تسجيل فاتوره مبيعات</h3>
            </div>
            <div className='last'>
             
              
              <dd className='dd-sal' >
                 <IoIosPrint className='dp'/>  
                <p onClick={winprint}>طباعه</p>
              </dd>
              <dd >
                <IoIosPrint className='dp ds' onClick={()=>{
                   savebill()
                  winprint()
                 
                }}/>
                  <p>حفظ وطباعه</p>
              </dd>
              <dd>
                <LuSaveAll className='ds' onClick={savebill}/>
                <p>{mok?'تحديث':'حفظ'}</p>

              </dd>
                
                <dd>
                  <CiCirclePlus className='ds' onClick={newsal}/>
                  <p>جديد</p>
                  
                  </dd>               
               
                
            </div> 
            
        </div>
        {/* data-client and Bill */}
        <div className='cli-bil'>
                 {/* Bill */}
          <div className='Bill'>
            <p>بيانات الفاتوره</p>
            <o className='cl'>
                <input type='number' value={text} onChange={(e)=>setText(e.target.value)}/>
                {/* <input/> */}
                <h2>:رقم الفاتوره</h2>
            </o>

              <o className='cl'>
                <input type='date'value={dat} onChange={(e)=>setDat(e.target.value)}/>
                {/* <input/> */}
                <h2>:التاريخ</h2>
            </o>

              <o className='cl'>
                <input placeholder='نقدى' type='text' value={price2} onChange={(e)=>setPrice2(e.target.value)}/>
                
                <h2>:طريقه الدفع</h2>
            </o>
          </div>
            {/* client */}
          <div className='clinet'>
            <p> بيانات العميل</p>
            <ms  className='cl mo'>
              {/* <div> */}
                <input type='text' onFocus={()=>setShow(true)} placeholder=' 'value={clinname}
                 onChange={(e)=>{setClinName(e.target.value); setShow(true);setSearch(e.target.value)}}
                 onKeyDown={(e)=>{
                  if(e.key==='ArrowDown'){
                    e.preventDefault()
                    setCalect(prev=>prev < profilter.length-1 ? prev+1:0)
                  }
                  else if(e.key==='ArrowUp'){
                    setCalect(prev=> prev > 0 ? prev-1:profilter.length-1)
                  }
                  else if(e.key==='Enter' && profilter[salect] && show && search){
            
                    const p=profilter[salect]
                          setClinName(p.name)
                            setPhone(p.phone)
                            setDis(p.dis)
                            setSearch('')
                            setShow(false)
                  }
                 }}/>
                <h2>:اسم العميل</h2>
                 {/* </div> */}
               
            </ms>

              {search && show && profilter.length>0 &&(
                <div className='clier'> 
              
                  
                    <table>
                      <thead>
                      
                        <tr>
                          <th>#</th>
                          <th>الاسم</th>
                          <th>رقم الهاتف</th>
                          <th>العنوان</th>
                           </tr>
                      </thead>
                      <tbody>
                        {profilter.map((p,index)=>(
                           <tr key={p.id} className='mars' 
                           id={`product-${index}`}
                           onMouseEnter={()=>setCalect(index)}
                             onMouseDown={()=>{
                            setClinName(p.name)
                            setPhone(p.phone)
                            setDis(p.dis)
                            setSearch('')
                            setShow(false)
                           }}
                           style={{background :index===salect?'blue':'white',
                                   color: index===salect?'white':'black'
                           }}>
                            <td>{index+1}</td>
                            <td>{p.name}</td>
                            <td>{p.phone}</td>
                            <td>{p.dis}</td>

                           </tr>
                        ))}
                      </tbody>
                    </table>

                  </div>
                
                
              )}
             <ms className='cl'>
                  <input type='number' placeholder='' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <h2>:رقم الهاتف</h2>
              
            </ms>
             <ms className='cl'>
                <input placeholder='' type='text' value={dis} onChange={(e)=>setDis(e.target.value)}/>
                <h2>:العنوان</h2>
                
            </ms>
          </div>
       

        </div>
     

        {/* Addproduct */}
        <div className='product'>
           <h4>اضافه الاصناف</h4>
        
        {/* <div> */}
        
          <Form onSubmit={salsave} >
            <div className='pro'>
               <na className='in'>
                    
                    <input  className='open' placeholder=' ' type='number' value={pars} onChange={(e)=>setPars(e.target.value)}/>
                    <label>كود الصنف</label>
                </na>
                <na className='in'>
                    <input className='sn open'type='text' placeholder=' '
                     onFocus={()=>setShow(true)} value={name}
                      onChange={(e)=>{setName(e.target.value) ; setSearchs(e.target.value)}}
                      onKeyDown={(e)=>{
                        // e.preventDefault()
                        if(e.key==='ArrowDown'){
                          setCalect(prev=> prev < productfilter.length-1 ? prev+1 : 0)
                        }else if(e.key==='ArrowUp'){
                          e.preventDefault()
                          setCalect(prev=> prev > 0 ? prev-1 : productfilter.length-1)
                        }
                        else if(e.key==='Enter' && productfilter[salect] && show && searchs){
                          e.preventDefault()
                          const p=productfilter[salect]
                          setPrice(p.price)
                          setName(p.name)
                          setKm(1)
                          setDis(p.dis)
                          setAds(p.ads)
                          setShow(false)
                          setSearch('')
                  }
                     
                      }}
                      />
                                      
                    <label>اسم الصنف</label>
                    
                </na>
                
              {searchs && show &&  productfilter.length> 0 &&(
                <div className='clier'> 
                    <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>الصنف</th>
                        <th>الكميه</th>
                        <th>الوحده</th>
                        <th>السعر</th>
                        <th>الخصم</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                       {productfilter.map((p,index)=>(
                      <tr key={p.id}    className='mars'
                      id={`product-${index}`} 
                      onMouseEnter={()=>setCalect(index)}
                     onClick={()=>{
                    setName(p.name)
                    setPrice(p.price)
                    setKm(1)
                    setAds(p.ads)
                    setDis(p.dis)
                    setSearchs('')
                    setShow(false)
                    // input.onFocus()
                  }}style={{
                    background: index===salect?'blue':'white',
                    color: index===salect?'white':'#000'
                  }} >  
                        <td>{index+1}</td>
                        <td>{p.name}</td>
                        <td>{1}</td>
                        <td>{p.ads}</td>
                        <td>{p.price}</td>
                        <td>{p.dis}</td>
                      </tr>
                       ))}
                    </tbody>
                   
                  </table>

                    
                 
                  </div>
                
              
              )}
                <na className='in'>
                    
                    <input className='open' type='number' placeholder=' ' value={km ||1} onChange={(e)=>setKm(e.target.value)}/>
                    <label>الكميه</label>
                </na>

                  <na className='in'>
                    
                    <input className='open'type='text' placeholder='  ' value={un} onChange={(e)=>setUn(e.target.value)}/>
                    <label>الواحدات</label>
                </na>

                

                  <na className='in'>
                  
                    <input className='open' placeholder=' ' type='number' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    <label>السعر</label>
                </na>

                  <na className='in'>
                    
                    <input className='open' placeholder='  ' type='number' value={dis} onChange={(e)=>setDis(e.target.value)}/>
                    <label>الخصم</label>
                </na>

                 
                <button type='submit' className='sal-bt'>{Id?'تعديل':'اضافه'}</button>
           
            </div>
            
            </Form>
             </div>
        {/* search */}
        <div className='box  noq'>
            <input className='mold' type='text' value={searched} onChange={(e)=>setSearched(e.target.value)}/>
              <FaSearch className='scr'/> 
          </div>
           {/* table */}
        <div className='molk'>
        {/* bill */}
          <div className='amer'>
            <div className='kam'>
              <div>
                <tt className='mor'>
                  <h5>اسم العميل:</h5>
                  <p>{clinname}</p>
                </tt>
                 <tt className='mor'>
                  <h5>رقم الفاتوره:</h5>
                  <p>{text||1}</p>
                </tt>
              </div>
              <div>
                <tt className='mor'>
                  <h5>تاريخ:</h5>
                  <p>{time.toLocaleDateString('en-us')}</p>
                
                </tt>
                <tt className='mor'>
                  <h5>وقت:</h5>
                    <p>{time.toLocaleTimeString('en-us')}</p>
                 </tt>
              </div>
            </div>
          <table >
            <thead>
              <tr>
                <th>م</th>
                <th>كود الصنف</th>
                <th>اسم الصنف</th>
                <th>الكميه</th>
                <th>الوحده</th>
                <th>السعر</th>
                <th>الخصم</th>
                <th>الجمالى</th>
                <th className='gg'>الاجرات</th>
          
              </tr>
            </thead>
            <tbody className='mnp' >
             {salfilter.map((p,index)=>(
              <tr key={p.id}>
                <td>{index+1}</td>
                <td>{p.pars}</td>
                <td>{p.name}</td>
                <td>{p.km}</td>
                <td>{p.un||'قطعه'}</td>
                <td>{p.price}</td>
                <td>{p.dis}</td>
                <td>{(Number(p.price)-Number(p.dis||0)) * Number(p.km||1)}</td>
                <td className='work'>
                  <button className='ptn-work' onClick={()=>saldelete(p.id)}>X</button>
                  <button className='ptn-work' onClick={()=>updetesal(p)}>!</button>
                </td>
              </tr>

           ))}
            </tbody>
            {/* <hr/> */}
         

          </table>
             <p className='mot'>01009837629 للتواصل <br/></p>
        </div>
        {/* discount,total, */}

        <div className='ks'>
            {/* <p> الملاحظات</p> */}
            <div className='text'>
               <p>الملاحظات:</p>
                <textarea/>
               
            </div> 

            <div className='nom'>
                <ns className='ll' >
                  <h2>الخصم:</h2>
                     <h5>{}</h5>                    
                </ns>
            
                      <ns className='ll' >
                         <h2>الضريبه:</h2>
                         <h5>{kamede}</h5>
                   
                </ns>
               
            </div>

            <div className='nom'>
             
                       <l className='ll' >
                         <h2>اجمالى الكميه:</h2>
                          <h5>{kamed}</h5>
                   
                </l>
                       <l className='ll' >
                       
                    <h3>اجمالى النهائى:</h3>
                       <h5>{total}</h5>
                </l>
                <hr/>
             
            </div>
        </div>
        </div>
       
        
            {/* </Form> */}
   
    </div>
  )
}
export default Sala