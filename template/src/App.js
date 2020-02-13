import React from "react";
import Routes from "./routes";
import { GlobalStyles } from "./styles/themes/globalStyled";
import theme from "./styles/themes/Theme";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
