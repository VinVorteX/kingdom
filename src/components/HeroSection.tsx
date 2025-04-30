
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Globe } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // In a real app, this would send the email to your backend
    console.log('Email submitted:', email);
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when KingDom launches.",
    });
    
    setEmail('');
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-5 w-20 h-20 md:w-32 md:h-32 bg-kingdom-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 right-10 w-40 h-40 md:w-64 md:h-64 bg-kingdom-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="inline-block mb-3">
              <span className="bg-kingdom-blue text-white text-xs px-3 py-1 rounded-full font-medium">
                Now in Beta
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-kingdom-blue mb-6 leading-tight animate-fade-in">
              Your Internet Empire <br />
              <span className="bg-gold-gradient text-transparent bg-clip-text gold-shimmer">Starts Here.</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Search, buy, and trade domains without commission — with KingDom. 
              The first platform that puts domain trading power back in your hands.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="flex-grow">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-gray-300"
                  required
                />
              </div>
              <Button type="submit" className="btn-gold h-12 whitespace-nowrap">
                Claim Your Throne
              </Button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -left-10 w-full h-full bg-kingdom-blue/10 rounded-xl"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Globe className="h-6 w-6 text-kingdom-gold mr-2" />
                    <span className="text-kingdom-blue font-semibold">Domain Explorer</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold text-kingdom-blue">startup.com</p>
                        <p className="text-sm text-gray-500">Premium Domain</p>
                      </div>
                      <div>
                        <span className="text-lg font-bold text-kingdom-blue">$4,250</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Available</span>
                      <span className="text-xs text-gray-500">Last traded 2 days ago</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-semibold text-kingdom-blue">metaverse.io</p>
                        <p className="text-sm text-gray-500">High Demand</p>
                      </div>
                      <div>
                        <span className="text-lg font-bold text-kingdom-blue">$12,800</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">Bidding</span>
                      <span className="text-xs text-gray-500">8 active bidders</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
