import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Applications from '@/pages/Applications';
import Manufacturing from '@/pages/Manufacturing';
import Quality from '@/pages/Quality';
import Catalogue from '@/pages/Catalogue';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import { COMPANY } from '@/data/company';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-copper-500 text-white flex items-center justify-center shadow-2xl hover:bg-copper-600 hover:scale-110 transition-all duration-300 group"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={26} />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-graphite-950 text-white text-xs font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </span>
      </a>
    </BrowserRouter>
  );
}

export default App;
