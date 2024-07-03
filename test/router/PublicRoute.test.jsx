import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/index";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en Public Route', () => {

    test('sin autenticacion mostrar el children', () => {
        const contextValue = { logged: false };

        render(<AuthContext.Provider value={contextValue} >
            <PublicRoute>
                <h1> Ruta publica </h1>
            </PublicRoute>
        </AuthContext.Provider>);

        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test('debe navegar si esta autenticado ', () => {
        const contextValue = {
            logged: true, user: {
                name: 'Pedro',
                id: 'ABC123'
            }
        };

        render(<AuthContext.Provider value={contextValue} >
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='login' element={ <PublicRoute>
                        <h1>Pagina login</h1>
                    </PublicRoute> } />
                    <Route path='marvel' element={ <h1>Pagina Marvel</h1>} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>);

        expect( screen.getByText('Pagina Marvel')).toBeTruthy();
    });

})
