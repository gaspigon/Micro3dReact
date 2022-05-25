import {useState} from 'react'
import ButtonCount from '../ButtonCount/ButtonCount'




const Itemcount = ({stock}) => {
    const [count, setCount] = useState(1)

    const decrement = () => {
        if (count > 1) setCount((count) => count -1)
    }

    const increment = () => {
        if (count < stock)setCount(count + 1)
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