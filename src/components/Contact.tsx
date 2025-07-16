import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { GooeyText } from "./ui/gooey-text-morphing";
import { GlowingEffect } from "./ui/glowing-effect";
import { ButtonColorful } from "./ui/button-colorful";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-blue-400" />,
      label: "Phone",
      value: "(470) 926-2583",
      link: "tel:+14709262583"
    },
    {
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      label: "Email",
      value: "ashwindh.ramesh2325@gmail.com",
      link: "mailto:ashwindh.ramesh2325@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-pink-400" />,
      label: "Location",
      value: "Serving local businesses near me",
      link: null
    },
    {
      icon: <Clock className="w-5 h-5 text-green-400" />,
      label: "Hours",
      value: "Based on your availability",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative -mt-8 mb-12 flex justify-center">
            <GooeyText
              texts={["Let's", "unlock", "your", "business's", "potential"]}
              morphTime={1}
              cooldownTime={0.25}
              className="font-bold"
              textClassName="text-4xl md:text-6xl bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            />
          </div>

          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Schedule a free 15-minute consultation. No pressure — just ideas to help your local business thrive online.
          </p>
          
          <div className="mb-8">
            <ButtonColorful 
              className="px-16 py-5 text-xl font-medium rounded-full hover:scale-105 transition-transform duration-300 scale-110"
              onClick={() => {
                let widgetLoaded = !!document.getElementById('omnidimension-web-widget');
                if (!widgetLoaded) {
                  const script = document.createElement('script');
                  script.id = 'omnidimension-web-widget';
                  script.async = true;
                  script.src = 'https://backend.omnidim.io/web_widget.js?secret_key=2100ee5df0ec9059e76b49b4e5944c7f';
                  document.body.appendChild(script);
                  // wait a moment for widget to appear
                  setTimeout(showArrow, 1500);
                } else {
                  showArrow();
                }

                function showArrow() {
                  if (document.getElementById('widget-arrow')) return;
                  const arrow = document.createElement('div');
                  arrow.id = 'widget-arrow';
                  arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
                  arrow.style.position = 'fixed';
                  arrow.style.bottom = '110px';
                  arrow.style.right = '40px';
                  arrow.style.color = '#fff';
                  arrow.style.zIndex = '9999';
                  arrow.style.opacity = '0';
                  arrow.style.transform = 'translateX(120px)';
                  arrow.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease-out';
                  document.body.appendChild(arrow);

                  requestAnimationFrame(() => {
                    arrow.style.opacity = '1';
                    arrow.style.transform = 'translateX(0)';
                  });

                  setTimeout(() => {
                    arrow.style.opacity = '0';
                    arrow.style.transform = 'translateX(120px)';
                    setTimeout(() => arrow.remove(), 600);
                  }, 5000);
                }
              }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-400 mb-12 text-sm sm:text-base">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span>No setup fees</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full mx-2"></div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span>Free website and AI agent for first 5 customers</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full mx-2"></div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span>24/7 AI support</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full mx-2"></div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span>High school entrepreneur and hard worker</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Glowing hover effect */}
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="flex justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-300">{info.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;