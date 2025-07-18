
import React, { useState, useMemo } from 'react';
import { X, Plus, Minus, Star, Clock, MapPin, ChefHat } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ScrollArea } from './ui/scroll-area';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  location: string;
  image: string;
  description: string;
  menu: MenuItem[];
}

interface MenuModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

const MenuModal = ({ restaurant, onClose }: MenuModalProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart, cartItems, updateQuantity } = useCart();

  // Memoize expensive calculations for better performance
  const categories = useMemo(() => 
    ['All', ...new Set(restaurant.menu.map(item => item.category))], 
    [restaurant.menu]
  );
  
  const filteredMenu = useMemo(() => 
    selectedCategory === 'All' 
      ? restaurant.menu 
      : restaurant.menu.filter(item => item.category === selectedCategory),
    [restaurant.menu, selectedCategory]
  );

  const getItemQuantity = (itemId: number) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item: MenuItem) => {
    addToCart({ ...item, restaurantId: restaurant.id, restaurantName: restaurant.name });
  };

  const handleQuantityChange = (itemId: number, change: number) => {
    const currentQuantity = getItemQuantity(itemId);
    const newQuantity = currentQuantity + change;
    
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity);
    } else {
      updateQuantity(itemId, 0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-card rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-border animate-in zoom-in-95 duration-300 scroll-optimized">
        {/* Enhanced Header */}
        <div className="relative h-64 bg-gradient-to-br from-orange-500 to-red-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 smooth-transition text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center mb-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mr-3">
                <ChefHat className="w-4 h-4 inline mr-1" />
                <span className="text-sm font-medium">{restaurant.cuisine}</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-3">{restaurant.name}</h2>
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="w-4 h-4 mr-1 fill-current text-yellow-300" />
                <span className="font-medium">{restaurant.rating}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-medium">{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="font-medium">{restaurant.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className="p-6 border-b border-border bg-muted/30">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Browse Menu</h3>
          <ScrollArea className="w-full scroll-optimized">
            <div className="flex space-x-3 pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap smooth-transition font-medium ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Enhanced Menu Items with Optimized Scrolling */}
        <ScrollArea className="h-96 scroll-optimized">
          <div className="p-6">
            <div className="grid gap-6 grid-optimized">
              {filteredMenu.map(item => {
                const quantity = getItemQuantity(item.id);
                
                return (
                  <div key={item.id} className="group flex items-center space-x-6 p-5 border border-border rounded-2xl hover:shadow-lg hover:border-orange-200 smooth-transition bg-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-xl object-cover group-hover:scale-105 smooth-transition"
                      loading="lazy"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-orange-600 smooth-transition">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-2xl font-bold text-orange-500">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center">
                      {quantity > 0 ? (
                        <div className="flex items-center space-x-3 bg-muted/50 rounded-full p-1">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 smooth-transition hover:scale-110"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-lg font-bold text-foreground">{quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 smooth-transition hover:scale-110"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 smooth-transition flex items-center space-x-2 font-medium hover:scale-105 shadow-lg"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default MenuModal;
