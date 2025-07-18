import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Filter,
  ShoppingCart,
  Sliders,
  Zap,
  Navigation,
  Sparkles,
  Utensils,
} from "lucide-react";
import RestaurantCard from "../components/RestaurantCard";
import MenuModal from "../components/MenuModal";
import CartSidebar from "../components/CartSidebar";
import AuthModal from "../components/AuthModal";
import LocationBanner from "../components/LocationBanner";
import CuratedCategories from "../components/CuratedCategories";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "../context/LocationContext";
import { calculateDistance, formatDistance } from "../utils/locationUtils";
import { mockRestaurants } from "../data/restaurants";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const { cartItems } = useCart();
  const { user } = useAuth();
  const { userLocation, isLoadingLocation } = useLocation();

  const cuisines = [
    "All",
    "Biryani",
    "Pizza",
    "Burger",
    "Cake",
    "Paratha",
    "Noodles",
    "Chinese",
    "Poori",
    "Omelette",
    "Veg",
    "Tea",
    "North Indian",
    "Gulab Jamun",
    "Ice Cream",
    "Kebabs",
    "South Indian",
    "Chole Bhature",
    "Khichdi",
    "Upma",
    "Coffee",
  ];
  const sortOptions = [
    { value: "rating", label: "Rating" },
    { value: "deliveryTime", label: "Delivery Time" },
    { value: "distance", label: "Distance" },
  ];

  // Optimize filtering with better memoization
  const filteredRestaurants = useMemo(() => {
    const filtered = mockRestaurants
      .map((restaurant) => {
        let distance = null;
        if (userLocation) {
          distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            restaurant.coordinates.lat,
            restaurant.coordinates.lng,
          );
        }
        return { ...restaurant, distance };
      })
      .filter((restaurant) => {
        const matchesSearch =
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        let matchesCuisine =
          selectedCuisine === "All" ||
          restaurant.cuisine
            .toLowerCase()
            .includes(selectedCuisine.toLowerCase()) ||
          selectedCuisine
            .toLowerCase()
            .includes(restaurant.cuisine.toLowerCase());

        return matchesSearch && matchesCuisine;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "deliveryTime")
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        if (
          sortBy === "distance" &&
          a.distance !== null &&
          b.distance !== null
        ) {
          return a.distance - b.distance;
        }
        return 0;
      });

    return filtered;
  }, [mockRestaurants, userLocation, searchTerm, selectedCuisine, sortBy]);

  const handleRestaurantClick = React.useCallback((restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setShowMenu(true);
  }, []);

  const handleCategorySelect = React.useCallback((category: string) => {
    setSearchTerm("");
    setSelectedCuisine(category);
    setShowFilters(false);
  }, []);

  const totalCartItems = React.useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Premium Header with Glass Effect */}
      <header className="bg-card/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-border/20">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl p-3 shadow-lg group-hover:shadow-xl smooth-transition group-hover:scale-105">
                  <Utensils className="w-7 h-7 text-white animate-pulse" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    Taste Trail
                  </h1>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Food Recipe Discovery
                  </div>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground bg-gradient-to-r from-muted/40 to-muted/60 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50 shadow-sm">
                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                <span className="text-sm font-medium">
                  {isLoadingLocation
                    ? "Locating..."
                    : userLocation
                      ? "Your Location"
                      : "Location needed"}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3 bg-gradient-to-r from-muted/40 to-muted/60 backdrop-blur-sm rounded-full px-5 py-2.5 border border-border/50 shadow-sm">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">
                      {user.name[0]}
                    </span>
                  </div>
                  <span className="text-foreground font-medium">
                    Hello, {user.name}
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="px-8 py-3 text-orange-500 bg-orange-50 border-2 border-orange-200 rounded-full hover:bg-orange-100 hover:border-orange-300 smooth-transition font-semibold hover:scale-105 hover:shadow-md"
                >
                  Sign In
                </button>
              )}

              <button
                onClick={() => setShowCart(true)}
                className="relative p-4 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white rounded-full hover:from-orange-600 hover:via-red-600 hover:to-pink-600 smooth-transition shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center font-bold animate-bounce shadow-lg">
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-16 border-b border-border/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Discover Amazing Indian Food
              <span className="block bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Near You
              </span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Order from authentic Indian restaurants and get it delivered fresh
              to your doorstep with our premium delivery experience
            </p>
          </div>

          <LocationBanner />

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Indian restaurants, dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 border-2 border-border/50 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-card/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground shadow-lg smooth-transition hover:shadow-xl"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-3 px-8 py-5 border-2 border-border/50 rounded-2xl hover:bg-muted/30 smooth-transition bg-card/70 backdrop-blur-sm text-foreground shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Sliders className="w-5 h-5" />
                <span className="font-semibold">Filters</span>
              </button>
            </div>

            {showFilters && (
              <div className="bg-card/80 backdrop-blur-lg border-2 border-border/30 rounded-3xl p-8 mb-8 shadow-xl animate-in slide-in-from-top duration-500">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-4">
                      Cuisine Type
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {cuisines.map((cuisine) => (
                        <button
                          key={cuisine}
                          onClick={() => setSelectedCuisine(cuisine)}
                          className={`px-5 py-2.5 rounded-full text-sm font-semibold smooth-transition ${
                            selectedCuisine === cuisine
                              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
                              : "bg-muted/60 text-muted-foreground hover:bg-muted/80 hover:scale-105"
                          }`}
                        >
                          {cuisine}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-4">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-5 py-4 border-2 border-border/50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-card/70 backdrop-blur-sm text-foreground shadow-lg smooth-transition"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CuratedCategories onCategorySelect={handleCategorySelect} />

      {/* Optimized Restaurant Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {searchTerm || selectedCuisine !== "All"
              ? `${filteredRestaurants.length} restaurants found ${selectedCuisine !== "All" ? `for ${selectedCuisine}` : ""}`
              : userLocation
                ? "Indian Restaurants Near You"
                : "Popular Indian Restaurants"}
          </h2>
          <p className="text-muted-foreground">
            Authentic Indian cuisine delivered to your doorstep with premium
            quality
          </p>
        </div>

        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-muted/30 rounded-full p-12 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <Search className="w-16 h-16 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              No restaurants found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={{
                  ...restaurant,
                  distance: restaurant.distance
                    ? formatDistance(restaurant.distance)
                    : undefined,
                }}
                onClick={() => handleRestaurantClick(restaurant)}
              />
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

      {showCart && <CartSidebar onClose={() => setShowCart(false)} />}

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Index;
