
import { Routes, Route } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component.jsx";
import Authentication from './routes/authentication/authentication.component'
import React from "react";
import Shop from './routes/shop/shop.component';

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px"
});

const theme = extendTheme({ breakpoints });



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;