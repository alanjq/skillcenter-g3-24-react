import { CampoTexto } from "./components/CampoTexto";
import { Greeting } from "./components/Greeting";
import { useState } from 'react'

function App() {
  // variable de estado | método setter
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState("")
  const [dia, setDia] = useState("-")

  const handleSubmit = () => {
    const datos = {
      nombre,
      apellido,
      dia
    }

    console.log('DATOS', JSON.stringify(datos));
  }

  return (
    <div>
      <CampoTexto etiqueta="Nombre" onChange={setNombre} />
      <CampoTexto etiqueta="Apellido" onChange={setApellido} />

      <select onChange={({ target }) => setDia(target.value)}>
        <option value="-">Selecciona un día</option>
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miércoles">Miércoles</option>
      </select>

      <button type="button" onClick={handleSubmit}>Actualizar</button>

      <Greeting nombre={nombre} apellido={apellido} fecha={dia} />
    </div>
  );
}

export default App;
