  import React from 'react'
import '../bill/Bill.css'
import { Aye } from '../Context'
export default function Bills() {
        const { billinvpurchfilter,updetebillpurch,deleteinvpruch,pushname,pursh,invpu,setInvup,savebillpu,winprint,dr,setDr,clinname,setClinName,search8,setSearch8,productfilter,show,setShow,time,setTime,setSearched,searched,total,tol,sal,setSal,updetesal,saldelete,salfilter,profilter,salsave,dat,setDat,mov,setMov,pars,setPars,km,setKm,un,setUn,price2,setPrice2,clear,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()
    
      return (
    <div className='bill-in'>
            {invpu.length===0?(
                <h2>لا يجد فاوتير</h2>

            ):(
              <div div className='bilsil'>
                   <h2 className='colw'>الفوتير التى تم حفظها سابقان للمشتريات</h2>

                   <div className='hol'>
                    <div className='coc'>
                  <input type='search' placeholder='search' value={search8} onChange={(e)=>setSearch8(e.target.value)}/>
                  </div>
                 </div>
              {billinvpurchfilter.map((cor,index)=>(

             <div className='moz' key={cor.id}>
              <p>اسم الموراد:<span>{cor.pushname}</span></p>
    
        
       <div className='moz'>  
          
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
              
              {(cor.pursh||[]).map((item,i)=>(
            
              <tr key={i.id}>
                <td>{i+1}</td>
                <td>{cor.date}</td>
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
               <h2><p>الاجمالى:</p> {cor.pursh.reduce((sum,item)=>{
              return    sum + ((Number(item.price) -Number(item.dis))* Number(item.km))
},0)}
               ج </h2>
                        <h2><p>الكميه:</p> {cor.pursh.reduce((sum,item)=>{
              return    sum + Number(item.km)
},0)}
                </h2>
                </div>
                  <div>
                    <button onClick={()=>updetebillpurch(cor)}>تعديل</button>
                    <button onClick={()=>deleteinvpruch(cor.id)}>الغاء</button>
                    
                  </div>
                  
                </div>
         </div>
            
        
      
                </div>      
           
))}

</div>
)
  
}
</div>
    
  )
}
