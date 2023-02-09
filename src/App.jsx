import "./App.css";
import Nav from "./components/Nav";
import React from "react";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Nav />
      <Main />
    </div>
  );
};

export default App;
