import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MembershipPage from './pages/MembershipPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-slate-900">
            <Header />
            <Hero />
            <About />
            <Membership />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;