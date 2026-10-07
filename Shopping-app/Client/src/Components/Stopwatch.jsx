import React from 'react'

const Stopwatch = () => {
    const [running,setRunning]=usestate(false);
    const[timer,setTimer]=useState(0);
    function handleRunning(){
        setRunning(!running);
    }
    function handleReset(){
        setTimer(0);
    }
    useEffect(()=>{
        let interval;
        console.log("Running");
        if(!running) return ;
        
            interval=setInterval(()=>{
                setTimer((prev)=>prev+10)
            },10)
        
        return ()=>clearInterval(interval);
    },[running])
    const min=Math.floor(timer/6000);
    const sec=Math.floor((timer%6000)/1000);
    const mil=Math.floor(timer%1000);
  return (
    <div>
      <h1>Stopwatch</h1>
      
      <div id="min">{min}:</div>
      <div id="sec">{sec}:</div>
      <div id="mil">{mil}</div>
      <button className="btn"onclick={handleRunning}>{running ? "STOP" : "START"}</button>
      <button className="btn" onclick={handleReset}>Reset</button>

      </div>
   
  )
}

export default Stopwatch
