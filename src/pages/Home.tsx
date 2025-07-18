import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, Star, Sparkles, Heart, Utensils, Users, Award, Zap, Shield, CheckCircle, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import heroFood from "@/assets/hero-food.jpg";
import happyCustomers from "@/assets/happy-customers.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
import deliveryRider from "@/assets/delivery-rider.jpg";

const Home = () => {
  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 premium-gradient rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent to-secondary rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>

      {/* Hero Section with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroFood} 
            alt="Delicious Indian cuisine" 
            className="w-full h-[90vh] object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-12">
            {/* Greeting */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-effect border-0 mb-6 animate-shimmer bg-gradient-to-r from-transparent via-primary/5 to-transparent bg-[length:200%_100%]">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">Welcome to Premium Indian Dining</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-bold text-gradient-primary animate-glow leading-none">
                🙏 Namaste
              </h1>
              
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Welcome to Your Favorite Food Delivery Service
                </p>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover delicious restaurants near you and enjoy authentic Indian cuisine delivered fresh to your doorstep with premium quality and exceptional service
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/restaurants">
                <Button size="lg" className="text-lg px-10 py-7 rounded-full premium-gradient text-white hover:scale-105 transition-all duration-300 glow-shadow font-semibold group">
                  <Utensils className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Explore Restaurants
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 rounded-full border-2 border-primary/20 glass-effect hover:glass-effect hover:border-primary/40 hover:scale-105 transition-all duration-300">
                <Heart className="mr-2 h-5 w-5" />
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary">10K+</div>
            <p className="text-muted-foreground font-medium">Happy Customers</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gradient-secondary">500+</div>
            <p className="text-muted-foreground font-medium">Partner Restaurants</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary">15min</div>
            <p className="text-muted-foreground font-medium">Avg Delivery Time</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-gradient-secondary">4.9★</div>
            <p className="text-muted-foreground font-medium">Customer Rating</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Experience the difference with our premium food delivery service</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-10 text-center space-y-6 glass-effect border-0 elegant-shadow hover-lift group relative overflow-hidden">
            <div className="absolute inset-0 premium-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto premium-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-primary">Find Nearby</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Discover the best restaurants in your area with our smart location-based search technology
              </p>
            </div>
          </Card>

          <Card className="p-10 text-center space-y-6 glass-effect border-0 elegant-shadow hover-lift group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-secondary">Fast Delivery</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Quick and reliable delivery service to bring your favorite meals to you in record time
              </p>
            </div>
          </Card>

          <Card className="p-10 text-center space-y-6 glass-effect border-0 elegant-shadow hover-lift group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-primary">Top Rated</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Only the highest quality restaurants with excellent customer ratings and premium service
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Simple steps to get your favorite food delivered</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-6 group">
            <div className="relative mx-auto w-32 h-32 rounded-2xl overflow-hidden glass-effect group-hover:scale-105 transition-transform duration-300">
              <img src={happyCustomers} alt="Browse restaurants" className="w-full h-full object-cover" />
              <div className="absolute inset-0 premium-gradient opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Browse & Choose</h3>
            <p className="text-muted-foreground">Explore hundreds of restaurants and select your favorite dishes</p>
          </div>

          <div className="text-center space-y-6 group">
            <div className="relative mx-auto w-32 h-32 rounded-2xl overflow-hidden glass-effect group-hover:scale-105 transition-transform duration-300">
              <img src={chefCooking} alt="Food preparation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Fresh Preparation</h3>
            <p className="text-muted-foreground">Our partner chefs prepare your order with fresh, quality ingredients</p>
          </div>

          <div className="text-center space-y-6 group">
            <div className="relative mx-auto w-32 h-32 rounded-2xl overflow-hidden glass-effect group-hover:scale-105 transition-transform duration-300">
              <img src={deliveryRider} alt="Fast delivery" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">3</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Swift Delivery</h3>
            <p className="text-muted-foreground">Fast and secure delivery right to your doorstep within minutes</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join thousands of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 space-y-6 glass-effect border-0 elegant-shadow hover-lift relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Quote className="h-8 w-8 text-primary/20" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Amazing food quality and super fast delivery! The biryani was absolutely delicious and arrived hot."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center">
                  <span className="text-white font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold">Arjun Patel</p>
                  <p className="text-sm text-muted-foreground">Regular Customer</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6 glass-effect border-0 elegant-shadow hover-lift relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Quote className="h-8 w-8 text-accent/20" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Best food delivery service in the city! Fresh ingredients, authentic taste, and excellent customer service."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                  <span className="text-white font-semibold">P</span>
                </div>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">Food Blogger</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6 glass-effect border-0 elegant-shadow hover-lift relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <Quote className="h-8 w-8 text-secondary/20" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "I order from here weekly. The variety is incredible and the delivery is always on time. Highly recommended!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                  <span className="text-white font-semibold">R</span>
                </div>
                <div>
                  <p className="font-semibold">Raj Kumar</p>
                  <p className="text-sm text-muted-foreground">Tech Professional</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Premium Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">Premium Quality, Every Time</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're committed to delivering the finest dining experience with unmatched quality and service standards.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full premium-gradient flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fresh Ingredients</h3>
                  <p className="text-muted-foreground">Sourced daily from trusted suppliers for maximum freshness and taste</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Safe & Hygienic</h3>
                  <p className="text-muted-foreground">Strict hygiene protocols and contactless delivery for your safety</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Award Winning</h3>
                  <p className="text-muted-foreground">Recognized as the best food delivery service in the region</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden glass-effect elegant-shadow">
              <img src={heroFood} alt="Premium Indian cuisine" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 premium-gradient opacity-10"></div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-8 -right-8 glass-effect rounded-2xl p-6 elegant-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-6 elegant-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Available Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center p-16 rounded-3xl glass-effect elegant-shadow relative overflow-hidden">
          <div className="absolute inset-0 premium-gradient opacity-5"></div>
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
                Ready to satisfy your cravings?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of happy customers who trust us for their daily meals. Order now and experience the difference!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/restaurants">
                <Button size="lg" className="text-xl px-12 py-8 rounded-full premium-gradient text-white hover:scale-105 transition-all duration-300 glow-shadow font-semibold group">
                  <Zap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Start Ordering Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2 border-primary/30 glass-effect hover:premium-gradient hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300">
                <Users className="mr-2 h-5 w-5" />
                Join 10K+ Customers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;