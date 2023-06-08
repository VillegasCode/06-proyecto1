import React from 'react'

export const Editar = () => {
  
    const titulo_componente = "Editar película";
  
    return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form>
            <input type="text"
                    name='titulo'
                    className='titulo_editado'
                    defaultValue="Título original de la película"
            />

            <textarea
                name='descripcion'
                defaultValue="Descripcion Original"
                className='descripcion_editada'
            />

            <input type="submit" className="editar" value="Actualizar" />
        </form>
    </div>
  )
}