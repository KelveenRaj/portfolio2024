import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box as="div" bg={"rgb(2 6 23/1)"} minHeight="100vh">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
