import "./App.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";

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
// import Cart from "./components/Cart";
import Profile from "./pages/profile";
// import DevProfile from "./devProfile";

import { ChakraProvider } from "@chakra-ui/react";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });


// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    //Wrap application in chakra provider at root(TIffany)
    // <ApolloProvider client={client}>
    //   <Router>
    //     <div>
    //       <ChakraProvider>
    //         <NavBar />
    //         <Routes>
    //           <Route path="/" element={<Landing />} />
    //           <Route path="/login" element={<login />} />
    //           <Route path="/profile" element={<profile />} />
    //         </Routes>
    //       </ChakraProvider>
    //     </div>
    //   </Router>
    // </ApolloProvider>

    <div>
      <ChakraProvider>
        <Profile />
      </ChakraProvider>
    </div>
  );
}

export default App;
