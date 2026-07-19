export default function ProductCardSkeleton() {
  return (
    <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Image Skeleton */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="p-3 md:p-5 flex flex-col flex-1">
        {/* Category Skeleton */}
        <div className="h-3 w-16 bg-white/10 rounded animate-pulse mb-2" />
        
        {/* Name Skeleton */}
        <div className="h-5 w-full bg-white/10 rounded animate-pulse mb-2" />
        <div className="h-5 w-3/4 bg-white/10 rounded animate-pulse mb-3" />
        
        {/* Rating Skeleton */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 md:w-4 md:h-4 bg-white/10 rounded animate-pulse" />
            ))}
          </div>
          <div className="h-3 w-12 bg-white/10 rounded animate-pulse" />
        </div>
        
        {/* Price Skeleton */}
        <div className="h-6 w-24 bg-white/10 rounded animate-pulse mb-4" />
        
        {/* Description Skeleton */}
        <div className="hidden md:block space-y-2 mb-4 flex-1">
          <div className="h-3 w-full bg-white/10 rounded animate-pulse" />
          <div className="h-3 w-5/6 bg-white/10 rounded animate-pulse" />
        </div>
        
        {/* Button Skeleton */}
        <div className="h-10 sm:h-11 md:h-12 bg-white/10 rounded-xl animate-pulse mt-auto" />
      </div>
    </div>
  );
}
