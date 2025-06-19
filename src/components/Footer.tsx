import React from 'react';
import { Shield, Mail, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-sm"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Gypsyland
                </h3>
                <p className="text-xs text-slate-400">Security Intelligence</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Your trusted source for cybersecurity insights, threat intelligence, and expert analysis. 
              Empowering security professionals with actionable knowledge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Articles</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Categories</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Authors</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center">
                  Threat Database
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center">
                  Security Tools
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Whitepapers</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Community</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Gypsyland. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};