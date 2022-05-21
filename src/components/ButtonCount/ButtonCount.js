import '../ButtonCount/ButtonCount.css'

const ButtonCount = (props) => {
    return (
        
             <button className='btn-card' style={{color:props.color}} onClick={props.handleClick}>{props.label}</button>
      
       
    )
}

export default ButtonCount