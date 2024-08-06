import { NavLink } from "react-router-dom";

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
              <NavLink to="/portfolio" className="navbar-link" title="Portfolio">Portfolio</NavLink>
            </li>

            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Blog</button>
            </li>

            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Contact</button>
            </li>

          </ul>
      </nav>
    )
}
export default Navbar;