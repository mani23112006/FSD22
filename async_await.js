function register(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("register here");
    resolve();
  
   
},4000)
    })  
}


function login(){
    return new Promise((resolve,reject)=>{
 setTimeout(()=>{
  console.log("login here");},5000);
  resolve();
    })
  
}
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("getdata here");
        resolve();
    },4000)
    })
}
function displaydata(){
setTimeout(()=>{  
     console.log("displaydata here");

   },2000)
}

// register()
// .then(login)
// .then(getdata)
// .then(displaydata)
// .catch((err)=>{
//     console.log("error occured",err);

// })
        
async function test(){
    try{
       await register();
        await login();
        await getdata();
         displaydata();// display data is not promise so we can not use await here

    }
    catch(err){
console.log("error occured",err);
    }
}

console.log("call another application");
test();