import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from './components/Contact'
import Page404 from "./components/Page404";
import About from './components/About';
import Careers from "./components/Careers";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<Home />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}