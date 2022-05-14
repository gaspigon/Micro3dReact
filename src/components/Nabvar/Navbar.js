import '../Nabvar/Navbar.css'


const Navbar = () => {
    return (
        <nav className="nav">
            
            <div className= "box-nav" >
                
                <h1 style={{color:'white', fontSize:30}}> Micro3D Productos & Diseños </h1> 
                <ul className="box-links">
                    <li className="links">
                        <button className="btn">Inicio</button>
                    </li>
                    <li className="links">
                        <button className="btn">Productos</button>
                    </li>
                    <li className="links">
                        <button className="btn">Contacto</button>
                    </li>
                    <li className="links">
                        <button className="btn">Nosotros</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar