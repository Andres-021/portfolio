import { Link, animateScroll as scroll } from "react-scroll";
import '../css/nav.css';


const Nav = () => {

  return(
    <nav className="Nav-Content">
      {/* <div className="Nav-Tittle">
        <div className="logo">LOGO</div>
      </div> */}
      {/* <ul className="Nav">
        <li><a href="/">Inicio</a></li>
        <li><a href="/aboutme">Sobre mi</a></li>
        <li><a href="/projects">Proyectos</a></li>
      </ul> */}
      <ul className="Nav">
        <li>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-145}
            duration={500}
          >
            Sobre mi
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-145}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-145}
            duration={500}
          >
            Otras cosas
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
