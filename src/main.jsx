import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Work from "./Components/Work.jsx";
import Contact from "./Components/Contact.jsx";
import Head from "./Components/Head.jsx";
import HowItWorks from "./Components/HowItWorks.jsx";
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Head />
    <Navbar />
    <Home />
    <HowItWorks />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
  </React.StrictMode>
);
