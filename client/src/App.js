import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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

export default function App() {
  return (
    // Wrap application in chakra provider at root(TIffany)
      <ApolloProvider client={client}>
        <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Landing</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/Profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/devProfile/:devId">Developer Profile</Link>
                </li>
                <li>
                  <Link to="/Profile/Checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/profile/newProject">New Project</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Landing />} />

              <Route path="/Login" element={<Login />} />

              <Route path="/Profile" element={<Profile />} />

              <Route path="/devProfile/:devId" element={<DevProfile />} />

              <Route path="/Profile/checkout" element={<Checkout />} />

            </Routes>
        </Router>
      </ApolloProvider>
  );
}
