import { useState } from 'react'
import { useForm } from './useForm'

export const FormWithHooks = () => {



    // form custom hook
    const { formState, listaObj, onInputChange, addObj, onSubmitForm } = useForm({
        dato1: '',
        dato2: '',
        dato3: '',
        lista: [],
        listaObj: []
    })



    return (
        <div>

            <h1>formulario</h1>

            <form onSubmit={onSubmitForm}>

                {listaObj.map((obj) =>
                    <div 
                    key={`${listaObj.indexOf(obj)}Key`}
                    id={`${listaObj.indexOf(obj)}Obj`}>
                        <input
                        id={`${listaObj.indexOf(obj)}Nombre`}
                            type="text"
                            name='Nombre'
                            placeholder='Nombre'
                            value={listaObj[listaObj.indexOf(obj).nombre]}
                            onChange={onInputChange}
                        />
                        <input
                         id={`${listaObj.indexOf(obj)}Apellido`}
                            type="text"
                            name='Apellido'
                            placeholder='Apellido'
                            value={listaObj[listaObj.indexOf(obj).apellido]}
                            onChange={onInputChange}
                        />
                        <input
                        id={`${listaObj.indexOf(obj)}Edad`}
                            type="number"
                            name='Edad'
                            placeholder='Edad'
                            value={listaObj[listaObj.indexOf(obj).edad]}
                            onChange={onInputChange}
                        />
                        <button
                        type='button'>
                            X
                        </button>
                    </div>

                )}


                <br />
                <button onClick={addObj}>agregar</button>
                <br />

                <input type="submit" />
            </form>
        </div >
    )
}
