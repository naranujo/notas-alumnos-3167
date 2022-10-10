import { useState } from 'react'
import { auth, db } from './firebase/config'
import './App.css'

function App() {

  const [carga, setCarga] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()

    if (e.target.nombre.value !== "" && e.target.apellido.value !== "" && e.target.dni.value !== "" && e.target.nota.value !== "") {

      setCarga(true)

      db.collection("notas").add({
        nombre: e.target.nombre.value,
        apellido: e.target.apellido.value,
        dni: e.target.dni.value,
        nota: e.target.nota.value,
        fecha: new Date(),
      })
      .then((res) => {
        setCarga(false)
        alert("Información agregada");
      })
      .catch((err) => {
        alert("Error al agregar la información");
      });
  
      e.target.reset()
    } else {
      alert("No se puede agregar, debe completar todos los campos primero");
    }


  }

  return (
    <form onSubmit={handleAdd}>
      <div>
        <label htmlFor="studentName">Nombre del alumno</label>
        <input type="text" name="nombre" placeholder="Juan"/>
      </div>
      <div>
        <label htmlFor="studentLastName">Apellido del alumno</label>
        <input type="text" name="apellido" placeholder="Perez"/>
      </div>
      <div>
        <label htmlFor="studentId">DNI del alumno</label>
        <input type="text" name="dni" placeholder="12345678"/>
      </div>
      <div>
        <label htmlFor="studentNote">Nota del alumno</label>
        <input type="text" name="nota" placeholder="10"/>
      </div>
      {
        carga ? <button disabled>Agregando...</button> : <button>Agregar</button>
      }
      {/* <button type="submit">Enviar</button> */}
    </form>
  )
}

export default App
