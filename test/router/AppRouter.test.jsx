import { MemoryRouter } from "react-router-dom";
import { render , screen } from "@testing-library/react";

import { AuthContext } from "../../src/auth/context/index";
describe('Pruebas en AppRouter', () => {
  
    test('debe mostrar el login si no esta autenticado', () => {
      const contextValue = {
        logged: false,
      }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getAllByText('login').length ).toBe(2);
    });

    test('debe de mostrar el componente de Marvel si esta autenticado ', () => {
        const contextValue = {
            logged: true,
            user:{
                id:'ABC',
                name:'prueba'
            }
          }
            render(
                <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
                </MemoryRouter>
            );

            expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    });
    
    
});
