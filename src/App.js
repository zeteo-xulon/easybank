import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Page404 from "./components/Page404";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}