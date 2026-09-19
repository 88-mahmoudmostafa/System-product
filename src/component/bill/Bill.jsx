import React from 'react'
import './Bill.css'
import { Aye } from '../Context'
import { FaSearch } from "react-icons/fa";

export default function Bill() {
        const {us,kamed,billsalfilter,updetebillsal,deleteinv,totalinv,inv,setInv,savebill,winprint,dr,setDr,clinname,setClinName,searchs,setSearchs,productfilter,show,setShow,time,setTime,setSearch7,search7,total,tol,sal,setSal,updetesal,saldelete,salfilter,profilter,salsave,dat,setDat,mov,setMov,pars,setPars,km,setKm,un,setUn,price2,setPrice2,clear,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()
 
      return (
    <div className='bill-in'>
            {inv.length===0?(
                <h2>لا يجد فاوتير</h2>

            ):(
                <div className='bilsal '>
                  <h2 className='colw'>الفوتير التى تم حفظها سابقان للمبيعات</h2>
                  <div className='hol'>
                    <div className='coc'>
                  <input type='search' placeholder='search' value={search7} onChange={(e)=>setSearch7(e.target.value )}/>
                   <FaSearch className='cc'/>
                   </div>
                   
                   </div>
              {billsalfilter.map((bill,index)=>(  
    
       <div className='moz' key={bill.id}>  
            <p>اسم العميل:<span>{bill.clinname}</span> </p>
         <table>
      
             <thead>
             
                <tr>
                 <th>م</th>
                 <th>التاريخ</th>
               <th>اسم الصنف</th>
                 <th>الكميه</th>
                 <th>الوحده</th>
                 <th>السعر</th>
                 <th>الخصم</th>
                 <th>الجمالى</th>
                 
            
                </tr>
            
           
             </thead>
         <tbody>
              
              {(bill.sal||[]).map((item,i)=>(
              <tr key={i}>
                
                <td>{i+1}</td>
                <td>{bill.dat}</td>
                <td>{item.name}</td>
                <td>{item.km}</td>
                <td>{item.un ||'قطعه'}</td>
                <td>{item.price}</td>
                <td>{item.dis}</td>
                <td>{(Number(item.price)-Number(item.dis ||0)) * Number(item.km)}</td>
              </tr>
             
                ))}
            </tbody> 
             
         </table>
             <div className='mow'>
              <div className='mog'>
                 <h2><p>الاجمالى:</p>{(bill.sal||[

                 ]).reduce((sum,item)=>{
               return   sum + ((Number(item.price) - Number(item.dis ||0)) * Number(item.km))
                },0)}ج</h2> 
                  <h2><p>الكميه:</p>{(bill.sal||[

                 ]).reduce((sum,item)=>{
               return   sum + Number(item.km)
                },0)}</h2>
                </div>
              <div>
                <button onClick={()=>updetebillsal(bill)}>تعديل</button>
                <button onClick={()=>deleteinv(bill.id)}>الغاء</button>
              </div>
               
                </div>
                  <hr/>
                  {/* <h3>{us?.phone}<P>للتواصل</P></h3> */}
         </div>
            
        ))}
            </div>
    )}
    

    </div>
  )
}
