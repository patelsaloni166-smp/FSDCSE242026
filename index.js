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



function login(error,msg)
{
    if(error){
        console.log("Error is:"+error)
    }
    else{
        console.log(msg)
    }
}

function loginhandler(username,password,clbk){
    if(username=="Saloni@166" && password=="12345"){
    clbk(null,"login success")
    }
    else{
        clbk("username or password is incorrect",null)
    }
}
loginhandler("Saloni@166","123456",login)