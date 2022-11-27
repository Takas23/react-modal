
import './App.css'
import { Modalss } from './componentsTest/Modal'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormWithHooks } from './componentsTest/form/FormWithHooks'

function App() {
  const [modalI, setModalI] = useState()

  const navigate = useNavigate()
  
  // 3- ocultarlo on popstate(boton de back browser)
  window.onpopstate = e => {
    console.log("back")
    console.log(modalI)

    modalI.hide()
  }

  //pone el modal en un estado al abrirlo
  const setModal = () => {
    // 1- obtener el modal por id 
    let mod = document.getElementById("exampleModal")

    // 2- obtener la instancia del modal de bootstrap
    let modI = bootstrap.Modal.getInstance(mod)

    setModalI(modI);

    //agrega una entrada al historial
    navigate("#")
  }



  return (

    <div className="App">
      {/* <button
        type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
        onClick={setModal}
      >
        Launch demo modal
      </button>

      <Modalss /> */}

      <FormWithHooks/>
    </div>
  )
}

export default App
