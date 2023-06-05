import React, {useEffect, useState} from 'react'

// Le pasamos esas 2 props desde el componente principal
export const Listado = ({listadoState, setListadoState}) => {
  

    //Guardar en el estado el nuevo objeto de arrays, lo inicializamos con un array vacío
    // const [listadoState, setListadoState] = useState([]);

    // Método para conseguir las películas
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);
    }
  
    // HOOK useEffect para llamar a la función cada vez que se cargue la página, colocar corchetes vacíos al final
    useEffect(() => {
        console.log("Componentes del listado de películas cargado!!");
        conseguirPeliculas();
    }, []);
  
    return (
    // {/*Aqui van las películas*/}
        <>
        {listadoState != null ?
            listadoState.map(peli => {
                return (
                <article key={peli.id} className="peli-item">
                    <h3>{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
            );
        })
        : <h2>No hay películas para mostrar</h2>
    }
        </>
    )
}