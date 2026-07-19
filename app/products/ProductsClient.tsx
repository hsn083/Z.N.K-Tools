'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import dynamic from 'next/dynamic';
import products from '@/data/products.json';
import categories from '@/data/categories.json';

const ProductCard = dynamic(() => import('@/components/ProductCard'), {
  loading: () => <div className="glass rounded-2xl overflow-hidden h-full flex flex-col"><div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse" /><div className="p-3 md:p-5 flex flex-col flex-1"><div className="h-3 w-16 bg-white/10 rounded animate-pulse mb-2" /><div className="h-5 w-full bg-white/10 rounded animate-pulse mb-2" /><div className="h-5 w-3/4 bg-white/10 rounded animate-pulse mb-3" /><div className="flex items-center gap-2 mb-3"><div className="flex gap-1">{[...Array(5)].map((_, i) => <div key={i} className="w-3 h-3 md:w-4 md:h-4 bg-white/10 rounded animate-pulse" />)}</div><div className="h-3 w-12 bg-white/10 rounded animate-pulse" /></div><div className="h-6 w-24 bg-white/10 rounded animate-pulse mb-4" /><div className="hidden md:block space-y-2 mb-4 flex-1"><div className="h-3 w-full bg-white/10 rounded animate-pulse" /><div className="h-3 w-5/6 bg-white/10 rounded animate-pulse" /></div><div className="h-10 sm:h-11 md:h-12 bg-white/10 rounded-xl animate-pulse mt-auto" /></div></div>
});

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  // Set search query from URL parameter on mount
  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const allCategories = ['All', ...categories.map(c => c.name)];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popular':
        default:
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
    });

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">All Products</h1>
          <p className="text-gray-400">Browse our complete collection of premium digital tools</p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl glass text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass text-white hover:bg-white/10 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="glass rounded-2xl p-6 mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="text-white font-medium mb-2 block">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  >
                    {allCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="text-white font-medium mb-2 block">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  >
                    <option value="popular">Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A-Z</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
