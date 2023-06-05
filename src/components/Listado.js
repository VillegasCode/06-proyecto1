import React, {useEffect, useState} from 'react'
import { Editar } from './Editar';

// Le pasamos esas 2 props desde el componente principal
export const Listado = ({listadoState, setListadoState}) => {  

    //Guardar en el estado el nuevo objeto de arrays, lo inicializamos con un array vacío
    // const [listadoState, setListadoState] = useState([]);


    const [editar, setEditar] = useState(0);

    // Método para conseguir las películas
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    }
  
    // HOOK useEffect para llamar a la función cada vez que se cargue la página, colocar corchetes vacíos al final
    useEffect(() => {
        console.log("Componentes del listado de películas cargado!!");
        conseguirPeliculas();
    }, []);
  

    const borrarPeli = (id) => {
        //Conseguir Películas alamacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //Filtrar esas peliculas para que elimine del array la que tiene el id indicado y solo que llene el array con las películas que no se van a borrar
        let nuevo_array_pelis =  pelis_almacenadas.filter(peli =>  peli.id != parseInt(id));

        //Actualizar estado del listado
        setListadoState(nuevo_array_pelis);

        //Actualizar los datos en el LocalStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));

    }


    return (
    // {/*Aqui van las películas*/}
        <>
        {listadoState != null ?
            listadoState.map(peli => {
                return (
                <article key={peli.id} className="peli-item">
                    <h3>{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>

                    <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
                    <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

                    {/* aparece formulario para editar película seleccionada */}
                    {editar === peli.id && (
                        <Editar />
                    )}
                </article>
            );
        })
        : <h2>No hay películas para mostrar</h2>
    }
        </>
    )
}