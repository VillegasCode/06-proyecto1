import React, {useState} from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = () => {
  
  const tituloComponente = "Añadir Película";

  //Creando hook useState para agregar las pelis en tiempo real
  const [ peliState, setPeliState ] = useState({
    titulo: '',
    descripcion: ''
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    //Guardar Estado
    setPeliState(peli);

    //Guardar en el almacenamiento local con un método que importamos de los helpers
    GuardarEnStorage("pelis", peli);

  }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>


        <strong>
          {(titulo && descripcion) && "Has creado la película: " + titulo}
        </strong>


        <form onSubmit={conseguirDatosForm}>
            <input type="text" 
                  id='titulo'
                  name='titulo'
                  placeholder="Titulo" />

            <textarea
                  id='descripcion'
                  name='descripcion'
                  placeholder="Descripción"></textarea>
                  
            <input type="submit"
                   id="save"
                   value="Guardar" />
        </form>
    </div>
  )
}
