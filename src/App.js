// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cselp } from "./Components/Cselp";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Login } from "./Components/LoginComp/Login";
import { AboutUs } from "./Components/pages/AboutUs";
import { Contact } from "./Components/pages/ContactSection/Contact";
import { Courses } from "./Components/pages/Courses";
import { Home } from "./Components/pages/Home";
import { Programs } from "./Components/pages/Programs";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cselp' element={<Cselp/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
