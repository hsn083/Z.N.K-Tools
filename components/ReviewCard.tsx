'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Review } from '@/types';
import { cn } from '@/utils/cn';

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export default function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  const [imageError, setImageError] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful || 0);
  const [hasMarkedHelpful, setHasMarkedHelpful] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load helpful state from localStorage on mount
  useEffect(() => {
    const storageKey = `review_helpful_${review.id}`;
    const storedData = localStorage.getItem(storageKey);
    
    if (storedData) {
      const { count, marked } = JSON.parse(storedData);
      setHelpfulCount(count);
      setHasMarkedHelpful(marked);
    }
  }, [review.id]);

  // Handle helpful button click
  const handleHelpfulClick = () => {
    if (hasMarkedHelpful) return;

    const newCount = helpfulCount + 1;
    setHelpfulCount(newCount);
    setHasMarkedHelpful(true);
    setIsAnimating(true);

    // Store in localStorage
    const storageKey = `review_helpful_${review.id}`;
    localStorage.setItem(storageKey, JSON.stringify({
      count: newCount,
      marked: true
    }));

    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
            {review.avatar && !imageError ? (
              <Image
                src={review.avatar}
                alt={review.customerName}
                fill
                className="object-cover"
                sizes="48px"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-white font-bold">{review.customerName.charAt(0)}</span>
            )}
          </div>
          <div>
            <h4 className="text-white font-semibold">{review.customerName}</h4>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3 h-3',
                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                    )}
                  />
                ))}
              </div>
              {review.verifiedBuyer && (
                <div className="flex items-center gap-1 text-green-400 text-xs">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <span className="text-gray-500 text-sm">{review.date}</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 mb-4">{review.reviewText}</p>

      {/* Helpful */}
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <button
          onClick={handleHelpfulClick}
          disabled={hasMarkedHelpful}
          className={cn(
            "flex items-center gap-1 transition-colors",
            hasMarkedHelpful
              ? "text-green-400 cursor-default"
              : "hover:text-white cursor-pointer"
          )}
        >
          <motion.div
            animate={isAnimating ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ThumbsUp className={cn("w-4 h-4", hasMarkedHelpful && "fill-green-400")} />
          </motion.div>
          <span>
            {hasMarkedHelpful ? "Marked Helpful" : `Helpful (${helpfulCount})`}
          </span>
        </button>
      </div>
    </motion.div>
  );
}
