import React from 'react';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Shield className="h-16 w-16 text-cyan-400" />
              <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-lg"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cyber Security
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Intelligence Hub
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of emerging threats with cutting-edge insights, expert analysis, and actionable intelligence 
            from the cybersecurity frontlines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-200">
              Explore Articles
            </button>
            <button className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200">
              Subscribe to Newsletter
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">500K+</div>
              <div className="text-sm text-slate-400">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-sm text-slate-400">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-slate-400">Community Members</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-slate-400">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </section>
  );
};