import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Landing from "./pages/landing";
import Login from "./pages/servicesPage";
import NavBar from "./components/NavBar";

import { ChakraProvider } from "@chakra-ui/react";

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    //Wrap application in chakra provider at root(TIffany)
    <div>
      <ChakraProvider>
        <Landing />
      </ChakraProvider>
    </div>
  );
}

export default App;
