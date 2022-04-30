import React from 'react';
import "../css/Logo.css";

function Logo(props) {
    return (
        <div className="freeCodeCamp-logo-contenedor">
            <img className="freeCodeCamp-logo" src={props.logoImage} alt="logo" />
        </div>
    );
};

export default Logo;