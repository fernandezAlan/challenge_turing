import "@testing-library/jest-dom";
import { configure } from "enzyme";
import SelectedAccount from "../src/views/SelectedAccount/SelectedAccount";
import AccountProvider from "../src/context/AccountsContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { GlobalStyle } from "../src/styled-components/GlobalStyles";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { createPagination } from "../src/utils/index";
import TestAccounts from "../src/utils/testUtils/TestAccounts.json";
configure({ adapter: new Adapter() });

describe("<SelectedAccount/>", () => {
  const pagination = createPagination(TestAccounts.cuentas);
  const initialState = {
    actualPage: 2,
    accounts: pagination,
    selectedAccount: {
      e: "1",
      n: "872378326701",
      t: "02",
      saldo: "1500",
      moneda: "u$s",
      tipo_letras: "CC",
    },
  };
  beforeEach(() => {
    act(() => {
      render(
        <AccountProvider initialState={initialState}>
          <GlobalStyle />
          <MemoryRouter>
            <SelectedAccount />
          </MemoryRouter>
        </AccountProvider>
      );
    });
  });
  it("Render titles on screen", async () => {
    const title = await screen.findByText("Este es tu saldo actual");
    const subtitle = await screen.findByText("Consulta de Saldo");
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
  it("Render correct account data selected", async () => {
    const saldo = await screen.findByText("1500");
    const number = await screen.findByText("872378326701");
    const accountType = await screen.findByText("Cuenta Corriente");

    expect(saldo).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(accountType).toBeInTheDocument();
    expect(saldo.textContent).toBe(initialState.selectedAccount.saldo);
    expect(number.textContent).toBe(initialState.selectedAccount.n);
  });
});
