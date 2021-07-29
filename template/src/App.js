import React from "react";
import Routes from "./routes";
import { GlobalStyles } from "./styles/globalStyled";
import theme from "./styles/Theme";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <Routes />
  );
}
