import React from "react";
import { Route, Routes } from "react-router-dom";
import Task2 from "./Task2";
import Dashboard from ".";
import Task1 from "./Taks1";
import Task3 from "./Task3";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/task2" element={<Task2 />}></Route>
      <Route path="/task1" element={<Task1 />}></Route>
      <Route path="/task3" element={<Task3 />}></Route>
    </Routes>
  );
};

export default CustomRoutes;
