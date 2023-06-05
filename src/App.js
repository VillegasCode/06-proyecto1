import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  
    const [listadoState, setListadoState] = useState([]);

    return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido Principal*/}
        <section id="content" className="content">
            {/*AQUÍ VA EL LISTADO DE PELÍCULAS*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/*Barra lateral de búsqueda de pelis*/}
        <aside className="lateral">
            <Buscador />
        
            {/*Agregar Películas en la barra lateral*/}
            <Crear setListadoState={setListadoState} />
        </aside>

        {/*FOOTER PIE DE PÁGINA*/}
        <footer className="footer">
            &copy; Master en JavaScript ES12 y TypeScript - <a href="https://empresarioencasa.org">Empresario en Casa.org</a>
        </footer>
    </div>
  );
}

export default App;
