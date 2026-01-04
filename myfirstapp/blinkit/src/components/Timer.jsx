import { useEffect, useState } from "react"

export function Toggle(){
    const [show,setShow] = useState(true)
    const hidecom=()=>{
        setShow(false)
    }

    const showcom=()=>{
      setShow(true)
    }
    return(
        <div style={{textAlign:'center'}}>
        <button  style={{marginBottom:'10px',color:'white',background:'black'}}  onClick={hidecom}>hide</button>
        <button  style={{marginLeft:'10px',color:'white',background:'black'}} onClick={showcom}>show</button>
        {show?<TimerApp/>:'timer is cleared'}
        </div>
    )
}

function TimerApp(){
  let [count,setCount] = useState(0)
  useEffect(()=>{
    
    const interId = setInterval(() => {
        setCount(prev=>prev+1)     //to increase the count for every one second
    }, 1000);
    return()=>{clearInterval(interId)}   //after hide button clicked it clears internal intervel
  },[])
  
  const increment=()=>{
    setCount(prev=>prev+1)
  }

  const decrement=()=>{
    setCount(prev=>prev-1)
  }

  return(
    <div style={{textAlign:'center'}}>
    <button  style={{background:'lightblue',color:'black'}} onClick={decrement}>decrement</button>
    <p>count:{count}</p>
    <button style={{background:'lightblue',color:'black'}} onClick={increment}>increment</button>
    </div>
  )
}
export default TimerApp
