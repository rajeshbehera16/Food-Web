import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, Star, Sparkles, Heart, Utensils, Users, Award, Zap, Shield, CheckCircle, Quote, Crown, Truck, ChefHat, Phone, Mail, MapPinIcon, Instagram, Twitter, Facebook, Play, TrendingUp, Gift, Flame, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import heroFood from "@/assets/hero-food.jpg";
import happyCustomers from "@/assets/happy-customers.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
import deliveryRider from "@/assets/delivery-rider.jpg";

const Home = () => {
  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 premium-gradient rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent to-secondary rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Additional Premium Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-2xl opacity-20 animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Animated Sparkles */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse opacity-60" />
      </div>
      <div className="absolute top-1/3 right-1/3">
        <Star className="w-4 h-4 text-orange-400 animate-pulse opacity-50" style={{animationDelay: '1.5s'}} />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <Crown className="w-5 h-5 text-yellow-500 animate-pulse opacity-40" style={{animationDelay: '2.5s'}} />
      </div>

      {/* Hero Section with Image */}
      <div className="relative group">
        <div className="absolute inset-0 z-0 transition-all duration-1000 group-hover:scale-105">
          <img
            src={heroFood}
            alt="Delicious Indian cuisine"
            className="w-full h-[90vh] object-cover opacity-20 transition-all duration-1000 group-hover:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95 transition-all duration-1000 group-hover:from-background/90 group-hover:via-background/70 group-hover:to-background/90"></div>

          {/* Premium overlay effects on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-12">
            {/* Enhanced Greeting */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border-0 mb-6 animate-shimmer bg-gradient-to-r from-transparent via-primary/5 to-transparent bg-[length:200%_100%] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group/badge">
                <Crown className="h-6 w-6 text-yellow-500 animate-pulse group-hover/badge:animate-bounce" />
                <span className="text-base font-semibold text-foreground group-hover/badge:text-primary transition-colors duration-300">Premium Indian Dining Experience</span>
                <Gem className="h-5 w-5 text-purple-500 animate-pulse group-hover/badge:animate-spin" style={{animationDelay: '0.5s'}} />
              </div>

              <div className="relative cursor-pointer group/title">
                <h1 className="text-8xl md:text-[12rem] font-bold text-gradient-primary animate-glow leading-none relative z-10 transition-all duration-700 group-hover/title:scale-105 group-hover/title:drop-shadow-2xl">
                  🙏 Namaste
                </h1>
                {/* Enhanced glowing backdrop with hover */}
                <div className="absolute inset-0 text-8xl md:text-[12rem] font-bold text-primary/10 blur-2xl animate-pulse-slow transition-all duration-700 group-hover/title:text-primary/20 group-hover/title:blur-3xl">
                  🙏 Namaste
                </div>

                {/* Additional premium glow rings on hover */}
                <div className="absolute inset-0 opacity-0 group-hover/title:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 text-8xl md:text-[12rem] font-bold text-orange-400/10 blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}>
                    🙏 Namaste
                  </div>
                  <div className="absolute inset-0 text-8xl md:text-[12rem] font-bold text-yellow-400/5 blur-[50px] animate-pulse" style={{animationDelay: '1s'}}>
                    🙏 Namaste
                  </div>
                </div>

                {/* Floating sparkles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover/title:opacity-100 transition-opacity duration-500">
                  <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-yellow-400 animate-ping" style={{animationDelay: '0.2s'}} />
                  <Star className="absolute bottom-1/4 right-1/4 w-6 h-6 text-orange-400 animate-pulse" style={{animationDelay: '0.8s'}} />
                  <Crown className="absolute top-1/3 right-1/3 w-7 h-7 text-yellow-500 animate-bounce" style={{animationDelay: '1.2s'}} />
                  <Gem className="absolute bottom-1/3 left-1/3 w-5 h-5 text-purple-400 animate-ping" style={{animationDelay: '1.5s'}} />
                </div>
              </div>
              
              <div className="space-y-6 max-w-5xl mx-auto">
                <div className="relative group/subtitle cursor-pointer">
                  <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent leading-tight transition-all duration-500 group-hover/subtitle:scale-105 group-hover/subtitle:bg-gradient-to-r group-hover/subtitle:from-orange-500 group-hover/subtitle:via-red-400 group-hover/subtitle:to-pink-500">
                    Taste Trail Food Finder
                  </p>
                  <div className="absolute -top-2 -right-2 transition-all duration-300 group-hover/subtitle:scale-125 group-hover/subtitle:-rotate-12">
                    <Flame className="w-8 h-8 text-orange-500 animate-pulse group-hover/subtitle:animate-bounce" />
                  </div>

                  {/* Premium hover effects */}
                  <div className="absolute inset-0 opacity-0 group-hover/subtitle:opacity-100 transition-opacity duration-500">
                    <div className="absolute -top-4 -left-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 -left-6 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>

                <p className="text-2xl md:text-3xl font-semibold text-muted-foreground/80 leading-relaxed transition-all duration-300 hover:text-muted-foreground hover:scale-105 cursor-pointer">
                  Discover • Order • Enjoy
                </p>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-300 hover:text-foreground/80 cursor-pointer group/description">
                  Experience the finest Indian cuisine delivered with <span className="text-gradient-primary font-semibold group-hover/description:animate-pulse">premium quality</span> and <span className="text-gradient-secondary font-semibold group-hover/description:animate-pulse" style={{animationDelay: '0.3s'}}>exceptional service</span> right to your doorstep
                </p>
                
                {/* Premium badges with enhanced hover */}
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-green-500/40 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 group/badge1">
                    <CheckCircle className="w-4 h-4 text-green-500 group-hover/badge1:animate-pulse" />
                    <span className="text-sm font-medium text-green-700 group-hover/badge1:text-green-600">100% Fresh</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-blue-500/40 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 group/badge2">
                    <Zap className="w-4 h-4 text-blue-500 group-hover/badge2:animate-bounce" />
                    <span className="text-sm font-medium text-blue-700 group-hover/badge2:text-blue-600">Lightning Fast</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-purple-500/40 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 group/badge3">
                    <Award className="w-4 h-4 text-purple-500 group-hover/badge3:animate-spin" />
                    <span className="text-sm font-medium text-purple-700 group-hover/badge3:text-purple-600">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with premium hover */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <Link to="/restaurants">
                <Button size="lg" className="text-xl px-14 py-8 rounded-full premium-gradient text-white hover:scale-110 transition-all duration-500 glow-shadow font-bold group relative overflow-hidden shadow-2xl hover:shadow-orange-500/25">
                  {/* Multiple animated background layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-red-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '0.2s'}}></div>

                  <Utensils className="mr-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300 relative z-10 group-hover:text-yellow-100" />
                  <span className="relative z-10 group-hover:text-yellow-50">Explore Restaurants</span>
                  <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300 relative z-10 group-hover:text-yellow-100" />

                  {/* Enhanced sparkle effects */}
                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
                  </div>
                  <div className="absolute bottom-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '0.3s'}}>
                    <Star className="w-3 h-3 text-yellow-300 animate-ping" />
                  </div>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-600"></div>
                </Button>
              </Link>

              <Button variant="outline" size="lg" className="text-xl px-12 py-8 rounded-full border-3 border-primary/30 glass-effect hover:premium-gradient hover:text-white hover:border-transparent hover:scale-110 transition-all duration-500 font-bold group relative overflow-hidden shadow-xl hover:shadow-purple-500/20">
                {/* Multiple background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '0.2s'}}></div>

                <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Watch Demo</span>

                {/* Enhanced indicators */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{transitionDelay: '0.3s'}}>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-70">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>Trending #1 Food App</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-blue-500" />
                <span>10K+ Active Users</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 App Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Premium Stats Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="group text-center p-8 rounded-3xl glass-effect hover-lift transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 premium-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 mx-auto premium-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gradient-primary animate-glow">10K+</div>
              <p className="text-muted-foreground font-semibold text-lg">Happy Customers</p>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className="group text-center p-8 rounded-3xl glass-effect hover-lift transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gradient-secondary animate-glow">500+</div>
              <p className="text-muted-foreground font-semibold text-lg">Partner Restaurants</p>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className="group text-center p-8 rounded-3xl glass-effect hover-lift transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gradient-primary animate-glow">15min</div>
              <p className="text-muted-foreground font-semibold text-lg">Avg Delivery Time</p>
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className="group text-center p-8 rounded-3xl glass-effect hover-lift transition-all duration-500 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white fill-current" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gradient-secondary animate-glow">4.9★</div>
              <p className="text-muted-foreground font-semibold text-lg">Customer Rating</p>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* New Premium Features Showcase */}
      <div className="container mx-auto px-4 py-24 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border-0 mb-8">
              <Crown className="h-6 w-6 text-yellow-500" />
              <span className="text-lg font-semibold text-foreground">Premium Features</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gradient-primary mb-6 leading-tight">
              Elevate Your<br />
              <span className="text-gradient-secondary">Dining Experience</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the premium choice for food delivery
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 premium-gradient rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative p-10 rounded-3xl glass-effect hover-lift transition-all duration-500 hover:scale-105 border border-orange-200/20">
                <div className="w-20 h-20 premium-gradient rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gradient-primary mb-4">Lightning Fast</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  AI-powered logistics ensure your food arrives hot and fresh in record time
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                  <Clock className="w-4 h-4" />
                  <span>Average 12 minutes</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative p-10 rounded-3xl glass-effect hover-lift transition-all duration-500 hover:scale-105 border border-purple-200/20">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gradient-secondary mb-4">Master Chefs</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Partnered with award-winning chefs who craft each dish with passion and expertise
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">
                  <Award className="w-4 h-4" />
                  <span>Michelin rated partners</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative p-10 rounded-3xl glass-effect hover-lift transition-all duration-500 hover:scale-105 border border-green-200/20">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gradient-primary mb-4">100% Safe</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Contactless delivery with real-time tracking and temperature-controlled transport
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Health certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Grid */}
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

      {/* Premium Footer Section */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 premium-gradient rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl p-3 shadow-lg">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                    Taste Trail
                  </h3>
                  <p className="text-gray-400 text-sm">Premium Food Delivery</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Bringing you the finest Indian cuisine with premium quality, exceptional service, and lightning-fast delivery. Your satisfaction is our passion.
              </p>
              
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gradient-primary">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Restaurants</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gradient-secondary">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">+91 9040507085</p>
                    <p className="text-gray-500 text-sm">24/7 Support</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">rajeshbehera0316@gmail.com</p>
                    <p className="text-gray-500 text-sm">Quick Response</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Bhubaneswar, India</p>
                    <p className="text-gray-500 text-sm">Serving 50+ Cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © 2024 Taste Trail. All rights reserved. Made with ❤️ for food lovers.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-orange-400 transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
