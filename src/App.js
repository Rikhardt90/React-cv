import { useState } from "react";
import Navbar from "./core/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./core/Footer/Footer";
import "./App.css";
import { CV } from "./Cv/Cv";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero hero={hero} education={education} experience={experience}/>} />
            <Route path="timeline" element={<Timeline timeline={experience} />} />
            <Route path="/contact" element={<Contact contact={hero} />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
