import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React>
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//   </React>
// );


ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
