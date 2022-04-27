import logo from './logo.svg';
import './App.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  let jhon ={
    nombre: 'Jhon Rolsro',
    pais: 'Madrid',
    imagen: 'Captura',
    cargo: 'ING. Software',
    empresa: 'prodYsolve',
    testimonio: 'Yo solo vengoaqui para ver todo como Siempre me ha gsutado todo lo que trata de proges pero me gusta mucho no puedo ver'
  }
  return (
    <div className="App">
      <div className="">
        <h1 className="">Hola este es ubn titulotitulotitulotitulotitulo titulo asa</h1>
        <Testimonio nombre="Jhon Rolsro" pais="Madrid" imagen="Captura" cargo="ING. Software" empresa="prodYsolve" testimonio="Yo solo vengoaqui para ver todo como Siempre me ha gsutado todo lo que trata de proges pero me gusta mucho no puedo ver "/>
        <Testimonio nombre="Sarah Meloco" pais="Suecia" imagen="sarah" cargo="ING. Software" empresa="spotify" testimonio="Siempre me ha gsutado todo loYo solo vengoaqui para ver todo como es pero me gusta mucho no puedo ver que trata de programacion jaja "/>
        <Testimonio nombre="Emma Bostons" pais="Suecia" imagen="emma" cargo="ING. Software" empresa="spotify" testimonio="Siempre me ha gsutado todo loYo solo vengoaqui para ver todo como es pero me gusta mucho no puedo ver que trata deYo solo vengoaqui para ver todo como es pero me gusta mucho no puedo ver que trata de que trata de programacion jaja "/>
     
      </div>
    </div>
  );
}

export default App;
