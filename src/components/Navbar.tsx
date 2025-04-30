
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Crown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Crown className="h-8 w-8 text-kingdom-gold mr-2" />
          <span className="font-display font-bold text-xl text-kingdom-blue">KingDom</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">How It Works</a>
          <a href="#marketplace" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">Marketplace</a>
          <a href="#why-kingdom" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">Why KingDom</a>
          <a href="#faq" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">FAQ</a>
        </div>
        
        <div className="hidden md:block">
          <Button className="btn-gold">Join Waitlist</Button>
        </div>
        
        <button className="md:hidden text-kingdom-blue p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
