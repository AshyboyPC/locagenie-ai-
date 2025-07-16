import { Phone, Calendar, Clock, Zap } from 'lucide-react';
import { TextRevealCard } from './ui/text-reveal-card';
import { BlurIn } from './ui/blur-in';
import { motion } from 'framer-motion';

const WhyLocaGenie = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: "AI Calls You First",
      description: "Our smart voice agent reaches out to local businesses directly — no chasing, no cold outreach needed."
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-400" />,
      title: "Instant 24/7 Booking",
      description: "No back-and-forth. Our automated system lets you schedule a call whenever you're free — day or night."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: "Launch in Under a Week",
      description: "From discovery to live site + AI agent, we move fast — most projects done in 5–7 days."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Zero Tech Headaches",
      description: "We handle everything: setup, AI training, hosting, and support. You don't lift a finger."
    }
  ];

  return (
    <section id="why" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <TextRevealCard
              text="You run the business"
              revealText="We run the tech"
              className="max-w-4xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: false, margin: "-20% 0px" }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <BlurIn 
                    duration={0.6}
                    delay={index * 0.1}
                    variant={{
                      hidden: { filter: "blur(8px)", opacity: 0, scale: 0.9 },
                      visible: { 
                        filter: "blur(0px)", 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }
                    }}
                  >
                    {feature.icon}
                  </BlurIn>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    <BlurIn 
                      word={feature.title} 
                      className="inline-block" 
                      duration={0.7}
                      delay={index * 0.1 + 0.1}
                    />
                  </h3>
                  <p className="text-gray-300">
                    <BlurIn 
                      word={feature.description} 
                      className="inline-block" 
                      duration={0.8}
                      delay={index * 0.1 + 0.2}
                      variant={{
                        hidden: { filter: "blur(4px)", opacity: 0, y: 5 },
                        visible: { 
                          filter: "blur(0px)", 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.8,
                            delay: index * 0.1 + 0.2,
                            ease: [0.16, 1, 0.3, 1]
                          }
                        }
                      }}
                    />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLocaGenie;