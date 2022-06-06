import logo from './logo.svg';
import Nav from './components/nav';
import Section from './components/section';
//import './App.css';
import './css/app.css'

const App = () => {

  return(
    <div className="app-contenido">
      <Nav/>
      <header className="app-tittle-1">
        <h1 id="app-tittle">Andres Quintero</h1>
      </header>
      <Section
        title="Section 1"
        subtitle={    
          <div>
            <p>
              Nulla facilisi. Aenean neque eros, maximus nec enim eu, dapibus tristique urna. 
              Aenean malesuada orci sapien, eget posuere tortor ultricies sed. Nullam nec ante 
              vel ex molestie laoreet vel ac purus. Aliquam condimentum, tortor eu condimentum 
              lementum, quam ante dictum enim, id ultrices lacus ex ac ipsum. Praesent cursus, 
              sapien at bibendum ultricies, elit elit rhoncus sem, ut luctus nisl odio at nulla. 
              Cras magna tellus, pellentesque sed bibendum et, cursus eget massa. Quisque ante 
              metus, accumsan a vulputate sed, luctus a orci. Praesent vel eros ac odio consequat 
              tempus et ac justo. Fusce interdum sapien justo, id semper nisl euismod ac. Nulla 
              quis lacus non ante facilisis auctor eu eu nisi. Nam id orci felis. Donec ac 
              lacinia lacus. Nunc at euismod neque. Praesent vestibulum tellus sed purus porttitor,
              quis dictum arcu cursus. Mauris aliquet molestie velit sit amet dignissim.
            </p>
          
          </div>
        }
        dark={true}
        id="section1"
      />
      
      <Section
        title="Section 2"
        subtitle={    
          <div>
            <p>
              Nulla facilisi. Aenean neque eros, maximus nec enim eu, dapibus tristique urna. 
              Aenean malesuada orci sapien, eget posuere tortor ultricies sed. Nullam nec ante 
              vel ex molestie laoreet vel ac purus. Aliquam condimentum, tortor eu condimentum 
              lementum, quam ante dictum enim, id ultrices lacus ex ac ipsum. Praesent cursus, 
              sapien at bibendum ultricies, elit elit rhoncus sem, ut luctus nisl odio at nulla. 
              Cras magna tellus, pellentesque sed bibendum et, cursus eget massa. Quisque ante 
              metus, accumsan a vulputate sed, luctus a orci. Praesent vel eros ac odio consequat 
              tempus et ac justo. Fusce interdum sapien justo, id semper nisl euismod ac. Nulla 
              quis lacus non ante facilisis auctor eu eu nisi. Nam id orci felis. Donec ac 
              lacinia lacus. Nunc at euismod neque. Praesent vestibulum tellus sed purus porttitor,
              quis dictum arcu cursus. Mauris aliquet molestie velit sit amet dignissim.
            </p>
          
          </div>
        }
        dark={true}
        id="section2"
      />

      <Section
        title="Section 3"
        subtitle={    
          <div>
            <p>
              Nulla facilisi. Aenean neque eros, maximus nec enim eu, dapibus tristique urna. 
              Aenean malesuada orci sapien, eget posuere tortor ultricies sed. Nullam nec ante 
              vel ex molestie laoreet vel ac purus. Aliquam condimentum, tortor eu condimentum 
              lementum, quam ante dictum enim, id ultrices lacus ex ac ipsum. Praesent cursus, 
              sapien at bibendum ultricies, elit elit rhoncus sem, ut luctus nisl odio at nulla. 
              Cras magna tellus, pellentesque sed bibendum et, cursus eget massa. Quisque ante 
              metus, accumsan a vulputate sed, luctus a orci. Praesent vel eros ac odio consequat 
              tempus et ac justo. Fusce interdum sapien justo, id semper nisl euismod ac. Nulla 
              quis lacus non ante facilisis auctor eu eu nisi. Nam id orci felis. Donec ac 
              lacinia lacus. Nunc at euismod neque. Praesent vestibulum tellus sed purus porttitor,
              quis dictum arcu cursus. Mauris aliquet molestie velit sit amet dignissim.
            </p>
          
          </div>
        }
        dark={true}
        id="section3"
      />
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
