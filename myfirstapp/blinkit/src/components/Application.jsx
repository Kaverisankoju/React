import React from "react"
import CustomNavbar from "./CustomNavbar"
import CustomCarosel from "./CustomCarosel"
class Application extends React.Component{
  constructor(){
    super()
    this.state = {
        recipes:[]
    }
  }

  componentDidMount(){
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((response)=>{
        this.setState({recipes:response.recipes})
    });
  }
  render(){
    return(
        <>
        <CustomNavbar/>
        <CustomCarosel/>
        {this.state.recipes.length>0?<>
        {this.state.recipes.map((each)=><img src={each.image}  style={{width:"300px"}}/>)}
        </>:'no data'}
        </>
    )
  }

}
export default Application