import { useState } from "react" //HOOKS

const CountFunction = (props) =>{
   

    // const state = useState(0)
    // const count = state[0]
    // const setCount = state[1]

    const [count, setCount] = useState(0)

    
   const decrement = () => {
        setCount(count - 1)
   }

   const increment = () => {
       setCount(count + 1)
   }
   
   
   
    return(
        <h1 >Contador Funcion</h1>
    )
}

export default CountFunction