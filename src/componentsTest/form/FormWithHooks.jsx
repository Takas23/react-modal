import { useForm } from './useForm'

export const FormWithHooks = () => {

    // form custom hook
    const { formState, onInputChange, dato1, dato2, dato3 } = useForm({
        dato1: '',
        dato2: '',
        dato3: ''
    })



    return (
        <div>

            <h1>formulario</h1>

            <form onSubmit={console.log({formState})}>
                <input
                    type="text"
                    name='dato1'
                    value={dato1}
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    name='dato2'
                    value={dato2}
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    name='dato3'
                    value={dato3}
                    onChange={onInputChange}
                />

            <input type="submit" />
            </form>
        </div>
    )
}
