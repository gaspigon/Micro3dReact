const products = [
    {
        id: '1',
        name: 'Porta Cepillos',
        price: 500,
        category: '3d',
        stock: 25,
        description: 'Porta Cepillos'
    },
    {
        id:'2',
        name: 'Soporte Notebook',
        price: 1000,
        category: '3d',
        stock: 50,
        description: 'Soporte Para Notebooks'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(products)
            },2000)
    })
}