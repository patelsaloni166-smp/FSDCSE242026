import React,{useEffect} from 'react'

export default function FetchProduct() {

    useEffect(()=>{
        function fetchData(){
            try{
            fetch("https://dummyjson.com/products")
            }catch(e){
                console.log("Error is:"+e)
            }finally{
                console.log("Fetching data completed.")
            }
        }
        fetchData();
    })

  return (
    <div></div>
  )
}
