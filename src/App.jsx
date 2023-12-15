import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="contact/" element={<ContactForm />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
