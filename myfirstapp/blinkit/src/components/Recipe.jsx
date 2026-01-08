import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { CustomSpinner } from "./CustomSpinner"

function Recipe(){
    const [recipe,setrecipe] = useState("")
    const value = useParams()
    useEffect(()=>{
        fetch('https://dummyjson.com/recipes/1')
.then(res => res.json())
.then((jsondata)=>{
    setrecipe(jsondata)
});
    })
    return(
        <>
        {recipe?
        <><img src = {recipe.image}  style={{width:'300px'}}/>
        
        </>:
        <CustomSpinner/>}
        </>
    )

}
export default Recipe