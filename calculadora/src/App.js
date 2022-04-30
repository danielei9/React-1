import './App.css';
import logo from './logo.svg';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Logo from './componentes/Logo';

import { useState } from 'react' ;
import { evaluate } from 'mathjs' ;

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }
  
  const resetInput = () => {
    setInput('');
  }
  const calcularResultado = () => {
    if(input)
    setInput(evaluate(input));
    else{
      alert("Ingrese un valor para realizar calculos")
    }
  }

  return (
    <div className="App">
      <Logo logoImage={logo}/>
      <div className="contenedor-calculadora">
        <div className="">
          <Pantalla input={input}/>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput} >1</Boton>
          <Boton manejarClick={agregarInput} >2</Boton>
          <Boton manejarClick={agregarInput} >3</Boton>
          <Boton manejarClick={agregarInput} >+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput} >4</Boton>
          <Boton manejarClick={agregarInput} >5</Boton>
          <Boton manejarClick={agregarInput} >6</Boton>
          <Boton manejarClick={agregarInput} >-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput} >7</Boton>
          <Boton manejarClick={agregarInput} >8</Boton>
          <Boton manejarClick={agregarInput} >9</Boton>
          <Boton manejarClick={agregarInput} >*</Boton>
        </div>
        <div className="fila">
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado} >=</Boton>
          <Boton manejarClick={agregarInput} >0</Boton>
          <Boton manejarClick={agregarInput} >.</Boton>
          <Boton manejarClick={agregarInput} >/</Boton>
        </div>
        <BotonClear resetInput={resetInput} >Clear</BotonClear>
      </div>

    </div>
  );
}

export default App;
