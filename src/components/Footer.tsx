import React from 'react';
import { Shield, Mail, Github, Twitter, Linkedin, ExternalLink, MessageCircle, Globe } from 'lucide-react';

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
            
            {/* Social Media Contact Widgets */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/quintinmcfadden/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white group-hover:text-blue-300">LinkedIn</p>
                    <p className="text-xs text-slate-400 truncate">Professional Network</p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-blue-400" />
                </a>

                {/* Twitter */}
                <a 
                  href="https://twitter.com/your-handle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <Twitter className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white group-hover:text-cyan-300">Twitter</p>
                    <p className="text-xs text-slate-400 truncate">Latest Updates</p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-cyan-400" />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <Github className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white group-hover:text-purple-300">GitHub</p>
                    <p className="text-xs text-slate-400 truncate">Code & Projects</p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-purple-400" />
                </a>

                {/* Email */}
                <a 
                  href="mailto:contact@gypsyland.com" 
                  className="flex items-center space-x-3 p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-green-500/50 hover:bg-slate-800 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5 text-green-400 group-hover:text-green-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white group-hover:text-green-300">Email</p>
                    <p className="text-xs text-slate-400 truncate">Direct Contact</p>
                  </div>
                </a>
              </div>

              {/* Quick Social Links */}
              <div className="flex space-x-3 pt-2">
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-blue-400 hover:text-blue-300 hover:border-blue-500/50 transition-all duration-200"
                  title="Follow on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com/your-handle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-all duration-200"
                  title="Follow on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-purple-400 hover:text-purple-300 hover:border-purple-500/50 transition-all duration-200"
                  title="Follow on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="mailto:contact@gypsyland.com"
                  className="p-2 bg-slate-800 border border-slate-700 rounded-lg text-green-400 hover:text-green-300 hover:border-green-500/50 transition-all duration-200"
                  title="Send Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-cyan-400 transition-colors">Articles</a></li>
              <li><a href="#resources" className="text-slate-400 hover:text-cyan-400 transition-colors">Interactive Labs</a></li>
              <li><a href="#newsletter" className="text-slate-400 hover:text-cyan-400 transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
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