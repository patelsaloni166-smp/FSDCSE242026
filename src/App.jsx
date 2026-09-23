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
function App() {
 

  return (
    <div style={{border:"2px solid red",backgroundColor:"skyblue",height:"60vh",width:"30vw" }}> 
    {/* <h2 style={{border:"2 px solid green" ,height:"60vh",width:"30vw",}}>Welcome to React App Development</h2> */}
      {/* <ICardGallery/> */}
      {/* <MyState/> */}
      {/* <ColorChange/> */}
      {/* <Set/> */}
      <ImageManipulation/>
    </div>
  )
}

export default App
