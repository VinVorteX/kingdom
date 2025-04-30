
import React from 'react';
import { DollarSign, Users, Rocket, FileText, Wallet } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: "Zero Commission Fees",
    description: "Never pay hefty fees again. We've eliminated traditional commission structures so you keep more of your investments."
  },
  {
    icon: Users,
    title: "Direct P2P Trading",
    description: "Trade directly with other domain enthusiasts without intermediaries slowing you down or taking a cut."
  },
  {
    icon: Wallet,
    title: "FDIC-Partnered Wallet",
    description: "Your domain earnings are secured in our FDIC-partnered wallet system, ensuring your funds are always protected."
  },
  {
    icon: FileText,
    title: "Real-Time Domain Insights",
    description: "Make informed decisions with our powerful analytics tools providing market trends and domain valuation insights."
  }
];

const WhyKingDom = () => {
  return (
    <section id="why-kingdom" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kingdom-blue">Why KingDom?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're reimagining domain investing with innovative features designed to empower you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-full bg-kingdom-blue/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-kingdom-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-kingdom-blue">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-kingdom-blue to-[#2A314C] text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Your Domain Empire?</h3>
              <p className="text-white/80">Join thousands of early adopters already accessing our beta platform.</p>
            </div>
            <button className="btn-gold bg-gold-gradient text-kingdom-blue whitespace-nowrap">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKingDom;
