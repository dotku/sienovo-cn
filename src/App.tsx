import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Clients from "./components/Clients";
import Products from "./components/Products";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Analytics />
      <Header />
      <Hero />
      <Solutions />
      <Clients />
      <Products />
      <News />
      <Footer />
    </div>
  );
}

export default App;
