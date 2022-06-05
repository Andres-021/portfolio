import '../css/nav.css';


const Nav = () => {
  return(
    <nav className="Nav-Content">
      <div className="Nav-Tittle">
        <div className="logo">LOGO</div>
      </div>
      <ul className="Nav">
        <li><a href="/">Inicio</a></li>
        <li><a href="/aboutme">Acerca de mi</a></li>
        <li><a href="/proyects">Proyectos</a></li>
      </ul>
    </nav>
  )
};

export default Nav;
