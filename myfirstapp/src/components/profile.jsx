// components must start with capital letter
// it will return jsx
// component must have single parent
// must need to export
// import the compontent name in the main.jsx
import React from "react"

// function Profile(){
//     return(
//         <div>
//         <h1>REACT DEVELOPER</h1>
//         <p>start the react journey</p>
//         <button>View Mode</button>
//         <OrderList/>
//         <UnorderedList/>
//         </div>
//     )
// }
// // export default Profile

// export function Items(){
//     return(
//         <ul>
//             <li>mango</li>
//             <li>apple</li>
//             <li>oranges</li>
//         </ul>
//     )
// }

// function UnorderedList(){
//     return(
//         <React.Fragment>
//             <li>laptop</li>
//             <li>phones</li>
//             <li>tv</li>
//         </React.Fragment>
//     )
// }

// function OrderList(){
//     return(
//         <ol>
//             <li>apple</li>
//             <li>mango</li>
//             <li>graps</li>
//             <li>watermelon</li>
//             <li>kiwi</li>
//             <li>orange</li>
//         </ol>
//     )
// }



let users = ["userA","userB","userC","userD"]
let currentFestival = "new year"
function UserList(){
    return(
        <>
        {users.map((val,index)=><h1 key={index}><Greetings users = {val} festival = {currentFestival}/></h1>)}
        </>
    )
}
export default UserList

function Greetings({users,festival}){
    
    return(
        <>
        {festival} {users}
        </>
    )
}
