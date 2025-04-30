
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "I've flipped over 20 domains on KingDom already. The zero commission structure puts thousands back in my pocket!",
    author: "Alex Thompson",
    role: "Domain Investor",
    avatar: "AT"
  },
  {
    quote: "As a startup founder, finding the perfect domain was always expensive until KingDom. Found our name at a fair price, no middlemen involved.",
    author: "Sarah Chen",
    role: "Tech Founder",
    avatar: "SC"
  },
  {
    quote: "The analytics tools are amazing! I can actually make data-driven decisions about which domains to invest in.",
    author: "Mike Johnson",
    role: "Digital Entrepreneur",
    avatar: "MJ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kingdom-blue">Customer Love</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our early access users who've already claimed their piece of the internet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
              {/* Quotation mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-kingdom-gold/20 font-serif">
                "
              </div>
              
              <blockquote className="text-gray-700 mb-6 relative z-10">
                "{item.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${item.avatar}`} />
                  <AvatarFallback>{item.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-kingdom-blue">{item.author}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
