import { useState } from "react"

export const useForm = (initialForm = {}) => {


    //lista de objetos
    const [listaObj, setListaObj] = useState([{ nombre: "", apellido: "", edad: 0 }])

    //formulario completo
    const [formState, setFormState] = useState(initialForm)


    const onInputChange = ({ target: { id, name, value } }) => {
        let index = id.substring(0, id.indexOf(name))

        setListaObj([...listaObj].map((obj) => {
            if (listaObj.indexOf(obj) === index) {

               // Object.assign(obj, { [name]: value })

            }
        }))



        //corta el id para conseguir el indice del objeto cargado
        //console.log(id.substring(0, id.indexOf(name)))
    }


    //agrega un objeto vacio a la lista
    const addObj = () => {
        setListaObj([
            ...listaObj,
            {}
        ])
    }

    // const fillForm = () => {
    //     setFormState({
    //         dato1: datos.dato1,
    //         dato2: datos.dato2,
    //         dato3: datos.dato3,
    //         lista: [datos.dato1, datos.dato2, datos.dato3]
    //     })

    //     console.log("form", formState)
    // }

    const onSubmitForm = (event) => {
        event.preventDefault()

        //fillForm()


        console.log("lista", listaObj)
    }

    return {
        ...formState,
        formState,
        listaObj,
        onInputChange,
        addObj,
        onSubmitForm
    }
}