import { Listado } from "./components/Listado";

function App() {
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
            <Listado />
        </section>

        {/*Barra lateral de búsqueda de pelis*/}
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" />
                    <button>Buscar</button>
                </form>
            </div>
        
            {/*Agregar Películas en la barra lateral*/}
            <div className="add">
                <h3 className="title">Añadir Película</h3>
                <form>
                    <input type="text" placeholder="Titulo" />
                    <textarea placeholder="Descripción"></textarea>
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </aside>

        {/*FOOTER PIE DE PÁGINA*/}
        <footer className="footer">
            &copy; Master en JavaScript ES12 y TypeScript - <a href="https://empresarioencasa.org">Empresario en Casa.org</a>
        </footer>
    </div>
  );
}

export default App;
