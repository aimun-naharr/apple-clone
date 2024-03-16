import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlights";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlight />
    </>
  );
}

export default App;
