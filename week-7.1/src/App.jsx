import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";
import React from "react";
const Dashboard = React.lazy(() => {
  return import("./components/Dashboard");
});
import { Landing } from "./components/Landing";
// const Landing = React.lazy(() => {
//   return import("./components/Landing");
// });
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
