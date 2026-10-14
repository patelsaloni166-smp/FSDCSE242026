import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange' 
import Set from './components/Set'
import ImageManipulation from './components/ImageManipulation'
import MyUseEffect from './components/MyUseEffect'
import FetchProduct from './components/FetchProduct.'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Registration from './components/Registration'
function App() {
 

  return (
    <div>
  <BrowserRouter>
  <Routes>
     <Route path='/' element={<Home/>}>
    <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Registration/>}></Route>
    </Route>

      <Route path='/dashboard' element={<Dashboard/>}></Route>
    
  </Routes>
  </BrowserRouter>
    </div>
    // <div style={{border:"2px solid red",backgroundColor:"skyblue",height:"60vh",width:"100vw" }}> 
    // {/* <h2 style={{border:"2 px solid green" ,height:"60vh",width:"30vw",}}>Welcome to React App Development</h2> */}
    //   {/* <ICardGallery/> */}
    //   {/* <MyState/> */}
    //   {/* <ColorChange/> */}
    //   {/* <Set/> */}
    //   {/* <ImageManipulation/> */}
    //   {/* <MyUseEffect/> */}
    //   <FetchProduct/>
    // </div>
  )
}

export default App
