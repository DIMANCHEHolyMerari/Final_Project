import { Link } from "react-router-dom"
import './navbar.css'

const Navbar = ()=>{
    return(
        
                <div>
            <nav className="links">
                
                <Link to ="/Home">Home</Link>
                <input placeholder=" recherche"/>
                <Link to="/AgencePlusProche">Agence plus proche</Link>
                <Link to ="/AideContact">Aide & contact</Link>
                <Link to ="/EspaceClient">Espace client</Link>
            </nav>

        
                </div>
    )
}

export default Navbar