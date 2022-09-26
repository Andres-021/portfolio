import logo from './logo.svg';
import Nav from './components/nav';
import Section from './components/section';
//import './App.css';
import './css/app.css'
import Card from './components/card';
import Code from './img/codeImg.png'

const App = () => {

  const Cards = [
    {  
      title: "Porftolio",
      linkImg: Code,
      linkRepo: "https://andres-021.github.io/portfolio/"
    },
    {
      title: "M. biseccion",
      linkImg: Code,
      linkRepo: "https://andres-021.github.io/analisis_numerico_app/"
    },
    {  
      title: "Porftolio",
      linkImg: Code,
      linkRepo: "https://andres-021.github.io/portfolio/"
    },
    {
      title: "M. biseccion",
      linkImg: Code,
      linkRepo: "https://andres-021.github.io/analisis_numerico_app/"
    },
    {  
      title: "Porftolio",
      linkImg: Code,
      linkRepo: "https://andres-021.github.io/portfolio/"
    },
    {
      title: "M. biseccion",
      linkImg: Code,
      linkRepo: "https://andres-021.github.io/analisis_numerico_app/"
    },
  ];

  return(
    <div className="app-contenido">
      <Nav/>
      
      {/* <svg width="auto" height="auto" className='' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path fill="#29B6F6" d="M47,-63.7C62.8,-53.1,78.8,-42,86.1,-26.3C93.5,-10.7,92.1,9.4,83.5,24.4C74.9,22.4,59,49.4,43.9,59.8C28.7,70.3,14.4,81.2,0.2,80.9C-13.9,80.6,-27.8,69,-41.3,58C-54.9,47.1,-68.1,36.7,-75.4,22.5C-82.7,8.3,-84.1,-9.7,-78.1,-24.5C-72.1,-39.3,-58.7,-50.8,-44.4,-61.9C-30.2,-73,-15.1,-83.6,0.2,-83.9C15.6,-84.2,31.2,-74.3,47,-63.7Z" transform="translate(80 92)"/>

        <text x="0.5" y="50"><img src="http://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"/></text>
        <text x="0.5" y="50" fill='white' fontSize="20px">Andres Quintero</text>
          
      </svg> */}

      <Section
        title="Sobre mi"
        subtitle={    
          <div>
            <p>
              Estudiante de Ing. De Sistemas realizando 5to semestre con conocimientos en programación y muy amante de la
              misma, con motivación para ir aprendiendo nuevas tecnologías y abierto al cambio que las mismas ejerzan. Me gusta
              investigar y actualizarme acerca de los nuevos temas tecnologicos que se encuentren en la actualidad.
            </p>

            {/* <p>
              Lorem adsadsad dasdasdasipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.
            </p> */}
          
          </div>
        }
        dark={true}
        id="section1"
      />
      
      <Section
        title="Proyectos"
        subtitle={ 
          <div className='div-wrapp'>
            { 
              Cards.map((ele, i) => 
                (<Card 
                  key={i}
                  title={ele.title}
                  linkImg={ele.linkImg} 
                  linkRepo={ele.linkRepo}
                />)
              )
            }
          </div>
        }
        dark={true}
        id="section2"
      />

      <Section
        title="Habilidades"
        subtitle={    
          <div className='div-wrapper'>
          
          </div>
        }
        dark={true}
        id="section3"
      />
    </div>
  )
}


export default App;
