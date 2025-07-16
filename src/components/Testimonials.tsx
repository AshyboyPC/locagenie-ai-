import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { TextPressure } from './ui/interactive-text-pressure';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      designation: "Boutique Owner",
      quote: "LocaGenie completely transformed my boutique's online presence. Their AI agent books 30% more appointments than my old website. The whole process was seamless and the results exceeded my expectations.",
      src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
    },
    {
      name: "Mike T.",
      designation: "Auto Repair Shop Owner",
      quote: "I was skeptical at first but their calling agent booked 8 appointments in the first week. The AI assistant handles customer inquiries 24/7, which has been a game-changer for my business.",
      src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
    },
    {
      name: "Lisa M.",
      designation: "Restaurant Owner",
      quote: "Our new website with integrated AI chatbot has reduced our no-shows by 40%. The team at LocaGenie understood our needs perfectly and delivered beyond our expectations.",
      src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
    },
    {
      name: "David K.",
      designation: "Dental Clinic Manager",
      quote: "The AI appointment scheduling system has saved us countless hours on the phone. Patients love the convenience, and we've seen a 25% increase in bookings since implementation.",
      src: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
    },
    {
      name: "Emily R.",
      designation: "Fitness Studio Owner",
      quote: "Our membership sign-ups have doubled since launching our new website with LocaGenie's AI assistant. The 24/7 availability has been crucial for capturing leads outside business hours.",
      src: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 flex w-full justify-center">
            <TextPressure 
              text="Testimonials" 
              flex={false} 
              width={true} 
              weight={true} 
              italic={true} 
              minFontSize={36} 
              className="w-full max-w-full" 
            />
          </div>
          <p className="text-xl text-gray-300">
            Hear from local businesses we've helped transform
          </p>
        </div>
        
        <AnimatedTestimonials 
          testimonials={testimonials} 
          autoplay={true}
          className="mt-8"
        />
      </div>
    </section>
  );
};

export default Testimonials;