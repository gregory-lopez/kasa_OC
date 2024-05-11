import LogoHeader from '../LogoHeader'
import Nav from '../Nav'
import '../../styles/header.css'
 
function Header() {
    return ( 
        <header className="header"> 
            <LogoHeader />
            <Nav className='nav_header' />
        </header>  
    )
}

export default Header