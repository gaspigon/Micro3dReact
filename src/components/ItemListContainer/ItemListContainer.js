import '../ItemListContainer/ItemListContainer.css'
import {useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    useEffect(() =>{
        getProducts().then(response =>{
            setProducts(response)
        })
    },[])
    
    return(
        <div>
            <p>hola a todos</p>
            { products.map(product => <p>{product.name}</p>) }
        </div>
    )
}

export default ItemListContainer