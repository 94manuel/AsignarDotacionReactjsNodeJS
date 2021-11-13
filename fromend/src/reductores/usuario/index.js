const datosIniciales = {
  usuario:[],
  dotacion:[],
  asignado:[],
}

const reducer = (state = datosIniciales, action) => {
  switch (action.type) {
    case "usuario":
      return {
        ...state,
        usuario: state.usuario.concat(action.usuario)
      }
      break;
    case "borrar_usuario":
        return {
          ...state,
          usuario: state.usuario = action.usuario
        }
        break;
    case "ediar_usuario":
       return {
         ...state,
         usuario: state.usuario.filter(j => j.id !== action.editarusuario.id)
       }
       break;
    case "agregar_dotacion":
      return {
        ...state,
        dotacion: state.dotacion.concat(action.dotacion)
       }
      break;
    case "borrar_dotacion":
       return {
        ...state,
        dotacion: state.dotacion = action.dotacion
       }
      break;
    case "asignado":
        return {
          ...state,
          asignado: state.asignado = action.asignado
        }
        break;

  }
  return state;
}

export default reducer
