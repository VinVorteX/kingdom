
import React from 'react';
import { Search, TrendingUp, Wallet } from 'lucide-react';

const steps = [
  {
    title: "Search & Register",
    description: "Find and secure your dream domains instantly with our powerful search tools and zero commission fees.",
    icon: Search
  },
  {
    title: "Trade Domains Peer-to-Peer",
    description: "Buy and sell directly with other domain enthusiasts on our secure and transparent marketplace.",
    icon: TrendingUp
  },
  {
    title: "Grow Your Portfolio",
    description: "Track performance, analyze trends, and build your domain empire with our advanced analytics.",
    icon: Wallet
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kingdom-blue">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            KingDom makes domain investing simple, transparent, and accessible for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full bg-kingdom-blue/10 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-kingdom-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kingdom-blue">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#E6B325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
