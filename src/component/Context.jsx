import React from 'react';
import{data, useNavigate} from 'react-router-dom'
import { createContext,useEffect,useState,useContext, } from 'react';

  const contact=createContext()
function Context({children}) {
 
  const navgint=useNavigate()
  // clined state
  const [cleind,setClind]=useState(()=>{
    const saved=localStorage.getItem('cleind')
    return saved?JSON.parse(saved):[]
})
// suppliers state
const [supp,setSupp]=useState(()=>{
  const spp=localStorage.getItem('supp')
  return spp?JSON.parse(spp):[]
})
// product state
const [product,setProduct]=useState(()=>{
  const pros=localStorage.getItem('product')
  return pros?JSON.parse(pros):[]
})
// unit state
const [united,setUnited]=useState(()=>{
  const unt=localStorage.getItem('united')
  return unt?JSON.parse(unt):[]
})
// category state
const [cat,setCat]=useState(()=>{
  const cated=localStorage.getItem('cat')
  return cated?JSON.parse(cated):[]
})
// salas state
const[sal,setSal]=useState(()=>{
  const stal=localStorage.getItem('sal')
  return stal?JSON.parse(stal):[]
})
// pursh state
const[pursh,setPursh]=useState(()=>{
  const pur=localStorage.getItem('pursh')
  return pur?JSON.parse(pur):[]
})
// user state
const[user,setUser]=useState(()=>{
  const sur=localStorage.getItem('user')
  return sur?JSON.parse(sur):[]
})
// لاظهار اسم المستخدامuserstate
 const [us,setUs]=useState(()=>{
  const ss = localStorage.getItem('us')
  try{
       return ss?JSON.parse(ss):{};
  }catch{
    return{};
  }

 })
// show state
 const [show,setShow]=useState(false)
// time state
 const[time,setTime]=useState(new Date())
//  bill sale state
const [inv,setInv]=useState(()=>{
  const saveinv=localStorage.getItem('inv')
  return saveinv? JSON.parse(saveinv):[]
}) 
// billpurshstate
const [invpu,setInvpu]=useState(()=>{
  const saveinvpu=localStorage.getItem('invpu')
  return saveinvpu? JSON.parse(saveinvpu):[]
})  
  // login state
const [use,setUse]=useState([])
const [islogin,setLogin]=useState(false)
const [nour,setGar]=useState(true)
const [is,setIs]=useState(false)
const [fast,setFast]=useState(false)

// localStorage.getItem('islogin')
//  billstate
const [bs,setBs]=useState(false)
const [mok,setMok]=useState('')
const [salect,setCalect]=useState(0)
// useffectonmouseEnter
   useEffect(()=>{
    const el=document.getElementById(`product-${salect}`)
    if(el)el.scrollIntoView({block:'nearest',behavior:'smooth'})
   },[salect])
// clined useEfect
 useEffect(()=>{
     localStorage.setItem('cleind',JSON.stringify(cleind))
 },[cleind])
//  suppliers useEffect
useEffect(()=>{
  localStorage.setItem('supp',JSON.stringify(supp))
},[supp])
// product useEffect
useEffect(()=>{
  localStorage.setItem('product',JSON.stringify(product))
},[product])
// united useEffect
useEffect(()=>{
  localStorage.setItem('united',JSON.stringify(united))
},[united])
// catagory useEffect
useEffect(()=>{
   localStorage.setItem('cat',JSON.stringify(cat))
},[cat])
// sal effect
useEffect(()=>{
  localStorage.setItem('sal',JSON.stringify(sal))
},[sal])
 // pursh effect
useEffect(()=>{
  localStorage.setItem('pursh',JSON.stringify(pursh))
},[pursh]) 
// userefect
  useEffect(()=>{
  localStorage.setItem('user',JSON.stringify(user))
},[user])
// لاظهار اسم تسجيل الدخولuser 
  useEffect(()=>{
    const dat=localStorage.getItem('us')
    if(dat){
      try{
       setUs(JSON.parse(dat))
      }catch{
        localStorage.removeItem('us')
        setUs({})
      }
     
    }
 },[])

// time effect
useEffect(()=>{
  const timer=setInterval(() => {
    setTime(new Date())
  }, 1000);
  return()=>clearInterval(timer)
},[])
// bill useeffect
// useEffect(()=>{
//   localStorage.setItem('inv',JSON.stringify(inv))
//   if(sad==='false'){
//     setLogin(false)
//   }
// },[])
// login useeefect
useEffect(()=>{
     const sav=localStorage.getItem('islogin')
     if(sav==='false'){
      setLogin('false')
     }
},[islogin])
    // تسجيل الدخول مسجل اولا
useEffect(()=>{
 const sav=localStorage.getItem('islogin')
  if(sav==='true'){
   navgint('/LP',{replace:true})
  }
},[])
// console.log(localStorage.getItem('us'))
 const [Id,setId]=useState(null)
 const[name,setName]=useState('')
 const[price,setPrice]=useState('')
 const[ads,setAds]=useState('')
 const[text,setText]=useState('')
 const[dis,setDis]=useState('')
 const[search,setSearch]=useState('')
 const[search1,setSearch1]=useState('')
 const[search2,setSearch2]=useState('')
 const[search3,setSearch3]=useState('')
 const[search4,setSearch4]=useState('')
 const[search5,setSearch5]=useState('')
 const[search6,setSearch6]=useState('')
 const[search7,setSearch7]=useState('')
 const[search8,setSearch8]=useState('')
 const[searchs,setSearchs]=useState('')
 const[searched,setSearched]=useState('')
 const[email,setEmail]=useState('')
 const[phone,setPhone]=useState('')
 const[price2,setPrice2]=useState('')
 const[km,setKm]=useState('')
 const[mov,setMov]=useState('')
 const[pars,setPars]=useState('')
 const[un,setUn]=useState('')
 const[dat,setDat]=useState('')
 const[dr,setDr]=useState('')
 const[an,setAn]=useState('')
 const[pass,setPass]=useState('')
 const [clinname,setClinName]=useState('')
 const [pushname,setPushName]=useState('')
const detlod={name,phone}

 
  const tol=( Number(price) - Number(dis)) * Number(km)

 const dataproduct={clinname,cleind,pass,pushname,an,dr,name,price,email,ads,text,dis,phone,km,un,pars,dat,mov,price2,tol:(Number(price) - Number(dis)) * Number(km)}
    // clined save
 const save=(e)=>{
  e.preventDefault()
   if(!name){
    alert('اكتب الاسم') 
    return;
   }
   

    if(Id){
      setClind(cleind.map(p=>(
        p.id===Id?{...p,...dataproduct}:p
      )))
      setId(null)
      setName('')
      setPrice('')
      setPhone('')
      setAds('')
      setText('')
      setAn('')
      
    }else{
       const newid=Math.max(0, ...cleind.map(p=>p.id))+1
       setClind([...cleind,{id:newid, ...dataproduct}])
       
    }
    setName('')
       setAds('')
     setPrice('')
     setText('')
     setName(' ')
     setPhone('')
     setDis('')
     setAn('')

 }

// suppliers save
const suppsave=(e)=>{
  e.preventDefault()
   if(!name){
    alert('اكتب الاسم') 
    return;
   }
   

    if(Id){
      setSupp(supp.map(p=>(
        p.id===Id?{...p,...dataproduct}:p
      )))
      setId(null)
      setName('')
      setPrice('')
      setPhone('')
      setAds('')
      setText('')
      setEmail('')
      
    }else{
       const newid =Math.max(0, ...supp.map(p=>p.id))+1
       setSupp([...supp,{id:newid, ...dataproduct}])
     setAds('')
     setPrice('')
     setText('')
     setName('')
     setPhone('')
     setDis('')
     setEmail('')
    }

 }
// product save
const productsave=(e)=>{
  e.preventDefault()
   if(!name){
    alert('اكتب الاسم') 
    return;
   }
   

    if(Id){
      setProduct(product.map(p=>(
        p.id===Id?{...p,...dataproduct}:p
      )))
      setId(null)
      setName('')
      setPrice('')
      setPrice2('')
      setPhone('')
      setAds('')
      setText('')
      setEmail('')
      setKm('')
      setDr('')
      
    }else{
       const newid =Math.max(0, ...product.map(p=>p.id))+1
       setProduct([...product,{id:newid, ...dataproduct}])
     setAds('')
     setPrice('')
     setPrice2('')
     setText('')
     setName('')
     setPhone('')
     setDis('')
     setEmail('')
     setKm('')
     setDr('')
    }

 }
//  united save
const unitedsave=(e)=>{
  e.preventDefault()
   if(!name){
    alert('اكتب الاسم') 
    return;
   }
   

    if(Id){
      setUnited(united.map(p=>(
        p.id===Id?{...p,...dataproduct}:p
      )))
      setId(null)
      setName('')
      setPrice('')
      setPhone('')
      setAds('')
      setText('')
      setEmail('')
      
    }else{
       const newid =Math.max(0, ...united.map(p=>p.id))+1
       setUnited([...united,{id:newid, ...dataproduct}])
     setAds('')
     setPrice('')
     setText('')
     setName('')
     setPhone('')
     setDis('')
     setEmail('')
    }

 }
//  cat save
const catsave=(e)=>{
  e.preventDefault();
  if(Id){
    setCat(cat.map(p=>(
      p.id=== Id ?{...p,...dataproduct}:p
        )))
        setId(null)
      setName('')
      setAds('')
      setText('')
      setPrice('')
      setPrice2('')
      setEmail('')
      setPhone('')
   
  }
  else{
    const newed=Math.max(0,...cat.map(p=>p.id))+1
    setCat([...cat,{id:newed,...dataproduct}])
  }
    setName('')
      setAds('')
      setText('')
      setPrice('')
      setPrice2('')
      setDis('')
      setEmail('')

}
// sal save
const salsave=(e)=>{
  e.preventDefault()
  // alert('اشتغل')
  if(!name){
    alert('name')
    return
  }
  const tol =Number(price ||0)-Number(dis||0)
  if(Id){
    setSal(sal.map(p=>(
      p.id===Id?{...p,...dataproduct,tol}:p
    )))
    setId(null)
    setName('')
    setPrice('')
    setPrice2('')
    setPhone('')
    setAds('')
    setDis('')
    setDat('')
    setText('')
    setUn('')
    setPars('')
    setKm('')
    setMov('')
    setEmail('')
    setSearch('')
  }else{
    const newsd=Math.max(0,...sal.map(p=>p.id))+1
    setSal([...sal,{id:newsd,...dataproduct,tol}])
  }
   setName('')
    setPrice('')
    setPrice2('')
    // setPhone('')
    setAds('')
    setDis('')
    // setDat('')
    // setText('')
    setUn('')
    setPars('')
    setKm('')
    setMov('')
    setSearchs('')
    // setEmail('')
    // setSearch('')
  

}
// pursh save
const purshsave=(e)=>{
  e.preventDefault()
  if(!name){
    alert('name')
    return
  }
  const tol =Number(price ||0)-Number(dis||0)
  if(Id){
    setPursh(pursh.map(p=>(
      p.id===Id?{...p,...dataproduct,tol}:p
    )))
    setId(null)
    setName('')
    setPrice('')
    setPrice2('')
    setPhone('')
    setAds('')
    // setDis('')
    setDat('')
    // setText('')
    setUn('')
    setPars('')
    setKm('')
    setMov('')
    setEmail('')
    // setSearch('')
  }else{
    const newsd=Math.max(0,...pursh.map(p=>p.id))+1
    setPursh([...pursh,{id:newsd,...dataproduct,tol}])
  }
   setName('')
    setPrice('')
    setPrice2('')
    setPhone('')
    // setAds('')
    setDis('')
    setDat('')
    // setText('')
    setUn('')
    setPars('')
    setKm('')
    setMov('')
    setEmail('')
    // setSearch('')
    setDr('')

}
// user save
const usersave=(e)=>{
  e.preventDefault()
  if(!name){
    alert('name')
    return
  }else if(!pass){
    alert('password')
    return
  }
  const tol =Number(price ||0)-Number(dis||0)
  if(Id){
    setUser(user.map(p=>(
      p.id===Id?{...p,...dataproduct,tol}:p
    )))
    setId(null)
    setName('')
    setPrice('')
    setPrice2('')
    setPhone('')
    setAds('')
    // setDis('')
    setDat('')
    setPass('')
    setUn('')
    setPars('')
    setKm('')
    setMov('')
    setEmail('')
    // setSearch('')
  }else{
    const newsd=Math.max(0,...user.map(p=>p.id))+1
    setUser([...user,{id:newsd,...dataproduct,tol}])
  }
   setName('')
    setPrice('')
    setPrice2('')
    setPhone('')
    // setAds('')
    setDis('')
    setDat('')
    // setText('')
    setUn('')
    setPars('')
    setKm('')
    setMov('')
    setEmail('')
    // setSearch('')
    setDr('')
    setPass('')

}
// savebill sale
const savebill=()=>{
  if(sal.length===0){
    alert('اضف بيانات فاتوره')
    return;
  }
  const boll={
   id:mok|| Date.now(),
   date: new Date().toLocaleDateString('ar-EG'),
   sal:sal,
   text:text,
   phone:phone,
   dis:dis,
   clinname:clinname,
  totl:sal.reduce((sum,i)=>sum+(Number(i.price) * Number(i.km)),0)
  }

  if(mok){
    const plj=inv.map(bill=>(
      bill.id===mok?boll:bill

    ))
    setInv(plj)
    localStorage.setItem('inv',JSON.stringify(plj))
    }else{
    const plj=[...inv,boll]
    setInv(plj)
  localStorage.setItem('inv',JSON.stringify([...inv,boll]))
    }
  
  setMok('')

  setSal([])
  setClinName([])
  setText([])
  setPhone([])
  setDis([])
} 
// save bill pursh
const savebillpu=()=>{
  if(pursh.length===0){
    alert('اضف بيانات فاتوره')
    return;
  }
  const bollpu={
   id:mok|| Date.now(),
   date: new Date().toLocaleDateString('ar-EG'),
   pursh:pursh,
   pushname:pushname,

  totl:pursh.reduce((sum,i)=>sum+(Number(i.price) * Number(i.km)),0)
  }
  if(mok){
       const py=invpu.map(biil=>(
        biil.id===mok?bollpu:biil
       ))
       setInvpu(py)
       localStorage.setItem('invpu',JSON.stringify(py))
  }else{
    const py=[...invpu,bollpu]
    setInvpu(py)
    localStorage.setItem('invpu',JSON.stringify([...invpu,bollpu]))
  }
 setMok('')
  setPursh([])
  setPushName([])

} 


//  newsal
const newsal=()=>{
  setSal([])
  setClinName([])
  setText([])
  setPhone([])
  setDis([])
}
// newpursh
const newpursh=()=>{
  setPursh([])
  setPushName('')
  setText('')
  
}
const task=()=>{
  setIs(!is)
}
// save login
const saveLogin=(e)=>{
 e.preventDefault()

  // const usepass = use.find(u => u.pass === pass)
 const userdata={
   name: name,
   phone:phone,
   pass:pass}
 if(!name){
  alert('name')
  return;
 }
 if(phone.length !=11){
  alert('phone')
  return;
 }
  else if(pass.length<=6){
  alert('pass')
  return;
 }
 else{
  localStorage.setItem('us',JSON.stringify(userdata))
  localStorage.setItem('islogin','true')
  setUs(userdata)
  setLogin(true)
  navgint('/Km')
 }

}
// savepass
const saveLp=(e)=>{
  e.preventDefault()
  // console.log(pass )
  // console.log('الباسورد المكتوب:', pass);
   const savedUser = localStorage.getItem('us'); 
   if (!savedUser)
     { alert('لا يوجد مستخدم مسجل'); 
      return; }
       const userdata = JSON.parse(savedUser);
        // console.log('الباسورد المسجل:', userdata.pass);
  
//  const usepass=us.find(u=> u.pass===pass);
// const usepass = user.find(u => String(u.pass).trim() === String(pass).trim())
  if(String(userdata.pass).trim() !== String(pass).trim()) {
    alert('password  غير مطابق   تسجيل الدخول')
    setPass('')
    return;
    

  }else{
    localStorage.setItem('islogin','true')
    setPass('')
  setLogin(true)
  navgint('/KM')
}
}

  //cliend delete
  const deleted=(id)=>{
    setClind(cleind.filter(p=> p.id !==id))
  }
  // supp delete
  const suppdelete=(id)=>{
    setSupp(supp.filter(p=>p.id !==id))
  }
  // product delete
     const productdelete=(id)=>{
    setProduct(product.filter(p=>p.id !==id))
  }  
  // united delete
  const unitdelete=(id)=>{
    setUnited(united.filter(p=>p.id !==id))
  }
  // cat delete
  const catdelete=(id)=>{
    setCat(cat.filter(p=>p.id !==id))
  }
  // sal delete
  const saldelete=(id)=>{
    setSal(sal.filter(p=>p.id!==id))
  }
  // purshdelete
   const purdelete=(id)=>{
    setPursh(pursh.filter(p=>p.id!==id))
  }
  // userdelete
   const userdelete=(id)=>{
    setUser(user.filter(p=>p.id!==id))
  }
  // bill inv
  const deleteinv=(id)=>{
    setInv(inv.filter(p=>p.id !==id))
  }
  // bill invpurch
  const deleteinvpruch=(id)=>{
    setInvpu(invpu.filter(p=>p.id!==id))
  }

  // تسجيل خروج
  const textt=()=>{
    localStorage.removeItem(islogin)
    localStorage.removeItem(use)
    setUse(null)
    setLogin(false)
    navgint('/',{replace:false})
  }
  
   
  // clined filter
  const profilter=
    cleind.filter((p)=>(
      p.name?.toLowerCase().includes(search.toLowerCase())
    ))
    // supp filter
    const suppfilter=
    supp.filter(p=>(
      p.name?.toLowerCase().includes(search1.toLowerCase())
    ))
    // product filter
     const productfilter=
    product.filter(p=>(
      p.name?.toLowerCase().includes(search2.toLowerCase())
    ))
    // unitfilter
    const unitfilter=
    united.filter(p=>(
      p.name?.toLowerCase().includes(search3.toLowerCase())
    ))
    // cat filter
    const catfilter=
    cat.filter(p=>
      p.name?.toLowerCase().includes(search4.toLowerCase())
    ) 
    // salfilter
    const salfilter=
    sal.filter(p=>(
      p.name?.toLowerCase().includes(searched.toLowerCase())
    ))
    // pur filter
     const purfilter=
    pursh.filter(p=>(
      p.name?.toLowerCase().includes(search5.toLowerCase())
    ))
    // userfilter
    const userfilter=
    user.filter(p=>(
      p.name?.toLowerCase().includes(search6.toLowerCase())
    ))   
    // billinv sal
     const billsalfilter=
     inv.filter(p=>(
    p.clinname.toLowerCase().includes(search7.toLowerCase())
     )) 
    
    //  billpurchfilter
     const billinvpurchfilter=
     invpu.filter(p=>(
      p.pushname.toLowerCase().includes(search8.toLowerCase())
     ))





    
    // clear
    const clear=()=>{
      setAds('')
      setName('')
      setText( '')
      setPrice('')
      setPhone('')
      setEmail('')
      setId(null)
    }
   //  updeteclind
  const updeteclind=(p)=>{
    setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setText(p.text)
    setDis(p.dis)
  }
     //  updetesupp
  const updetesupp=(p)=>{
    setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setText(p.text)
  }
     //  updeteproduct
  const updeteproduct=(p)=>{
    setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setPrice2(p.price2)
    setText(p.text)
    setKm(p.km)

  }
     //  updeteunite
  const updeteunit=(p)=>{
    setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setText(p.text)
  }
     //  updetecategory
  const updetecat=(p)=>{
    setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setText(p.text)
  }
  // updetesal
  const updetesal=(p)=>{
     setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setText(p.text)
    setKm(p.km)
    setMov(p.mov)
    setDat(p.dat)
    setUn(p.un)
    setPars(p.pars)
  }
  // pursh updet
   const updetepursh=(p)=>{
     setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setText(p.text)
    setKm(p.km)
    setMov(p.mov)
    setDat(p.dat)
    setUn(p.un)
    setPars(p.pars)
  }
  // userupdete
   const updeteuser=(p)=>{
     setId(p.id)
    setName(p.name);
    setAds(p.ads);
    setEmail(p.email)
    setPhone(p.phone)
    setPrice(p.price)
    setText(p.text)
    setKm(p.km)
    setMov(p.mov)
    setDat(p.dat)
    setUn(p.un)
    setPars(p.pars)
  }
  // UPDET BILL SAL
 const  updetebillsal=(bill)=>{
    setMok(bill.id)
    setBs(true)
    setClinName(bill.clinname)
    setDat(bill.dat)
    setSal(bill.sal)
    setText(bill.text)
    setDis(bill.dis)
    setPhone(bill.phone)
    navgint('/SL')
    }
    // updetbillinvpurch
      const  updetebillpurch=(cor)=>{
    setMok(cor.id)
    setBs(true)
    setPushName(cor.pushname)
    setDat(cor.dat)
    setPursh(cor.pursh)
    navgint('/PU')
    }
  const total=sal.reduce((sum,item)=>sum+ ((Number(item.price)-Number(item.dis)) * Number(item.km)),0)
  const kamed=sal.reduce((sum,item)=>sum+ Number(item.km),0)
  // const kamede=pursh.reduce((sum,item)=>sum+ Number(item.km),0)
  const kamede=pursh.reduce((sum,item)=>sum+ Number(item.dis),0)

  const winprint=()=>{
    window.print()
  }
  // const tal=(Number(item.price)-Number(item.dis ||0)) * Number(item.km)

  return (
    <contact.Provider value={{search5,search6,search7,search8,setSearch5,setSearch6,setSearch7,setSearch8,search1,search2,search3,search4,setSearch1,setSearch2,setSearch3,setSearch4,setCalect,salect,kamed,us,setUs,fast,setFast,is,setIs,billinvpurchfilter,newpursh,savebillpu,updetebillpurch,deleteinvpruch,billsalfilter,mok,updetebillsal,deleteinv,newsal,textt,islogin,saveLp,setLogin,saveLogin,pushname,setPushName,an,setAn,inv,setInv,setInvpu,invpu,savebillpu,savebill,winprint,dr,setDr,clinname,setClinName,searchs,setSearchs,show,setShow,time,setTime,pass,setPass,user,setUser,userdelete,userfilter,usersave,updeteuser,Id,updetepursh,pursh,setPursh,purdelete,purfilter,purshsave,searched,dr,setDr,setSearched,tol,total,setSal,sal,dat,setDat,mov,salsave,setMov,updetesal,saldelete,salfilter,pars,setPars,km,setKm,un,setUn,updeteunit,updeteclind,updeteproduct,updetesupp,updetecat,setCat,cat,catdelete,catfilter,catsave,setUnited,united,unitdelete,unitedsave,unitfilter,setPrice2,price2,product,setProduct,productdelete,productfilter,productsave,setSupp,supp,suppsave,suppdelete,suppfilter,setClind,cleind,clear,profilter,deleted,save,email,setEmail,phone,setPhone,name,setName,ads,setAds,price,setPrice,text,setText,dis,setDis,search,setSearch}}>
      {children}
    </contact.Provider>
  )

}
export const Aye=()=>useContext(contact)

export default Context