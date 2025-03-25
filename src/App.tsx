import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Clients from "./components/Clients";
import Products from "./components/Products";
import News from "./components/News";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

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
      <Chatbot />
    </div>
  );
}

export default App;
