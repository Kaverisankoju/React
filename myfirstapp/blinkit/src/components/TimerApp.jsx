import { useEffect, useState } from "react"

function Timer(){
    const [count,setcount] = useState(0)
    const [start,setstart] = useState(false)


    const handleStart=()=>{
        setstart(true)
    }


    const handleStop=()=>{
        setstart(false)
    }


    const handleReset=()=>{
        setcount(0)
        setstart(false)
    }


    useEffect(()=>{
        let Id;
        if (start){
        Id = setInterval(() => {
            setcount((a)=>a+1)
        }, 1000);
    }
    return()=>{clearInterval(Id)}
    },[start])



    return(
       <div style={{textAlign:'center',marginTop:'15%'}}>
       <h1>Count:{count}</h1>
       <button style={{marginRight:'10px',background:'lightblue',fontFamily:'fantasy', fontSize:'larger', width:'130px',height:'50px'}} onClick={handleStart}>Start</button>
       <button style={{marginRight:'10px',background:'lightblue',fontFamily:'fantasy', fontSize:'larger',width:'130px',height:'50px'}} onClick={handleReset}>Reset</button>
       <button  style={{marginRight:'10px',background:'lightblue',fontFamily:'fantasy',fontSize:'larger',width:'130px',height:'50px'}} onClick={handleStop}>Stop</button>
       </div> 
    )
}
export default Timer