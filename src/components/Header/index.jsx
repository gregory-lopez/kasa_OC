import logo from '../../assets/LOGO_header.png'
import { Link } from 'react-router-dom'
import '../../styles/header.css'
 
function Header() {
    return ( 
        
        <header className="header-container-wrapper"> 
        <div className='header-container'>
            <div>
                <img src={logo} alt="Logo du site" />
            </div>
            <div>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                </nav>
            </div>
        </div>
        </header>  
    )
}

export default Header