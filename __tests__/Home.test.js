import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { AccountsContext } from '../src/context/AccountsContext';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/views/Home/Home';

describe('Home Component', () => {
  test('renders Navbar', () => {
    const initialState = {
      actualPage: 1,
      accounts: [],
      selectedAccount: null,
    };

    render(
      <MemoryRouter>
      <AccountsContext.Provider value={{ accountState: initialState, dispatch: jest.fn() }}>
        <Home />
      </AccountsContext.Provider>
      </MemoryRouter>
    );

    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders AccountPreviews', () => {
    const initialState = {
      actualPage: 1,
      accounts: [
        [
          { tipo_letras: 'A', n: 1 },
          { tipo_letras: 'B', n: 2 },
          { tipo_letras: 'C', n: 3 },
        ],
      ],
      selectedAccount: null,
    };

    render(
      <MemoryRouter>
      <AccountsContext.Provider value={{ accountState: initialState, dispatch: jest.fn() }}>
        <Home />
      </AccountsContext.Provider>
      </MemoryRouter>
    );

    const accountPreviews = screen.getAllByTestId('account-preview-button');
    expect(accountPreviews).toHaveLength(3);
  });

  test('renders NextPrevButton when there are more accounts', () => {
    const initialState = {
      actualPage: 1,
      accounts: [
        [
          { tipo_letras: 'A', n: 1 },
          { tipo_letras: 'B', n: 2 },
          { tipo_letras: 'C', n: 3 },
        ],
        [
          { tipo_letras: 'D', n: 4 },
          { tipo_letras: 'E', n: 5 },
          { tipo_letras: 'F', n: 6 },
        ],
      ],
      selectedAccount: null,
    };

    render(
      <MemoryRouter>
      <AccountsContext.Provider value={{ accountState: initialState, dispatch: jest.fn() }}>
        <Home />
      </AccountsContext.Provider>
      </MemoryRouter>
    );

    const nextButton = screen.getByText('Más Opciones >>');
    expect(nextButton).toBeInTheDocument();
  });
});
