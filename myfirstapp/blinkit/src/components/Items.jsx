import { useEffect, useState } from "react"
import CustomCarosel from "./CustomCarosel"
import CustomNavbar from "./CustomNavbar"
import { Link } from "react-router"
import { CustomSpinner } from "./CustomSpinner"


function Items(){
    const [recipes,setrecipes] = useState("")

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then((jsondata)=>{
            setrecipes(jsondata.recipes)
        });
    },[])
  return(
    <>
    <CustomNavbar/>
    <CustomCarosel/>
    {recipes.length>0?<>
    {recipes.map(e=><Link to={`/recipe/${e.id}`}><img src = {e.image} style={{width:'300px'}}/></Link>)}
    </>:<CustomSpinner/>}
    </>
  )
}
export default Items