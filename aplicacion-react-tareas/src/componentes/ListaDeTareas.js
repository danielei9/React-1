import React from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../css/ListaDeTareas.css"
import { useState } from "react"
function ListaDeTareas() {

    //definimos los estados de las tareas y su setter
    const [tareas, setTareas] = useState([]);

    //Funcion de agregar tarea al array de tareas
    const agregarTarea = tarea => {
        console.log(tarea)
        if (tarea.texto.trim()) { // verificar si esta vacia
            tarea.texto = tarea.texto.trim(); //quitamos espacios de delante o atras (innecesarios)
            const tareasActualizadas = [tarea, ...tareas] //este operador es para juntar una tarea individual al arreglo de tareas
            setTareas(tareasActualizadas);
        }
    }

    //Funcion de eliminar tarea del array de tareas
    const eliminarTarea = id => {
        console.log("eliminar " + id)
        //se incluyen todos menos el de la id proporcionada
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        //Actualizar sin la tarea filtrada
        setTareas(tareasActualizadas);
    }

     //Funcion de editar tarea del array de tareas
     const completarTarea = id => {
        console.log("completar " + id)
        //Actualizar sin la tarea filtrada
        const tareasActualizadas = tareas.map(tarea=>{
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (

        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );
};

export default ListaDeTareas;