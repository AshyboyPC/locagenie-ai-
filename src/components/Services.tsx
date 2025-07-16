import { Globe, MessageSquare, Phone } from 'lucide-react';
import { PixelCanvas } from './ui/pixel-canvas';
import { TextColor } from './ui/text-color';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Custom Websites",
      description: "Mobile-ready, fast, clean design tailored specifically for your local brand. We capture your business personality and convert visitors into customers."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: "AI Support Agents",
      description: "24/7 chat or voice-based AI agents trained on your business information to handle customer queries, bookings, and support automatically."
    },
    {
      icon: <Phone className="w-8 h-8 text-pink-400" />,
      title: "AI Calling Agent",
      description: "Our AI calls local businesses that don't have websites and books appointments automatically — like having a tireless sales team working for you."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <TextColor />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge solutions designed specifically for local businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <PixelCanvas
                gap={8}
                speed={30}
                colors={['#4f46e5', '#818cf8', '#a78bfa']}
                variant="icon"
              />
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;