import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Resume from "./Portfolio/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-me" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact-me" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
