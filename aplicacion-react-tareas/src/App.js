import './App.css';
import Logo from './componentes/Logo'
import Tarea from './componentes/Tarea'
import ListaDeTareas from './componentes/ListaDeTareas'
import logo from './logo.svg';

function App() {
  return (
    <div className="aplication-tareas">

      <Logo logoImage={logo} />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
