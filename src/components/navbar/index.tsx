import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types/types';
import './index.scss';

function Navbar(){
    const pages: NavItem[] = [
        { name: 'A propos', path: 'about' },
        { name: 'Projets', path: 'projets' },
        { name: 'CV', path: 'resume' },
        { name: 'Contactez-moi', path: 'mailto:jcommaret@gmail.com?subject=Contact%20depuis%20jcommaret.github.io&body=Bonjour%20J%C3%A9r%C3%B4me%2C%0A%0AJe%20souhaite%20travailler%20avec%20vous.%0A%0AMes%20coordonn%C3%A9es%20%3A%0A%0ANom%20%3A%20%0APr%C3%A9nom%20%3A%20%0AT%C3%A9l%C3%A9phone%20%3A%20%0AEmail%20%3A%20%0A%0ACordialement' },
    ];
    return(
      <nav className="navbar">
          <ul className="navbar-list">
            {pages.map((page, id) => (
              <li key={id} className="navbar-item">
                <NavLink to={page.path} className="navbar-link" title={page.name}>{page.name}</NavLink>
              </li>
            ))}
          </ul>
      </nav>
    )
}
export default Navbar;