import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import { IUserInput } from "./Common/Interfaces";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import BusinessGrid from "./Components/BusinessGrid/BusinessGrid";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#fd558f",
      main: "#c51162",
      dark: "#8e0038",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Roma",
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <SearchBar SetUserInput={(a: IUserInput) => setUserInput(a)} />
        <BusinessGrid SearchQuery={UserInput.SearchQuery} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
