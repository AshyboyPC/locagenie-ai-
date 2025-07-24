import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyLocaGenie from './components/WhyLocaGenie';
import AboutMeSection from './components/AboutMeSection';
import Testimonials from './components/Testimonials';
import { Logos3 } from './components/ui/logos3';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import { BeamsBackground } from './components/ui/beams-background';
import { SupportSection } from './components/SupportSection';

function App() {
  return (
    <BeamsBackground>
      <WelcomeScreen />
      <div className="relative z-10">
        <Navbar className="z-10" />
        <Hero />
        <Services />
        <WhyLocaGenie />
        <AboutMeSection />
        <Testimonials />
        <Logos3 />
        <SupportSection />
        <Contact />
        <Footer />
      </div>
    </BeamsBackground>
  );
}

export default App;