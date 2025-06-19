import React, { useState } from 'react';
import { Search, Menu, X, Shield, Bell, User } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Gypsyland
              </h1>
              <p className="text-xs text-slate-400">Security Intelligence</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Home</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Articles</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Resources</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">About</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all w-64"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Bell className="h-5 w-5" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Home</a>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Articles</a>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Resources</a>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">About</a>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
            </nav>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};