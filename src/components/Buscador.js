import React, {useState} from 'react'

export const Buscador = ({listadoState, setListadoState}) => {


const [busqueda, setBusqueda] = useState('');


// Crear funcion buscarPeli
const buscarPeli = (e) => {
  //Crear estado y actualizarlo
  setBusqueda(e.target.value);

  //El listado completo de películas se obtiene a través de las props que están arriba en el componente Buscador


  //Filtrar para buscar coincidencias si dentro del objeto peli incluye un término de la búsqueda
  let pelis_encontradas = listadoState.filter(peli => {
    return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
  });

  //Si el término de búsqueda es menor o igual a 1 caracter
  if(busqueda.length <= 1){
    pelis_encontradas =  JSON.parse(localStorage.getItem("pelis"));
  }

  console.log(pelis_encontradas);
  //Comprobar si hay un resultado


  //Dar valor de todo en localStorage


  //Actualizar estado del listado principal con lo que logrado filtrar


}


  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        <form>
            <input type="text"
                    id="search_field"
                    name='busqueda'
                    autoComplete='off'
                    onChange={buscarPeli}
            />
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
