import React from 'react'
import Form from 'react-bootstrap/Form';
import './Reports.css';
import {Link} from 'react-router-dom'
import { AiFillBank } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import RC from './Repcricl'
import Li from './Repline'



function Reports() {
  
  const data = [
  { name: 'يناير', uv: 4000, pv: 2400 },
  { name: 'فبراير', uv: 3000, pv: 1398 },
  { name: 'مارس', uv: 2000, pv: 9800 },
  { name: 'أبريل', uv: 2780, pv: 3908 },
  { name: 'مايو', uv: 1890, pv: 4800 },
  { name: 'يونيو', uv: 2390, pv: 3800 },
];
  return (
    <div  className='rep'>
      <h2>التقارير</h2>
      <div className='lo'>
        <Link to='/Km' className='ls'>الريسيه/</Link>
        <Link className='ls  sd' >التقارير</Link>
      </div>
      {/* ٌreports */}
      <div className='rep-mod'>
        <div className='rep-1'>
          <ud>
              <p>قيمه المخزون</p>
              <h4>70,670,00</h4>
              <span>ج.م</span>
              <div className='nn'>
              <span className='sp'>8.5%</span>
              <span>الفتره السابقه</span>
              </div>
          </ud>
           <AiFillBank className='reh'/>
        
        </div>
          <div className='rep-1'>
          <ud>
              <p>اجمالى المشتريات</p>
              <h4>220,370,00</h4>
              <span>ج.م</span>
              <div className='nn'>
              <span className='sp'>12.5%</span>
              <span>الفتره السابقه</span>
          </div>
          </ud>
        <FaShoppingCart className='carp'/>
        </div>
          <div className='rep-1'>
          <ud>
              <p>اجمالى المبيعات</p>
              <h6>370,170,00</h6>
              <span>ج.م</span>
              <div className='nn'>
              <span className='sp'>2.8%</span>
              <span>الفتره السابقه</span>
                </div>
          </ud>
        <FaShoppingCart className='car'/>
        </div>
          <div className='rep-1'>
          <ud>
              <p>اجمالى الارباح</p>
              <h6>170,770,00</h6>
              <span>ج.م</span>
              <div className='nn'>
              <span className='sp'>14.6%</span>
              <span>الفتره السابقه</span>
              </div>
          </ud>
        <TbMoneybag className='mone'/>
        </div>
      </div>

      {/* فلتره تقارير */}
      <div className='rep-pro'>
        <p>فلتره التقارير</p>
        <div className='mlp'>
        <input placeholder='من تاريخ' type='date'/>
        <input placeholder='الى تاريخ' type='date'/>
        </div>
          <Form.Group className="mb-3 cc">
        {/* <Form.Label>Disabled select menu</Form.Label> */}
        <Form.Select className='opr' >
          <option className='rop'>جميع التقاربر</option>
        </Form.Select>
      </Form.Group>
        {/* <Form.Group className="mb-3">
        {/* <Form.Label>Disabled select menu</Form.Label> */}
        {/* <Form.Select className='opr' >
          <option>كل الفروع</option>
        </Form.Select>
      </Form.Group>  */}
      <button className='vd'> عرض التقارير</button>
      </div>

      {/* report sales */}
      <div className='rep-com'>
        <div className='sas'>
          <h4>المبيعات خلال الفتره</h4>
          <div className='lined'>
            <Li/>
          </div>
        

    
        </div>
        <div className='cac'>
          <h4>المبيعات حسب الفئه</h4>
          <div className='rep-d'>
          <div className='rc'><RC/></div>
          <div className='moh'>
            <jj className='mof'>
              <p>مواد غذائيه</p>
              <span>5%</span>
            </jj>
               <jj className='mof'>
              <p>مشروبات</p>
              <span>25%</span>
            </jj>
               <jj className='mof'>
              <p>منتجات منزليه</p>
              <span>15%</span>
            </jj>
               <jj className='mof'>
              <p>منتجات شخصيه</p>
              <span>25%</span>
            </jj>
               <jj className='mof'>
              <p>اخرى</p>
              <span>25%</span>
            </jj>
          </div>
          </div>
        </div>

      </div>

      {/* ملخص التقارير */}
      <div className='motb'>
        <div  className='tsd'>
          <h2>  التقارير</h2>
          
        <table>
          <thead>
            <tr>
            <th>التقرير</th>
            <th>القيمه</th>
            <th>التغير عن الفتره السابقه</th>
          </tr>
          </thead>
          <tbody>
            <tr>
            <td>اجمالى المشتريات</td>
              <td>345.897.00</td>
            <td>+7.1%</td>
            </tr>
            <tr>
              <td> اجمالى المبيعات</td>
              <td>123,49,00</td>
              <td>+10.3%</td>
          
            </tr>
            <tr>
              <td>اجمالى المرتجعات</td>
              <td>123.890.00</td>
              <td className='o'>-3.5%</td>
              
            </tr>
                <tr>
              <td>اجمالى الخصومات</td>
              <td>123.890.00</td>
              <td>+17.5%</td>
              
            </tr>
                <tr>
              <td>صافى الارباح</td>
              <td>53.890.00</td>
              <td>+2.5%</td>
              
            </tr>
          </tbody>
        </table>
        </div>

        <div className='tsd'>
          <h2>اعلى الاصناف مبيعات</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>الصنف</th>
                <th>الكميه المباعه</th>
                <th>اجمالى المبعات</th>
             
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>زيت خليط</td>
                <td>880</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>مكرونه</td>
                <td>230</td>
                <td>6773و0</td>
              
              </tr>
                 <tr>
                  <td>3</td>
                <td>ارز مصرى</td>
                <td>230</td>
                <td>65000</td>
              </tr>
                  <tr>
                    <td>4</td>
                <td>سكر ناعم</td>
                <td>220</td>
                <td>6530</td>
              </tr>
                  <tr>
                    <td>5</td>
                <td>شاى ناعم</td>
                <td>200</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reports