import React,{useEffect,useState} from 'react'

 function FetchProduct() {
  const [data,setData]=useState([]);

    useEffect(()=>{
       async function fetchData(){
            try{
          const response=await  fetch("https://dummyjson.com/products")
          const resdata=await response.json();
          console.log(resdata);
          setData(resdata.products);
            }catch(e){
                console.log("Error is:"+e)
            }finally{
                console.log("Fetching data completed.")
            }
        }
        fetchData();
    },[])
    
    // function cartData(element){

    // }


  return (
<div>
<h1>Fetch Product</h1>

  {data.map((ele) => (
    <div
      key={ele.id}
      style={{
        border: '1px solid #ccc',
        margin: '10px',
        padding: '10px'
      }}
    >
      <img
        src={ele.images[0]}
        alt={ele.title}
        height="50"
        width="50"
      />

      <h2>ID: {ele.id}</h2>
      <h2>Title: {ele.title}</h2>
      <p>Description: {ele.description}</p>
      <h2>Category: {ele.category}</h2>
      <h2>Price: ${ele.price}</h2>

      <button>Add to Cart</button>
    </div>
  ))}
</div>
  );
}

export default FetchProduct