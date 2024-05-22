import logo from '../../assets/LOGO_header.png'
import { Link } from 'react-router-dom'
import '../../styles/header.css'
 
function Header() {
    return ( 
        
        <header className="header-container-wrapper"> 
        <div className='header-container'>
            <div className='header-logo_container'>
                <h1>
                <img src={logo} alt="Kasa" />
                </h1>
            </div>
            <div className='header-nav_container'>
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