'use client';

import { motion } from 'framer-motion';
import ReviewCard from '@/components/ReviewCard';
import reviews from '@/data/reviews.json';
import products from '@/data/products.json';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Customer Reviews</h1>
          <p className="text-gray-400">See what our customers are saying about us</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">5.0</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">{reviews.length}+</div>
            <div className="text-gray-400">Sample Reviews</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Verified Buyers</div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Note:</strong> These are sample/demo reviews for display purposes. 
            Real customer reviews will be added as we receive them.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
