import { Link } from 'react-router-dom'


function Nav() {
    return (
            <div>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                </nav>
            </div>
    )
}

export default Nav