
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, Clock, ArrowLeft, Sliders } from 'lucide-react';
import RestaurantCard from '../components/RestaurantCard';
import MenuModal from '../components/MenuModal';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLocation } from '../context/LocationContext';
import { calculateDistance, formatDistance } from '../utils/locationUtils';

// Import the restaurant data from Index page
import { mockRestaurants } from '../data/restaurants';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { userLocation } = useLocation();

  // Fix category name transformation to match the data
  const categoryName = category?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || '';
  
  console.log('Current category param:', category);
  console.log('Transformed category name:', categoryName);
  console.log('Total restaurants in data:', mockRestaurants.length);
  
  const sortOptions = [
    { value: 'rating', label: 'Rating' },
    { value: 'deliveryTime', label: 'Delivery Time' },
    { value: 'distance', label: 'Distance' }
  ];

  const filteredRestaurants = mockRestaurants
    .map(restaurant => {
      let distance = null;
      if (userLocation) {
        distance = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          restaurant.coordinates.lat,
          restaurant.coordinates.lng
        );
      }
      return { ...restaurant, distance };
    })
    .filter(restaurant => {
      console.log('Checking restaurant:', restaurant.name, 'Cuisine:', restaurant.cuisine);
      
      // Make the comparison case-insensitive and handle multiple possible matches
      const restaurantCuisine = restaurant.cuisine.toLowerCase();
      const searchCategory = categoryName.toLowerCase();
      
      const matchesCategory = restaurantCuisine === searchCategory || 
                             restaurantCuisine.includes(searchCategory) ||
                             searchCategory.includes(restaurantCuisine);
      
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      console.log('Category match:', matchesCategory, 'Search match:', matchesSearch);
      
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'deliveryTime') return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      if (sortBy === 'distance' && a.distance !== null && b.distance !== null) {
        return a.distance - b.distance;
      }
      return 0;
    });

  console.log('Filtered restaurants:', filteredRestaurants.length);

  const handleRestaurantClick = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setShowMenu(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-sm sticky top-0 z-40 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{categoryName} Restaurants</h1>
              <p className="text-muted-foreground">{filteredRestaurants.length} restaurants found</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder={`Search ${categoryName} restaurants...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-card text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Sliders className="w-5 h-5 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-card text-foreground"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-muted/50 rounded-full p-12 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <Search className="w-16 h-16 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No restaurants found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
            <p className="text-muted-foreground mt-2">Looking for: {categoryName}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id}
                className="animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RestaurantCard
                  restaurant={{
                    ...restaurant,
                    distance: restaurant.distance ? formatDistance(restaurant.distance) : undefined
                  }}
                  onClick={() => handleRestaurantClick(restaurant)}
                />
              </div>
            ))}
          </div>
        )}
      </main>

      {showMenu && selectedRestaurant && (
        <MenuModal
          restaurant={selectedRestaurant}
          onClose={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

export default CategoryPage;
