import   React, {useContext} from 'react'
import { GlobalContext } from './App1'
import SuperChild from './SuperChild';
export default function Child() {
  const {appColor,appName,appAddress} = useContext(GlobalContext);
  console.log("Inside Child" + appColor)
  console.log(appName)
  return (
    <div>Child Component
<h1 style={{color:appColor}}> I am in Child Comp , my name is {appName} at {appAddress} </h1>
<SuperChild/>
    </div>
  )
}
