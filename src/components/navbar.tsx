// Navlink
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
      <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink to="/about" className="navbar-link" title="A propos">A propos</NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/resume" className="navbar-link" title="CV">CV</NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/side-projects" className="navbar-link" title="Side Projects">Side Projects</NavLink>
            </li>

           

            <li className="navbar-item">
              <NavLink to="https://calendly.com/jcommaret/" target="_blank" rel="noopener noreferrer" className="navbar-link" title="Contact">Contact</NavLink>
            </li>
          </ul>
      </nav>
    )
}
export default Navbar;