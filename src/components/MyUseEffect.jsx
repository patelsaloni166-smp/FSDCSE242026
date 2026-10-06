import React,{useEffect,useState} from 'react'

function MyUseEffect() {
    const [count,setCount]=useState(0);
    const [pointer,setPointer]=useState(100);
    
    function increment(){
        setCount(count+10);
    }
 
    function decreasePointer(){
        setPointer(pointer-5);
    }
  
    useEffect(()=>{
        console.log("Hii..using useEffect react hook");
        console.log("Counter ="+ count)
        console.log("Pointer="+pointer);
    },[pointer,count])

  return (

    <div>
<h2>Counter App</h2>
<h1 style={{color:'blue', fontSize:'24px'}}>Counter Value={count}</h1>
<h1 style={{color:'blue', fontSize:'24px'}}>Pointer Value={pointer}</h1>
<button onClick={increment}>Counter</button><br></br>
<button onClick={decreasePointer}>pointer</button>
    </div>
  )
}

export default MyUseEffect



// In Development Mode, React intentionally mounts, unmounts, and remounts every component one extra time on startup [StrictMode Note]. This causes your useEffect to run twice, which is why you see your console.log ("clg") output two times.