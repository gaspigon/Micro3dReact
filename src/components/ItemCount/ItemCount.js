import {useState} from 'react'
import ButtonCount from '../ButtonCount/ButtonCount'

const Itemcount = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((count) => count -1)
    }

    const increment = () => {
        setCount(count + 1)
    }


    return(
        <div style={{display: 'flex',justifyContent:'center', height: 50}}>
            <ButtonCount handleClick ={decrement} label='-' color='red'/>
            <p style={{fontSize: 20, margin:10}}>{count}</p>
            <ButtonCount handleClick={increment} label='+' color='green' />
        </div>
    )
}

export default Itemcount