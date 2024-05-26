import { Link } from 'react-router-dom';
import '../../styles/error.css';

  function ErrorPage() {
      return (
          <div className="error-container">
            <h2 className="error-heading">404</h2>
            <h3 className="error-message">
              <span className="short-top">Oups! La page que</span> 
              <span className="long-bottom"> vous demandez n'existe pas.</span>
            </h3>
            <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
          </div>
        );
  }
   

  export default ErrorPage