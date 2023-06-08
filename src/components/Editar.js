import React from 'react'

export const Editar = ({peli}) => {
  
    const titulo_componente = "Editar película";
  
    return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}: {peli.titulo}</h3>
        <form>
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