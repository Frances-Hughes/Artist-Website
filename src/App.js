import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact/" element={<ContactForm />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
