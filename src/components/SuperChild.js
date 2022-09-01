import   React, {useContext} from 'react'
import { GlobalContext } from './App1'
export default function SuperChild() {
  const {appColor, updateColor} = useContext(GlobalContext);
  const color="yellow"
  return (
    <div>Child Component
<h1 style={{color:appColor}}> I am in Super Child Comp </h1>
{/* <button onClick={()=> console.log("function is called")}> 
 Update  Color </button> */}

<button onClick={()=> {updateColor(color)}}> 
 Update  Color </button>
    </div>
  )
}
