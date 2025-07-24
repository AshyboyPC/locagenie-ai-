import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = '' }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'What We Do', id: 'services' },
    { label: 'Why LocaGenie', id: 'why' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
    { label: 'Support', id: 'support' }
  ];

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 shadow-2xl border-b border-white/10 glass glass-hover overflow-hidden rounded-full max-w-5xl w-[90vw] px-6 font-sans ${className} py-3 top-6 opacity-100`} 
      style={{ willChange: 'transform' }}
    >
      {/* Liquid glass animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 rounded-full">
        <span className="absolute -top-1/2 left-0 w-1/2 h-full animate-[gradient-border_8s_ease-in-out_infinite,gradient-1_16s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] mix-blend-overlay blur-2xl opacity-40 rounded-full"></span>
        <span className="absolute top-0 right-0 w-1/2 h-full animate-[gradient-border_8s_ease-in-out_infinite,gradient-2_16s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] mix-blend-overlay blur-2xl opacity-30 rounded-full"></span>
        <span className="absolute bottom-0 left-0 w-1/2 h-full animate-[gradient-border_8s_ease-in-out_infinite,gradient-3_16s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] mix-blend-overlay blur-2xl opacity-30 rounded-full"></span>
        <span className="absolute -bottom-1/2 right-0 w-1/2 h-full animate-[gradient-border_8s_ease-in-out_infinite,gradient-4_16s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-4))] mix-blend-overlay blur-2xl opacity-20 rounded-full"></span>
      </div>
      <div className="flex justify-between items-center h-20 relative z-10">
          <div className="flex items-center">
            {/* Removed LocaGenie word */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-baseline space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-bold tracking-normal relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full mx-1.5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            {/* Removed Get Started button */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-4 text-lg text-gray-300 hover:text-white transition-colors duration-200 font-bold"
              >
                {item.label}
              </button>
            ))}
            {/* Removed Get Started button from mobile */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;