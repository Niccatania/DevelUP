import "./App.css";
import Landing from "./pages/landing";
import Login from "./pages/login";
import NavBar from "./components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import DevProfile from "./pages/devProfile";

function App() {
  return (
    <div>
      <ChakraProvider>
        <NavBar />
        <div className="container">
<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/DevProfile" element={<DevProfile />} />
</Routes>
        </div>
      </ChakraProvider>
    </div>
  );
}

export default App;
