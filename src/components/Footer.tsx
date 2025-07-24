import React from 'react';
import { Twitter, Github, Instagram, Youtube } from 'lucide-react';
import { AnimatedSocialIcons } from './ui/floating-action-button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Services", href: "#services" },
        { label: "Why Us", href: "#why" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Custom Websites", href: "#services" },
        { label: "AI Support Agents", href: "#services" },
        { label: "AI Calling Agent", href: "#services" },
        { label: "SEO for Local Business", href: "#services" },
        { label: "Ongoing Maintenance", href: "#services" }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 relative min-h-[250px] overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col h-full">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                LocaGenie
              </h3>
              <p className="text-gray-300">
                AI-powered solutions to help local businesses grow and thrive in the digital age.
              </p>
            </div>
            <div className="absolute -right-25 top-32">
                <AnimatedSocialIcons
                  icons={[
                    {
                      Icon: Twitter,
                      href: "https://twitter.com/Ashwindhuu_25",
                      className: "hover:bg-blue-500/20"
                    },
                    {
                      Icon: Instagram,
                      href: "https://instagram.com/ashwindhuu_25",
                      className: "hover:bg-pink-600/20"
                    },
                    {
                      Icon: Github,
                      href: "https://github.com/AshyboyPC",
                      className: "hover:bg-gray-700/20"
                    },
                    {
                      Icon: Youtube,
                      href: "https://www.youtube.com/@AIExplained_25",
                      className: "hover:bg-red-600/20"
                    }
                  ]}
                  iconSize={16}
                />
              </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} LocaGenie. All rights reserved.
            <span className="mx-4">|</span>
            <button className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </button>
            <span className="mx-4">|</span>
            <button className="hover:text-white transition-colors duration-200">
              Terms of Service
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;