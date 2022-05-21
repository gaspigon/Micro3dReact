import '../ItemCard/ItemCard.css'
import Itemcount from '../ItemCount/ItemCount'

const ItemCard = () => {
    return(
        <div className='box-card'>
            <img className='img-card' src='./images/anycubic2.png' alt=''  />
            <p>Anycubic Photon</p>
            <Itemcount />
        </div>
    )
}

export default ItemCard