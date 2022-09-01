import React , {useState, createContext} from 'react'
import Child from './Child'

export const GlobalContext = createContext();

export default function App1() {

  const [color, setColor] = useState("red") 
  const [name, setName] = useState("Ajay") 
  const updateColor = (item) =>
  {
    console.log(item)
    console.log("Function called in parent")
    setColor(item)
  }
  return (
    <GlobalContext.Provider value={{appColor:color, appName:name , appAddress:'A', updateColor :updateColor}}>
    <div> 
      <h1 style={{color:color}}> Parent Component </h1>

      <Child /> 


    </div>
    </GlobalContext.Provider>
  )
}
