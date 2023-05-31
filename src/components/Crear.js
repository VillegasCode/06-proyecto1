import React from 'react'

export const Crear = () => {
  
  const titulo = "Añadir Película";

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

console.log(peli);

  }

  return (
    <div className="add">
        <h3 className="title">{titulo}</h3>

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
