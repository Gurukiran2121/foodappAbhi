import React from "react";
import { useEffect, useState } from "react";
import Home from "./component/homepage/Home";
import Privatecomp from "./component/Privatecomp";
import {
  BrowserRouter,
  
  Route,
  Routes,
  
} from "react-router-dom";
import SingUp from "./component/homepage/loginlogout/SingUp";
import Login from "./component/homepage/loginlogout/Login";
import Cart from "./component/homepage/Cart/Cart";
import Orders from "./component/homepage/Orders/Orders";
import Context from "./component/Context";
const App = () => {
  let [login, setlogin] = useState(!!localStorage.getItem("authtoken"));
  useEffect(() => {
    setlogin(!!localStorage.getItem("authtoken"));
  }, []);
console.log(login);
  return (
    <Context>
    <BrowserRouter>
      <Routes>
        <Route element={<Privatecomp />}>
          <Route
            path="/"
            element={<Home></Home>}
          />
        </Route>
        <Route
          path="/login"
          element={<Login></Login>}/>
        <Route path="/singup" element={<SingUp></SingUp>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/ordes" element={<Orders></Orders>} />
      </Routes> 
      </BrowserRouter>
      </Context>
  );
};

export default App;
