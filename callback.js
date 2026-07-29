function register(cb){
setTimeout(()=>{
    console.log("register here");
    cb();
},4000)
    
}
function login(cb){
    setTimeout(()=>{
  console.log("login here");},5000)
  cb();
  
}
function getdata(cb){
    setTimeout(()=>{
    console.log("getdata here");
    cb();
},4000)
}
function displaydata(){
setTimeout(()=>{   console.log("displaydata here");

   },2000)
}

// callback hellproblem
register(
    ()=>{
        login(
            ()=>{
                getdata(
                    ()=>{
                        displaydata();
                    }
                )
            }
        )
    });
        

console.log("call another application");