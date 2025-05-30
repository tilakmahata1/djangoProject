import React from 'react'
import {Routes,Route} from "react-router-dom"
import AllCategoryPage from './pages/Frontend/AllCategoryPage'

const App = () => {
  return (
   <>
   <Routes>
       <Route path='/' element= {<h1>Home Page</h1>}/>
       <Route path='category' element= {<AllCategoryPage/>}/>
       <Route path='about' element= {<h1>about Page</h1>}/>
       <Route path='contact' element= {<h1>conact Page</h1>}/>
       <Route path='login' element= {<h1>login Page</h1>}/>
       <Route path='register' element= {<h1>register Page</h1>}/>
       <Route path='products' element= {<h1>product Page</h1>}/>
       <Route path='single-product' element= {<h1>single-product Page</h1>}/>
       <Route path='cart' element= {<h1>cart Page</h1>}/>
       <Route path='checkout' element= {<h1>checkout Page</h1>}/>
       <Route path='payment' element= {<h1>payment Page</h1>}/>
       <Route path='order' element= {<h1>order Page</h1>}/>
       <Route path='order-sucess' element= {<h1>order-sucess Page</h1>}/>
       <Route path='order-failed' element= {<h1>order-failed Page</h1>}/>
   </Routes>
   </>
  )
}

export default App