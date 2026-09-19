import React from 'react'
import './Inventory.css'
import { FaClipboardList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Aye } from '../Context';




function Inventor() {
        const {dr,setDr,km,setKm,updeteproduct,price2,setPrice2,clear,product,setProduct,productdelete,productfilter,productsave,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}=Aye()
  
  return (
    <div className='invent'>
      <h1>المخزون</h1>
      <p className='p2'>اداره الاصناف وكمان المخزون فى المستودعات</p>
      <div className='ri-fi'>
        
      <div className='inv-fi'>
        {/* title ivn */}
        <div className='inv-ti'>
          <div className='inv-1'>

            <div>
              <p>ااقل من الحد الادنى</p>
              <h2>34</h2>
              <span>صنف</span>
            </div>
            <FaTriangleExclamation className='a-1'/>
          </div>

           <div className='inv-2'>

            <div>
              <p>اجمالى قيمه</p>
              <h3>256,678</h3>
              <span>جنيه</span>
            </div>
            <FaDollarSign className='a-2'/>
          </div>
          <div className='inv-3'>

            <div>
              <p>اجمالى الكميه</p>
              <h4>8,450</h4>
              <span>قطعه</span>
            </div>
            <FaBoxes className='a-3'/>
          </div>

         <div className='inv-4'>

            <div>
              <p>اجمالى الاصناف</p>
              <h4>1,240</h4>
              <span>صنف</span>
            </div>
            <FaClipboardList className='a-4'/>
          </div>
          
          
          

        </div>
        {/* invntory */}
         <div className='inv-mos'>
          <h2>تحويلات المخزون</h2>
          <h2>تعديل المخزون</h2>
          <h2>حركه المخزون</h2>
          <h2>الاصناف</h2>
         </div>
         {/* search */}
         <div className='inv-sc'>
          <div className='rok'>
              <input placeholder='بحث' type='text'/>
            <FaSearch className='co'/>
          </div>
        
          <p>الاقسام</p>
         </div>
         {/* table */}
         <div className='inv-tb'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>اسم الصنف</th>
                <th>الواحده</th>
                <th>المحزون</th>
                <th>سعر بيع</th>
                <th>سعر شراء</th>
                <th>الكميه</th>
                <th>سعر التكاليف</th>
                
              </tr>
            </thead>
            <tbody>
                 {productfilter.map((p,index)=>(
              <tr key={p.id}>
                <td>{index+1}</td>
                <td>{p.name}</td>
                <td>{p.text}</td>
                <td>{p.ads}</td>
                <td>{p.price}</td>
                <td>{p.price2}</td>
                <td>{p.km}</td>
                <td>{p.dr}</td>
                
                
              </tr>
               ))}
            </tbody>
          </table>
         </div>
      </div>
      {/* right inv */}
      <div className='inv-rit'>
       
         {/* title right */}
        <div className='coml'>

          <div className='inv-pas'>
             <h2>ملخص مخزون</h2>
            <us className='po'>
            <p>مرتفع</p>
            <span>150</span>
            </us>
              <us className='po'>
            <p>منخفض</p>
            <span>37</span>
            </us>
              <us className='po'>
            <p>مباشر</p>
            <span>1</span>
            </us>
            

          
          </div>
        </div>

        <div className='inv-pas'>
          <h2>اعلى الاصناف</h2>
          <div>
            <div className='po'>
              <p>سكر 1كجم</p>
              <span>500,125</span>
            </div>
               <div className='po'>
              <p>كرتونه مياه</p>
              <span>40,56</span>
            </div>
               <div className='po'>
              <p>زيت شطاره</p>
              <span>500,79</span>
            </div>
               <div className='po'>
              <p>جبنه رودس</p>
              <span>400,125</span>
            </div>
          </div>
        </div>

        <div className='inv-pas'>
          <h2>احدث الحركات</h2>
          <div>
          <div className='pq'>
            <p>فاتوره شراء</p>
            <span>3070</span>
            <span>30</span>
            <span>30/7/2026</span>  
          </div>
          <div className='pq'>
            <p>فاتوره بيع</p>
            <span>4990</span>
            <span>20</span>
            <span>30/7/2026</span>  
          </div>
          <div className='pq'>
            <p>تحويل</p>
            <span>0070</span>
            <span>40</span>
            <span>30/7/2026</span>  
          </div>
          <div className='pq'>
            <p>تعديل</p>
            <span>9070</span>
            <span>10</span>
            <span>30/7/2026</span>  
          </div>
          <div className='pq'>
            <p>جوده</p>
            <span>66070</span>
            <span>50</span>
            <span>30/7/2026</span>  
          </div>


          </div>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Inventor