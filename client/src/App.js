// import "./App.css";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Landing from "./pages/landing";
import Login from "./pages/services";
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";

import Landing from "./pages/landing";

import Login from "./pages/servicesPage";

// import Login from "./pages/services";
import NavBar from "./components/NavBar";
import Profile from "./pages/profile";
// import DevProfile from "./devProfile";
// import Checkout from "./pages/checkout";

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
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Landing />} />
              {/* <Route 
                path="/login" 
                element={<Login />} 
              /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/devProfile/:devId" element={<devProfile />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </ChakraProvider>

    // <div>
    //   <ChakraProvider>
    //     <Profile />
    //   </ChakraProvider>
    // </div>
  );
}

export default App;
