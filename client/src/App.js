import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import {
  Flex,
  Box,
  Spacer,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";

import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";

import Landing from "./pages/landing";
import Login from "./pages/login";
import NavBar from "./components/NavBar"
import DevProfile from "./pages/devProfile";
import ClientProfile from "./pages/clientProfile";
import Checkout from "./pages/checkout";
import Services from "./pages/services";
import NewSite from "./components/newSite";
import RefactorSite from "./components/refactorSite";
import CustomRequest from "./components/customRequest"

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

  const ServiceLayout = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };

  return (
    // Wrap application in chakra provider at root(TIffany)
      <ApolloProvider client={client}>
      
        <Router>
        
         <NavBar />
                    <Routes>
              <Route path="/" element={<Landing />} />

              {/* <Route path="/DevProfile" element={<DevProfile />} /> */}
              <Route path="/client-profile" element={<ClientProfile />} />

              <Route path="services" element={<ServiceLayout />}>
                <Route path="select" element={<Services />} />
                <Route path="new-site" element={<NewSite />} />
                <Route path="refactor-site" element={<RefactorSite />} />
                <Route path="custom-request" element={<CustomRequest />} />
              </Route>

              <Route path="/login" element={<Login />} />

              {/* <Route path="/devProfile/:devId" element={<DevProfile />} /> */}

              <Route path="/profile/checkout" element={<Checkout />} />

            </Routes>
        </Router>
     
      </ApolloProvider>
  );
}
