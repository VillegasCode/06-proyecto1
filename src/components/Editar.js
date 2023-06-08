import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
  
    const titulo_componente = "Editar película";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

       //Conseguir el TARGET del evento en este caso debemos conseguir el formulario
       let target = e.target;

       //Buscar el índice del objeto de la película a actualizar
       const pelis_almacenadas = conseguirPeliculas();
        
       //Ahora toca buscar el índice de la película
       const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

       //Crear objeto con el indice obtenido de la variable indice
       let peli_actualiza = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
       };

       //Actualizar el elemento con ese índice
       pelis_almacenadas[indice] = peli_actualiza;
       

       //Guardar el nuevo array de objetos en el localstorage
       localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
       
        //Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);

    }

    return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}: {peli.titulo}</h3>
        <form onSubmit={ e => guardarEdicion(e, peli.id)}>
            <input type="text"
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo}
            />

            <textarea
                name='descripcion'
                defaultValue={peli.descripcion}
                className='descripcion_editada'
            />

            <input type="submit" className="editar" value="Actualizar" />
        </form>
    </div>
  )
}