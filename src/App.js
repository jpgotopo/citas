import Formulario from "./components/Formulario";
import React, { Fragment, useState } from 'react';
import Cita from "./components/Cita";

function App() {

  //Arreglo de Citas
  const[citas, guardarCitas] = useState([]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita

    ])
  }


  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div class="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus Citas</h2>
            {citas.map( cita => (
              <Cita 
                key={cita.id}
                cita ={cita}
              />
            ) )}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
