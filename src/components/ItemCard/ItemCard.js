import '../ItemCard/ItemCard.css'
import Itemcount from '../ItemCount/ItemCount'

const ItemCard = ({id, name, price,img,stock}) => {
    
    return(
       <div className='box-card'>
                    <img className='img-card' alt='imagen' src={img}/>
                     <p>{name}</p>
                     <p>{price}</p>
                     <p>Stock Disponible: {stock}</p>
                     <Itemcount stock={stock}/>
        </div>
    
)
}

export default ItemCard