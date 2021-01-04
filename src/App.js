import Formulario from "./components/Formulario";
import React, { Fragment, useState } from 'react';


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
            2
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
