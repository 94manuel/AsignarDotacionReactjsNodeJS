import React, { useState  } from 'react';
import AgregarTrabajador from '../AgregarTrabajador/index';
import AgregarDotacion from '../AgregarDotacion/index';

function Inicio() {

  const [EstadoApp, setEstadoApp] = useState(0);

  function cambiar(valor){
    setEstadoApp(valor);
  }

  switch (EstadoApp) {
    case 0:
        return (
          <>
            <AgregarTrabajador estado={cambiar}/>
          </>
        );
      break;
    case 1:
      return (
        <>
          <AgregarDotacion estado={cambiar}/>
        </>
      );
    break;
  
    default:
      break;
  }
}
export default Inicio;