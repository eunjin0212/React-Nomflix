import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
