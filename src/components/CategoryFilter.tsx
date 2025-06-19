import React from 'react';
import { categories } from '../data/blogPosts';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 border border-slate-700'
          }`}
        >
          {category.name}
          <span className="ml-2 text-xs opacity-75">({category.count})</span>
        </button>
      ))}
    </div>
  );
};