import React from 'react';

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
            <a className="nav-link active" href="#">Tienda Rey
            <span className="visually-hidden">(current)</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Noticias</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
        </li>
        </>
    );
}

export default Secciones;
