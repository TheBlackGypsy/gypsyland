import React from 'react';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <article className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full backdrop-blur-sm border border-cyan-500/30">
            {post.category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full backdrop-blur-sm border border-yellow-500/30">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className={`font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {post.title}
        </h3>
        
        <p className="text-slate-300 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="inline-flex items-center px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full border-2 border-slate-600"
              />
              <div>
                <p className="text-sm font-medium text-white">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-slate-400 text-sm">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime} min read
              </span>
            </div>
          </div>
          
          <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group/button">
            Read More
            <ArrowRight className="h-4 w-4 ml-1 transform group-hover/button:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};