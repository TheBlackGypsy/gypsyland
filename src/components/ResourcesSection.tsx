import React from 'react';
import { InteractiveDemo } from './InteractiveDemo';
import { Code, Shield, Zap, BookOpen, AlertTriangle } from 'lucide-react';

const interactiveDemos = [
  {
    title: 'SQL Injection Vulnerability Demo',
    description: 'Explore a vulnerable login form and learn how to exploit and fix SQL injection vulnerabilities in a safe environment.',
    type: 'vulnerability' as const,
    difficulty: 'beginner' as const,
    demoUrl: '#',
    tags: ['SQL Injection', 'Web Security', 'Database Security']
  },
  {
    title: 'XSS Attack Playground',
    description: 'Interactive environment to understand Cross-Site Scripting attacks and learn proper input sanitization techniques.',
    type: 'vulnerability' as const,
    difficulty: 'intermediate' as const,
    demoUrl: '#',
    tags: ['XSS', 'Input Validation', 'Frontend Security']
  },
  {
    title: 'Password Hash Generator',
    description: 'Learn about different hashing algorithms and see how secure password hashing works in practice.',
    type: 'tool' as const,
    difficulty: 'beginner' as const,
    demoUrl: '#',
    tags: ['Cryptography', 'Password Security', 'Hashing']
  },
  {
    title: 'JWT Security Challenge',
    description: 'Analyze JWT tokens, identify vulnerabilities, and implement secure JWT handling practices.',
    type: 'challenge' as const,
    difficulty: 'advanced' as const,
    demoUrl: '#',
    tags: ['JWT', 'Authentication', 'Token Security']
  },
  {
    title: 'Secure API Template',
    description: 'Production-ready Node.js API template with authentication, rate limiting, and security best practices.',
    type: 'template' as const,
    difficulty: 'intermediate' as const,
    demoUrl: '#',
    tags: ['API Security', 'Node.js', 'Best Practices']
  },
  {
    title: 'Network Port Scanner',
    description: 'Educational port scanning tool to understand network reconnaissance and security assessment techniques.',
    type: 'tool' as const,
    difficulty: 'advanced' as const,
    demoUrl: '#',
    tags: ['Network Security', 'Reconnaissance', 'Penetration Testing']
  }
];

export const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Code className="h-12 w-12 text-cyan-400" />
              <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-md"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interactive Security Labs
          </h2>
          
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            Hands-on cybersecurity learning with interactive demos, vulnerability playgrounds, and security tools. 
            Practice in safe, controlled environments designed for learning and experimentation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <div className="text-sm font-medium text-white">Vulnerability Demos</div>
              <div className="text-xs text-slate-400">Safe Exploitation</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Code className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-sm font-medium text-white">Security Tools</div>
              <div className="text-xs text-slate-400">Interactive Utilities</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <div className="text-sm font-medium text-white">Challenges</div>
              <div className="text-xs text-slate-400">Test Your Skills</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-sm font-medium text-white">Templates</div>
              <div className="text-xs text-slate-400">Secure Code</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interactiveDemos.map((demo, index) => (
            <InteractiveDemo key={index} {...demo} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Want to Learn More About Cybersecurity?
            </h3>
            <p className="text-slate-300 mb-6">
              Explore our comprehensive collection of articles, tutorials, and hands-on labs designed to enhance your security knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Read Our Articles
              </button>
              <button
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};