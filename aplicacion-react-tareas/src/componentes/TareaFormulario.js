import { React, useState } from 'react';
import "../css/TareaFormulario.css"
import { v4 as uuidv4 } from "uuid"
function TareaFormulario(props) {
    const [input, setIntput] = useState("");

    const manejarCambio = e => {
        // console.log(e.target.value)
        setIntput(e.target.value) //valor del input en tiempo real (cada vez que cambia))
    }

    const manejarEnvio = e => {
        console.log(e)
        e.preventDefault();
        // e.preventDefault(); // solo se llama una vez
        console.log("enviar")
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input className="tarea-input"
                type="text"
                placeholder="Escriba una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button
                className="tarea-boton"
                onClick={() => manejarEnvio()}>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario;