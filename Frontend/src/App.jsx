import { useEffect, useRef} from 'react';

import {Routes,Route} from "react-router-dom";
import AllCategoryPage from './pages/Frontend/AllCategoryPage';
import ErrorPage from './pages/error/ErrorPage'
import './assets/css/styles.css'
import "./assets/css/custom.css";
import NavbarPage from './layouts/NavbarPage';
import FooterPage from './layouts/FooterPage';
import LoginPage from './pages/Authentication/LoginPage'
import Homepage from './pages/Frontend/Homepage';

import RegisterPage from './pages/Authentication/RegisterPage';
import { ToastContainer} from 'react-toastify';




const App = () => {
 const ref = useRef(null);
  
  useEffect(()=>{
    ref.current.scrollIntoView({behavior: 'smooth'});
  },[]);
  return (
   <>
   <div ref={ref}></div>
   < NavbarPage/>
   <ToastContainer />
   <Routes>
       <Route path='/' element= {<Homepage/>}/>
       <Route path='category' element= {<AllCategoryPage/>}/>
       <Route path='about' element= {<h1>about Page</h1>}/>
       <Route path='contact' element= {<h1>conact Page</h1>}/>
       <Route path='login' element= {<LoginPage />}/>
       <Route path='register' element= {<RegisterPage />}/>
       <Route path='products' element= {<h1>product Page</h1>}/>
       <Route path='single-product' element= {<h1>single-product Page</h1>}/>
       <Route path='cart' element= {<h1>cart Page</h1>}/>
       <Route path='checkout' element= {<h1>checkout Page</h1>}/>
       <Route path='payment' element= {<h1>payment Page</h1>}/>
       <Route path='order' element= {<h1>order Page</h1>}/>
       <Route path='order-sucess' element= {<h1>order-sucess Page</h1>}/>
       <Route path='order-failed' element= {<h1>order-failed Page</h1>}/>
       <Route path='order-failed' element= {<h1>order-failed Page</h1>}/>
       <Route path='*' element= {<ErrorPage/>}/>
       
   </Routes>
   <FooterPage/>
   <button onClick={()=> window.scrollTo({top: 0, behavior:'smooth'})}>Scroll to Top</button>
   </>
  )
}

export default App