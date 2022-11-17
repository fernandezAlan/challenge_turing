import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Home from "../src/views/Home/Home";
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
describe("<Home /> page 1", () => {
  beforeEach(() => {
    act(() => {
      render(
        <AccountProvider>
          <GlobalStyle />
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </AccountProvider>
      );
    });
  });
  it("Render titles on screen", async () => {
    const title = await screen.findByText("Selecciona la Cuenta a Consultar");
    const subtitle = await screen.findByText("Consulta de Saldo");
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
  it("Render correct length of AccountPreview component", async () => {
    const element = await screen.findAllByTestId("account-preview-button");
    expect(element).toHaveLength(5);
  });
  it("Render correct button's page", async () => {
    const nextButton = screen.getByText("Más Opciones >>");
    expect(nextButton).toBeInTheDocument();
  });
});
describe("<Home/> Page 2", () => {
  beforeEach(() => {
    const pagination = createPagination(TestAccounts.cuentas);
    const initialState = {
      actualPage: 2,
      accounts: pagination,
      selectedAccount: null,
    };
    act(() => {
      render(
        <AccountProvider initialState={initialState}>
          <GlobalStyle />
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </AccountProvider>
      );
    });
  });
  it("Render titles on screen", async () => {
    const title = await screen.findByText("Selecciona la Cuenta a Consultar");
    const subtitle = await screen.findByText("Consulta de Saldo");
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
  it("Render correct length of AccountPreview component", async () => {
    const element = await screen.findAllByTestId("account-preview-button");
    expect(element).toHaveLength(4);
  });
  it("Render correct button's page", async () => {
    const previousButton = screen.getByText("<< Opciones Anteriores");

    expect(previousButton).toBeInTheDocument();
  });
});
