import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';
import Pricing from './pages/Pricing';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/xe/:id" element={<CarDetail />} />
            <Route path="/bang-gia" element={<Pricing />} />
            <Route path="/uu-dai" element={<Pricing />} />
            <Route path="/lai-thu" element={<Home />} />
            <Route path="/lien-he" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
