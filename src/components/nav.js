import { Link, animateScroll as scroll } from "react-scroll";
import '../css/nav.css';


const Nav = () => {

  return(
    <div className="Bar-Content">
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
          {/* <li class="logo">
            <a href="#">Invisible App</a>
          </li>

          <li class="toggle">
            <a href="#">
              <i class="fas fa-bars"></i>
            </a>
          </li> */}

          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-160}
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
              offset={-160}
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
              offset={-160}
              duration={500}
            >
              Habilidades
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
