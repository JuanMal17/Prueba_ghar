import { render } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en PrivateRoute', () => {
  
    test('mostrar el children si esta autenticado', () => {
      Storage.prototype.setItem = jest.fn();
      const contextValue = {
        logged:true,
        user: {
            id:'abc',
            name: 'Juan Carlos'
        }
      }

      render(
        <AuthContext.Provider value = { contextValue }>
            <MemoryRouter initialEntries={['lastPath','marvel']}>
            <PrivateRoute>
                <h1>Ruta Privada</h1>
            </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>
      );
      expect( screen.getByText('Ruta Privada')).toBeTruthy();
      expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','marvel');
    });
    
});
