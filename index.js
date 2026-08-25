// console.log("hello");

// const  sum=function(a,b){
//     return a+b;
// }
// console.log(sum(2, 3));

// const sum=(a,b)=>{return a+b}
// console.log(sum(2,3))

// IIFE-Immediate invoke function as expression
// (()=>{
//     console.log("Heyy...using IIFE")
// })();


// let a=23;
// // console.log(typeof a);
// if(a>20){
//  let a=40;
//  console.log("value inside block ="+a)
// }
// console.log('value outside block='+a)

// let have block scope


// Callback function
// function sum(a,b){
//     return a+b;
// }

// function msgWithSum(clbk,msg){
//    const result= clbk(40,50);
//    console.log("Hii,"+msg+" and your result="+result)
// }

// msgWithSum(sum,"Saloni");



// function login(error,msg)
// {
//     if(error){
//         console.log("Error is:"+error)
//     }
//     else{
//         console.log(msg)
//     }
// }

// function loginhandler(username,password,clbk){
//     if(username=="Saloni@166" && password=="12345"){
//     clbk(null,"login success")
//     }
//     else{
//         clbk("username or password is incorrect",null)
//     }
// }
// loginhandler("Saloni@166","123456",login)


// console.log("one");
// // setTimeout(()=>{
// //     console.log("two")
// // },1000)
// for(i=0;i<1000;i++){
//     console.log("i="+i)
// }
// console.log("three")


// problem of callback function and resolution  


const root=document.getElementById('root');
const btn=document.getElementById('btn');

const h1=document.createElement('h1');
console.log(h1);
h1.innerText='ABES Engineering College';
console.log(btn)
console.log(root);
const loader=document.createElement("h2");
root.appendChild(loader);
const img=document.createElement("img");






function ping(){
    // alert('server ping')
  try{
    loader.innerHTML='<h2>loading Data.....</h2>'
    root.innerHTML='<h2 style=color:red>Welcome to DOM</h2>'
    h1.style.backgroundColor='cyan'
    h1.style.color='red'
    root.appendChild(h1);
    img.src="./Screenshot 2026-08-24 124656.png";
    img.setAttribute('height',300);
    img.setAttribute('width',500);
    root.appendChild(img);
}catch(e){
    loader.innerHTML='<h2 style=color:red>Error in loading</h2>'
}
finally{
     loader.innerHTML='';
    // root.removeChild(loader);
}
}

btn.addEventListener('click',ping);