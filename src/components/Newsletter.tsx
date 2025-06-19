import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Mail className="h-12 w-12 text-cyan-400" />
              <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-md"></div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Informed, Stay Secure
          </h2>
          
          <p className="text-lg text-slate-300 mb-8">
            Get the latest cybersecurity insights, threat intelligence, and expert analysis delivered directly to your inbox. 
            Join thousands of security professionals who trust our weekly newsletter.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={subscribed}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {subscribed ? (
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Subscribed!
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          <p className="text-sm text-slate-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};