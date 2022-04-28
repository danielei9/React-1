import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.svg';
import Boton from "./componentes/Boton"
import Contador from "./componentes/Contador"
import { useState } from "react"

function App() {
  //Hooks
  const [numClicks, setNumClicks] = useState(0); // 0 es el state inicial

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }; //

  const reiniciarContador = () => {
    setNumClicks(0);
  }; //
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo xd"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
