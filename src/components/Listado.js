import React, {useEffect} from 'react'

export const Listado = () => {
  
    // Método para conseguir las películas
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        console.log(peliculas);
    }
  
    // HOOK useEffect para llamar a la función cada vez que se cargue la página, colocar corchetes vacíos al final
    useEffect(() => {
        console.log("Componentes del listado de películas cargado!!");
        conseguirPeliculas();
    }, []);
  
    return (
    // {/*Aqui van las películas*/}
        <>
        <article className="peli-item">
            <h3>Desarrollo Web Película</h3>
            <p className="description">Película tech basada en la vida de un programador peruano</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
        </article>
        </>
    )
}