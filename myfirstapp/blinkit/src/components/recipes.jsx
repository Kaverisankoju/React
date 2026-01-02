import CustomCarosel from "./CustomCarosel"
import CustomNavbar from "./CustomNavbar"
import React from "react"
import axios from 'axios'
class RecipesApp extends React.Component{
   constructor(){
    super()
    this.state={
        recipes:[]
    }
   }

   
   fetchrecipes=async()=>{
    try{
        let response = await axios.get('https://dummyjson.com/recipes')
        console.log(response.data.recipes)
        this.setState({recipes:response.data.recipes})

    }catch(err){
    console.log("my error",err)
    }
   }

   componentDidMount(){
    this.fetchrecipes()
   }

   render(){
    return(
        <>
        <CustomNavbar/>
        <CustomCarosel/>
        {this.state.recipes.length>0?<>
        {this.state.recipes.map((each)=><img src={each.image}  style={{width:"300px"}}  />)}
        </>:'no data'}
        </>
    )
   }
}
export default RecipesApp