# React-1
https://www.youtube.com/watch?v=6Jfk8ic3KVk&ab_channel=freeCodeCampEspa%C3%B1ol

Crear app:
npx create-react-app mi-app
Star App:
npm start
//--------------------------------------------------------------------------------------------
//props  -------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

    Pasar atributos a los componentes:
        /*
        Por ejemplo tenemos nuestros componentes Contador y Boton1/Boton2 ...  numClicks es un prop texto es otro prop 
        <Contador numClicks={numClicks} />
        <Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
        */

    Recibir datos en componentes:
        Partiendo del siguiente componente podemos obtener datos de los props como atributos de la funcion Boton que los pasamos como un objeto js {} o directamente accediendo al objeto js propsArg   
        y llamando a su proiedad.
        /*
        import React from 'react';
        import "../css/Boton.css"
        function Boton({ texto, esBotonDeClick, manejarClick }) {
        //function Boton(props) {   //  en caso  de obj js props
            return (
                <button
                    className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
                    //className={props.esBotonDeClick ? "boton-click" : "boton-reiniciar"} //  en caso  de obj js props
                    onClick={manejarClick}
                    //onClick={props.manejarClick} //  en caso  de obj js props
                    >
                    {texto}
                    //{props.texto} //  en caso  de obj js props
                </button>
            )
        }
        export default Boton;
        */
//--------------------------------------------------------------------------------------------
//Hooks -------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
  Con los hooks puedes pasar variables dinamicas a los componentes mediante setters y props

es necesario : 
        -  import { useState } from "react"
    /*
        const [numClicks, setNumClicks] = useState(0); // 0 es el state inicial // la variable a usar es numClicks // el setter para editar esta variable es setNumClicks
        
        const manejarClick = () => {
            setNumClicks(numClicks + 1);
        }; //

        const reiniciarContador = () => {
            setNumClicks(0);
        }; //
    */