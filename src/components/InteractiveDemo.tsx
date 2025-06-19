import React, { useState } from 'react';
import { Play, Code, ExternalLink, Shield, AlertTriangle } from 'lucide-react';

interface InteractiveDemoProps {
  title: string;
  description: string;
  type: 'vulnerability' | 'tool' | 'challenge' | 'template';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  stackblitzUrl?: string;
  boltPrompt?: string;
  tags: string[];
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({
  title,
  description,
  type,
  difficulty,
  stackblitzUrl,
  boltPrompt,
  tags
}) => {
  const [showEmbed, setShowEmbed] = useState(false);

  const getTypeIcon = () => {
    switch (type) {
      case 'vulnerability':
        return <AlertTriangle className="h-5 w-5 text-red-400" />;
      case 'tool':
        return <Code className="h-5 w-5 text-blue-400" />;
      case 'challenge':
        return <Shield className="h-5 w-5 text-green-400" />;
      case 'template':
        return <Play className="h-5 w-5 text-purple-400" />;
      default:
        return <Code className="h-5 w-5 text-cyan-400" />;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'advanced':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getTypeIcon()}
            <div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor()}`}>
                {difficulty}
              </span>
            </div>
          </div>
        </div>

        <p className="text-slate-300 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {stackblitzUrl && (
            <>
              <button
                onClick={() => setShowEmbed(!showEmbed)}
                className="flex items-center justify-center px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                <Play className="h-4 w-4 mr-2" />
                {showEmbed ? 'Hide Demo' : 'Try Interactive Demo'}
              </button>
              <a
                href={stackblitzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-slate-700 text-slate-300 border border-slate-600 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in StackBlitz
              </a>
            </>
          )}
          {boltPrompt && (
            <button
              onClick={() => window.open(`https://bolt.new?prompt=${encodeURIComponent(boltPrompt)}`, '_blank')}
              className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all"
            >
              <Shield className="h-4 w-4 mr-2" />
              Try with Bolt.new
            </button>
          )}
        </div>

        {showEmbed && stackblitzUrl && (
          <div className="mt-6 border-t border-slate-700 pt-6">
            <iframe
              src={`${stackblitzUrl}?embed=1&file=index.js&hideNavigation=1&hideDevTools=1`}
              className="w-full h-96 border-0 rounded-lg"
              title={title}
              allow="clipboard-write; encrypted-media; geolocation; hid; type-attributes; usb; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
        )}
      </div>
    </div>
  );
};