import { useState } from "react"



function CounterApp1(){
    let [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

    let color_count = count>0 ? 'green':count<0?'red':'black'
   


    return(
        <div style={{textAlign:'center'}}>
        
        <h3>count</h3>
        <h1 style={{color:color_count}}>{count}</h1>
        <button onClick={decrement} style={{marginRight:'10px'}}>Decrement</button>
        <button onClick={increment}>Increment</button>
        </div>
    )


}
export default CounterApp1