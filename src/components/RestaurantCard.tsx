
import React from 'react';
import { Star, Clock, MapPin, ChefHat, Navigation, Sparkles, Award, Zap } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    location: string;
    image: string;
    description: string;
    distance?: string;
  };
  onClick: () => void;
}

const RestaurantCard = React.memo(({ restaurant, onClick }: RestaurantCardProps) => {
  const isPremium = restaurant.rating >= 4.7;
  const isTopRated = restaurant.rating >= 4.8;

  return (
    <div 
      onClick={onClick}
      className="group relative bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-border/30 hover:border-orange-200/60 transform hover:-translate-y-1 hover:scale-[1.02] will-change-transform"
    >
      {/* Simplified premium badge */}
      {isPremium && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center">
          <Award className="w-3 h-3 mr-1" />
          PREMIUM
        </div>
      )}

      {/* Simplified glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />

      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
        
        {/* Simplified gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Top-rated indicator */}
        {isTopRated && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-1.5 shadow-lg">
            <Zap className="w-3 h-3 text-white" />
          </div>
        )}

        {/* Simplified floating rating */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center shadow-lg">
          <Star className="w-4 h-4 text-yellow-500 fill-current mr-1.5" />
          <span className="text-sm font-bold text-gray-800">{restaurant.rating}</span>
        </div>

        {/* Simplified cuisine badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg">
          <ChefHat className="w-3 h-3 inline mr-1.5" />
          {restaurant.cuisine}
        </div>

        {/* Distance badge */}
        {restaurant.distance && (
          <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg">
            <Navigation className="w-3 h-3 inline mr-1.5" />
            {restaurant.distance}
          </div>
        )}
      </div>
      
      <div className="p-6 relative">
        {/* Restaurant name */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
          {restaurant.name}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {restaurant.description}
        </p>
        
        {/* Info section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center bg-muted/50 px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-medium text-foreground">{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center bg-muted/50 px-3 py-2 rounded-lg">
              <MapPin className="w-4 h-4 mr-2 text-orange-500" />
              <span className="font-medium text-foreground truncate max-w-24">{restaurant.location}</span>
            </div>
          </div>
        </div>
        
        {/* Simplified hover indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
          <div className="mt-2 text-center">
            <span className="text-orange-600 font-medium text-sm flex items-center justify-center">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Click to explore menu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

RestaurantCard.displayName = 'RestaurantCard';

export default RestaurantCard;
