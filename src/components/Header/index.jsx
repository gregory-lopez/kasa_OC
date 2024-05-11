import LogoHeader from '../LogoHeader'
import Nav from '../Nav'
import '../../styles/header.css'
 
function Header() {
    return ( 
        
        <header className="header-container-wrapper"> 
        <div className='header-container'>
            <LogoHeader />
            <Nav className='nav_header' />
        </div>
        </header>  
    )
}

export default Header