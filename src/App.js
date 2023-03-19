import './App.css';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IconSection } from './components/IconSection';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IconSection />
      <Footer />
    </>
  );
}

export default App;
