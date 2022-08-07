import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link as RouteLink,
} from "react-router-dom";

import Landing from "./pages/landing";

import Login from "./pages/login";
import NavBar from "./components/NavBar";
import Profile from "./pages/profile";
import DevProfile from "./pages/devProfile";
import Checkout from "./pages/checkout";

import { ChakraProvider } from "@chakra-ui/react";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Wrap application in chakra provider at root(TIffany)

    <ApolloProvider client={client}>
        <Router>
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/devProfile/:devId" element={<DevProfile />} />
              <Route path="/profile/cart/checkout" element={<Checkout />} />
            </Routes>
          </>
        </Router>
    </ApolloProvider>

    // <div>
    //     <Landing />
    // </div>
  );
}

export default App;
