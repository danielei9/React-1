import '../css/Testimonio.css'
export function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                src={require(`../imagenes/${props.imagen}.PNG`)}
                alt={`foto de  ${props.nombre}`}
            />
            <div className='contenedor-texto-testimonio'>
                <p className="nombre-testimonio"><b>{props.nombre} <b/>en </b>{props.pais}<b/></p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa} </p>
                <p className="texto-testimonio">{props.testimonio} </p>
            </div>
        </div>
    );
}
