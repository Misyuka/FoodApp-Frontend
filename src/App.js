import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatting from "./components/Chatting";
import Home from "./components/Home";
import Map from "./components/Map";
import User from "./components/User";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Map" element={<Map />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/Chatting" element={<Chatting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;