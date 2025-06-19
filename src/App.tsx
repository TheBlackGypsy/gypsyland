import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResourcesSection } from './components/ResourcesSection';
import { BlogSection } from './components/BlogSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-slate-900">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />
      
      {/* Interactive Resources Section */}
      <ResourcesSection />
      
      {/* Blog Section */}
      <BlogSection 
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;