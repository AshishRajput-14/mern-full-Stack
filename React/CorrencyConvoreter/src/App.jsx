import React from "react";
import Header from "./components/Header";
import Corrency from "./components/Corrency";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Corrency />
    </>
  );
};

export default App;