import Formulario from "./components/Formulario";

const { Fragment } = require("react");

function App() {
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div class="row">
          <div className="one-half column">
            <Formulario />
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
