# Título del Proyecto

Trata de la realización de cursos de react y una Guia de los apartados mas interesantes que se me han ocurrido . Consta de 3 proyectos y una guia de react
## Comenzando 🚀

_Cada carpeta dentro del repositorio indica un proyecto en react_

### Proyecto 1 - Testimonios
<img src="./docs/1.PNG"   height="300" />

### Proyecto 2 - Contador de Cicks
<img src="./docs/2.PNG"   height="300" />

### Proyecto 3 - Lista de Tareas editables
<img src="./docs/3.PNG"  height="300" />

**Crear app** _ (llamada mi-app)_:
``` 
npx create-react-app mi-app 
```
**Star App**:
``` 
npm start
``` 

### Pre-requisitos 📋

_Puede realizar un npm install si fuese necesario_

```
 npm install 
```

## Ejecutando las pruebas ⚙️

Compiled successfully!

You can now view aplicacion-react-tareas in the browser.

  Local:            [http://localhost:3000](http://localhost:3000 "http://localhost:3000")
  On Your Network:  [http://192.168.56.1:3000](http://192.168.56.1:3000 "http://192.168.56.1:3000")

Note that the development build is not optimized.
To create a production build, use npm run build.
webpack compiled successfully
# Guia React

## Props
### Pasar atributos a los componentes:
Por ejemplo tenemos nuestros componentes Contador y Boton1/Boton2 ...  numClicks es un prop texto es otro prop 

```html
        <Contador numClicks={numClicks} />
        <Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
```
### Recibir datos en componentes:
Partiendo del siguiente componente podemos obtener datos de los props como atributos de la funcion Boton que los pasamos como un objeto js {} o directamente accediendo al objeto js propsArg y llamando a su proiedad.
```js
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
```
## Hooks
Con los hooks puedes pasar variables dinamicas a los componentes de funcion mediante setters y props
es necesario : 
```js  
import { useState } from "react"

const [numClicks, setNumClicks] = useState(0); // 0 es el state inicial // la variable a usar es numClicks // el setter para editar esta variable es setNumClicks

const manejarClick = () => {
    setNumClicks(numClicks + 1);
}; //

const reiniciarContador = () => {
    setNumClicks(0);
}; //
```
### Pasar texto a los componentes mediante etiqueta de cierre 
    
```js    
<Boton>1</Boton>
```
Recibir estos datos en componente
```js    
return (
    <div>
        {props.children}
    </div>
);
```

### Se puede hacer clases dinamicas en react y css 
```js
className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
```
Utilizamos ${} para llamar a una funcion y en caso true se adjunta la clase operador en caso false null. ** ( Operador ternario  ?) **
para ello se define en el componente la funcion a llamar.
```js
const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
}
```

y cambiamos  
```js
import React from 'react';  // importante en este caso que sea mayuscula React
```

quedando el componente tal que asi:
```js
import React from 'react';

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    
    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}> /*trimEnd borra espacios al final del string */
            {props.children}
        </div>
    );
}
export default Boton;
```

**se crean plantillas de css con  \`\`     =>  EJEMPLO: 
```js
`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`
```
en estas se pueden implementar con codigo js mediante {} con lo que llamamos a esOperador pasandole como atributos lo que hay entre las llaves

### Para componentes tipo flecha
 Para componentes sencillos se puede usar esta semantica con tipo flecha
```js
const Pantalla = ({ input }) => (
    <div className="input">
        {input}
    </div>
);
export default Pantalla; 
```

Hooks
```js
import { useState } from 'react' ; /necesario para crear estados 
```

En este caso creamos un estado que el valor se refleja en input y obtenemos una fucion setter llamada setInput, input en este caso se inicializa con valor = ''
```js
  const [input, setInput] = useState('');
```

Añadir un prop a un componente 
```js
          <Boton manejarClick={agregarInput} >1</Boton>
```

y desde este lo podemos llamar, si lo importamos como (props) props.manejarClick o si lo importamos {manejarClick} manejarClick

Manejar logica de un boton mediante onclick
```js
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}  // aqui le decimos que onClick llame a una funcion de js anonima que recibe de props y se llama 
        //manejarClick pasandole de parametro lo que haya dentro de props.children que es lo que hay dentro de la instancia del objeto
        > 
            {props.children}
        </div>
```

Fragmentos para no poner un contenedor que no tiene proposito se pueden usar etiquetas en blanco como...
```js
        function ListaDeTareas(){
            return(
                <>

                </>
            )
        }
```

A la hora de representar en una lista es necesario indicar con key el orden y que este valor sea unico. este valor no es pasado como props
si lo quieres como prop hay que pasarlo duplicado con otro nombre id en este caso ... key es totalmente necesario

```js
     <div className="tareas-lista-contenedor">
        {
            tareas.map((tarea)=>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                />
            )
        }
            </div>
```

### Los componentes de clase 
En el constructor llaman a super si tiene props tambien los recibe constructor(props) y super(props)
```js
class Tarea extends React.Component{
    constructor(props){
    super(props);
}
render(){
    return <p>Mi Tarea  </p>;
    }
}
```

### El estado :
el objeto state se inicializa en el constructor para manejar los estaddos en el objeto js state

```js
    class Tarea extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                completada:true,
                color:red,
                prioridad:1
        }
        render(){
            return <p>Mi Tarea  </p>;
        }
    }
```

####  Acceder al estado 
Mediante this.state.NombrePropiedad
```js
     this.state = {
                completada:true,         // this.state.completada ... Para acceder a ellas
                color:red,               // this.state.color
                prioridad:1              // this.state.prioridad
        }
```
Por ejemplo:
```js
render(){
    return <p>Mi Tarea es de color {this.state.color}  </p>;
}
```
#### Actualizar el estado 
Mediante this.setState({ SOLO PROPIEDADES A CAMBIAR LAS OTRAS NO SE VEN AFECTADAS}) 
```js
this.setState({
    completada:false,
    color:"green"  //  prioridad no cambiar => ( prioridad:1 )
});
```
Metodos de ciclos de vida son metodos especiales de React usados para realizar 
operaciones con componentes en momentos específicos de la vida del componente en el DOM (cuando se crean, editan...)


## Construido con 🛠️


* [Youtube Course](https://www.youtube.com/watch?v=6Jfk8ic3KVk&ab_channel=freeCodeCampEspa%C3%B1ol
) - Curso realizado
* [React](https://reactjs.org/) - Framework

## Versionado 📌

V1.0 de cada proyecto realizado con componentes de funcion.
V2.0 de cada proyecto realizado con componentes de clase.


## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Daniel Burruchaga** -  [proyectos](https://github.com/danielei9)

## Licencia 📄
Este proyecto está bajo la Licencia MIT

