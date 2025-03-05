import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Clients from "./components/Clients";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import News from "./components/News";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Clients />
      <Products />
      <News />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
