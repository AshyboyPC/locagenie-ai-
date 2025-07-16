import { LiquidButton } from './LiquidButton';
import { Typewriter } from '../components/ui/typewriter-text';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            <div className="flex justify-center -mb-4 -mt-8">
                {/* Holographic logo */}
                <div
                  className="h-96 w-96 transform scale-125"
                  style={{
                    backgroundImage: 'url(/Holographic-Spotlight-2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    WebkitMaskImage: 'url(/ChatGPT_Image_Jul_15__2025__02_37_45_PM-removebg-preview.png)',
                    maskImage: 'url(/ChatGPT_Image_Jul_15__2025__02_37_45_PM-removebg-preview.png)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                  }}
                  aria-label="LocaGenie Logo"
                />
              </div>
              <div className="text-white block mt-2">
                <Typewriter
                  text={[
                    "AI-Powered Websites for Local Businesses",
                    "Smart AI Agents for Customer Support",
                    "Automated Calling Systems that Work"
                  ]}
                  speed={100}
                  loop={true}
                  className="text-white"
                />
              </div>
            </h1>
          </div>

          <div className="animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We build modern websites and smart AI agents to help your business grow — 
              and our own AI even calls you to get started.
            </p>
          </div>

          <div className="animate-fade-in-up delay-400">
            <LiquidButton
              onClick={scrollToContact}
            >
              Book a Free Discovery Call
            </LiquidButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;