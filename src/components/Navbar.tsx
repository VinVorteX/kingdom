
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Crown, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Crown className="h-8 w-8 text-kingdom-gold mr-2" />
            <span className="font-display font-bold text-xl text-kingdom-blue">KingDom</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">How It Works</a>
          <a href="#marketplace" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">Marketplace</a>
          <a href="#why-kingdom" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">Why KingDom</a>
          <a href="#faq" className="text-kingdom-blue hover:text-kingdom-gold transition-colors">FAQ</a>
        </div>
        
        <div className="hidden md:block">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  <User className="h-4 w-4 mr-2" />
                  {user.email?.split('@')[0] || 'Account'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" className="flex items-center w-full">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button className="bg-kingdom-gold hover:bg-kingdom-lightgold text-kingdom-blue">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          )}
        </div>
        
        <button 
          className="md:hidden text-kingdom-blue p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-kingdom-blue hover:text-kingdom-gold transition-colors" onClick={toggleMobileMenu}>How It Works</a>
              <a href="#marketplace" className="text-kingdom-blue hover:text-kingdom-gold transition-colors" onClick={toggleMobileMenu}>Marketplace</a>
              <a href="#why-kingdom" className="text-kingdom-blue hover:text-kingdom-gold transition-colors" onClick={toggleMobileMenu}>Why KingDom</a>
              <a href="#faq" className="text-kingdom-blue hover:text-kingdom-gold transition-colors" onClick={toggleMobileMenu}>FAQ</a>
              {user ? (
                <>
                  <Link to="/profile" className="text-kingdom-blue hover:text-kingdom-gold transition-colors" onClick={toggleMobileMenu}>Profile</Link>
                  <button onClick={() => { signOut(); toggleMobileMenu(); }} className="flex items-center text-kingdom-blue hover:text-kingdom-gold transition-colors">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/auth" className="flex items-center text-kingdom-blue hover:text-kingdom-gold transition-colors" onClick={toggleMobileMenu}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
