import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import App from "./App.js";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: Manrope;
  color: black;
  width: 100%;
  background: #f5f5f5;

  a {
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContainer>
    <App />
  </AppContainer>
);
