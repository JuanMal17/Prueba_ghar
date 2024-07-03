import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from "../../../src/auth/types/types";

describe('Pruebas en auth Reducer', () => {
  
    test(' prueba de retorno del estado por defecto', () => {
      const state = authReducer({ logged: false }, {});
      expect(state).toEqual({ logged: false});
    })
    
    test('Prueba en  autReducer ', () => {
      const action = { type: types.login, payload:{ name:'Pedro', id: '123'}};
        const state = authReducer({ logged: false}, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('borrar el nombre de usuario al hacer logout y logged en false', () => {
      const state = {
        logged: true,
        user: { id: '123', name: 'Pedro'}
      }

      const action ={ type: types.logout }
      const newState = authReducer( state, action);
      expect( newState ).toEqual({ logged: false });
      
    })
    
    
})
