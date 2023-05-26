import '@testing-library/jest-dom/extend-expect';
import { render, screen,fireEvent  } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { AccountsContext } from "../src/context/AccountsContext";
import { createMemoryHistory } from "history";
import SelectedAccount from "../src/views/SelectedAccount/SelectedAccount";
import { RouterProvider } from 'react-router-dom';
import {App} from '../src/router';
import userEvent from '@testing-library/user-event';

describe("SelectedAccount Component", () => {
  test("renders account information correctly", () => {
    const selectedAccount = {
      saldo: 1000,
      tipo_letras: "CC",
      n: "123456789",
    };

    render(
      <MemoryRouter>
        <AccountsContext.Provider value={{ accountState: { selectedAccount } }}>
          <SelectedAccount />
        </AccountsContext.Provider>
      </MemoryRouter>
    );

    const saldoElement = screen.getByText("Saldo de la cuenta:");
    const tipoCuentaElement = screen.getByText("Tipo de cuenta:");
    const numeroCuentaElement = screen.getByText("Numero de cuenta:");

    expect(saldoElement).toBeInTheDocument();
    expect(tipoCuentaElement).toBeInTheDocument();
    expect(numeroCuentaElement).toBeInTheDocument();

    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("Cuenta Corriente")).toBeInTheDocument();
    expect(screen.getByText("123456789")).toBeInTheDocument();
  });

test("navigates back to home on button click", async() => {
  const accountState = {
    actualPage: 1,
    accounts: [],
    selectedAccount: {
      saldo: 1000,
      tipo_letras: "CC",
      n: "123456789",
    },
  };
  render(
    <MemoryRouter initialEntries={["/account"]}>
        <AccountsContext.Provider value={{ accountState }}>
          <App/>
        </AccountsContext.Provider>
  </MemoryRouter>
  )

  expect(screen.getByText(/Este es tu saldo actual/i)).toBeInTheDocument()
  const user = userEvent.setup()
  await user.click(screen.getByText(/Salir/i))
  expect(screen.getByText(/Selecciona la Cuenta a Consultar/i)).toBeInTheDocument()
});
});