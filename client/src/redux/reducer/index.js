export const initialState = {
  noticias: [],
  allNoticias: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        noticias: action.payload,
        allNoticias: action.payload, // PARA QUE ME GUARDE SIEMPRE TODOS LOS PERSONAJES, Y NUNCA LA MODIFICO LUEGO
      };
    default:
      return state;
  }
}

export default rootReducer;
