import React from "react"
class CounterApp extends React.Component{
    state={
        count:0
    }
    increment=()=>{
       this.setState({count:this.state.count+1})
    }

    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
 render(){
    return(
        <div style={{margin:'3%'}}>
            <h1>Counter Application</h1>
            <div style={{display:"flex",justifyContent:"center",gap:'2px'}}>
            <button onClick={this.decrement}>Decrement</button>
            <p>Count :{this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            </div>
        </div>
    )
 }
}
export default CounterApp