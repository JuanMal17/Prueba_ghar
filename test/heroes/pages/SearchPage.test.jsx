import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/index";

describe('Pruebas en SearchPage', () => {
  test('debe nostrar correctamente por valores por default ', () => {

    const { container } = render(<MemoryRouter>
        <SearchPage />
    </MemoryRouter>);

    expect( container ).toMatchSnapshot();

  });

  
});
