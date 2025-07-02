import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;