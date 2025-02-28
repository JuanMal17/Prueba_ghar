import { MemoryRouter , useNavigate} from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";
import { Navbar } from "../../../src/ui/components/index";
import {render, screen, fireEvent} from "@testing-library/react";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual("react-router-dom"),
        useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en Navbar', () => {
    const contextValue = {
        logged:true,
        user: {
            id:'abc',
            name: 'Juan Carlos'
        },
        logout: jest.fn()
      };

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {
        render(<AuthContext.Provider value={contextValue} >
            <MemoryRouter >
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>);

        expect( screen.getByText('Juan Carlos')).toBeTruthy();

    });

    test('debe llamar al logout y navigate clic boton', () => {
      
        render(<AuthContext.Provider value={contextValue} >
            <MemoryRouter >
                <Navbar/>
            </MemoryRouter>
        </AuthContext.Provider>);
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login',{
            "replace":true
        });
    });
    
    
});
