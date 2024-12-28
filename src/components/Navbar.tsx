import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1><a href="#about">John Black</a></h1>
      </div>
      <ul className="navbar-links">
        <li>
            <Link to="about" smooth={true} duration={500} offset={-73}>
                About Me
            </Link>
        </li>
        <li>
            <Link to="skills" smooth={true} duration={500} offset={-73}>
                Skills
            </Link>
        </li>
        <li>
            <Link to="projects" smooth={true} duration={500} offset={-73}>
                Projects
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
