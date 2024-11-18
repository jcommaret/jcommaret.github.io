import { NavLink } from 'react-router-dom';

import './index.scss';

import { NavItem } from '../../types/types';

function Navbar(){
    const pages: NavItem[] = [
        { name: 'A propos', path: 'about' },
        { name: 'Projets', path: 'projets' },
        { name: 'CV', path: 'resume' },
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