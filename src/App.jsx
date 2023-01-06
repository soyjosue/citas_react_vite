import { useState, useEffect } from 'react';

import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      console.log(pacientesLS);
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    if(pacientes.length > 0) 
    {
      localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    }
  }, [pacientes]);

  const eliminarPaciente = id => {
    var pacientesActualizado = pacientes.filter(i => i.id != id);
    setPacientes(pacientesActualizado);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
