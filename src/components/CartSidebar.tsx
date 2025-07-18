
import React from 'react';
import { X, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface CartSidebarProps {
  onClose: () => void;
}

const CartSidebar = ({ onClose }: CartSidebarProps) => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { user } = useAuth();

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!user) {
      alert('Please sign in to place an order');
      return;
    }
    alert('Checkout functionality will be implemented with payment integration');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Enhanced Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-orange-50 to-red-50">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 rounded-full p-2">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Your Order</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 animate-in fade-in duration-500">
                <div className="bg-muted/50 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground">Add some delicious food to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex items-center space-x-4 p-4 border border-border rounded-2xl hover:shadow-md transition-all duration-300 bg-card group animate-in slide-in-from-bottom duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm truncate group-hover:text-orange-600 transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">{item.restaurantName}</p>
                      <p className="text-orange-500 font-bold">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-all duration-200 hover:scale-110"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-all duration-200 hover:scale-110"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-border p-6 bg-gradient-to-r from-orange-50 to-red-50">
              <div className="space-y-4">
                {/* Order Summary */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold text-foreground">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-semibold text-foreground">$2.99</span>
                  </div>
                  <div className="h-px bg-border my-3"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-xl font-bold text-orange-500">${(getCartTotal() + 2.99).toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>
                
                {!user && (
                  <p className="text-xs text-muted-foreground text-center">
                    Sign in required to place order
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
