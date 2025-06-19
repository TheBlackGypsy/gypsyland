import React, { useState } from 'react';
import { BlogCard } from './BlogCard';
import { CategoryFilter } from './CategoryFilter';
import { BookOpen, TrendingUp, Clock, Filter } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

interface BlogSectionProps {
  searchQuery: string;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  searchQuery,
  selectedCategory,
  onCategoryChange
}) => {
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'featured'>('latest');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(' & ', '-').replace(' ', '-') === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'popular':
        return b.readingTime - a.readingTime; // Using reading time as popularity proxy
      case 'latest':
      default:
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    }
  });

  const featuredPosts = sortedPosts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <BookOpen className="h-12 w-12 text-cyan-400" />
              <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-md"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cybersecurity Insights
          </h2>
          
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            Deep-dive articles, expert analysis, and actionable intelligence from the cybersecurity frontlines. 
            Stay informed about the latest threats, technologies, and best practices.
          </p>

          {/* Blog Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white">{blogPosts.length}</div>
              <div className="text-sm text-slate-400">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">{featuredPosts.length}</div>
              <div className="text-sm text-slate-400">Featured Posts</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">
                {Math.round(blogPosts.reduce((acc, post) => acc + post.readingTime, 0) / blogPosts.length)}
              </div>
              <div className="text-sm text-slate-400">Avg. Read Time</div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
              />
            </div>

            {/* Sort Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-400">Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'featured')}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                <option value="latest">Latest</option>
                <option value="featured">Featured</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></span>
              Featured Articles
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map(post => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></span>
              Latest Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <BookOpen className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No articles found</h3>
            <p className="text-slate-400 mb-4">
              Try adjusting your search or filter criteria to find more articles.
            </p>
            <button
              onClick={() => {
                onCategoryChange('all');
              }}
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Security Insights
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get notified when we publish new articles, vulnerability reports, and security analysis. 
              Join our community of security professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-200">
                Subscribe to Newsletter
              </button>
              <button className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200">
                Follow on Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};