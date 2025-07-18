import { Restaurant } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Tandoori Flames",
    cuisine: "North Indian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    location: "MG Road, Delhi",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb30?w=500&h=300&fit=crop",
    description: "Authentic North Indian tandoori dishes with rich spices and flavors",
    coordinates: { lat: 28.6139, lng: 77.209 },
    menu: [
      { id: 1, name: "Butter Chicken", price: 250, category: "Main Course", description: "Creamy tomato-based chicken curry with butter and spices", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
      { id: 2, name: "Paneer Tikka", price: 200, category: "Appetizer", description: "Grilled cottage cheese marinated in spices", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
      { id: 3, name: "Naan", price: 40, category: "Bread", description: "Traditional Indian flatbread baked in tandoor", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 4, name: "Aloo Paratha", price: 60, category: "Paratha", description: "Stuffed potato flatbread with butter", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 5, name: "Masala Tea", price: 30, category: "Tea", description: "Spiced Indian tea with aromatic herbs", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 2,
    name: "Spice Route",
    cuisine: "South Indian",
    rating: 4.6,
    deliveryTime: "20-30 min",
    location: "Koramangala, Bangalore",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&h=300&fit=crop",
    description: "Delicious South Indian meals with authentic dosas and idlis",
    coordinates: { lat: 12.9352, lng: 77.6245 },
    menu: [
      { id: 6, name: "Masala Dosa", price: 120, category: "Main Course", description: "Crispy rice pancake filled with spiced potato", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop" },
      { id: 7, name: "Idli Sambhar", price: 80, category: "Main Course", description: "Steamed rice cakes served with lentil curry", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" },
      { id: 8, name: "Filter Coffee", price: 50, category: "Coffee", description: "Traditional South Indian coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" },
      { id: 9, name: "Rava Upma", price: 70, category: "Upma", description: "Semolina based South Indian breakfast", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 3,
    name: "Biryani House",
    cuisine: "Biryani",
    rating: 4.7,
    deliveryTime: "40-50 min",
    location: "Charminar, Hyderabad",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=500&h=300&fit=crop",
    description: "Famous Hyderabadi biryani with aromatic spices and tender meat",
    coordinates: { lat: 17.3616, lng: 78.4747 },
    menu: [
      { id: 10, name: "Chicken Biryani", price: 300, category: "Biryani", description: "Aromatic basmati rice with tender chicken", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 11, name: "Mutton Biryani", price: 350, category: "Biryani", description: "Premium mutton cooked with fragrant rice", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 12, name: "Veg Biryani", price: 250, category: "Biryani", description: "Aromatic vegetable biryani", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 4,
    name: "Sweet Treats",
    cuisine: "Sweets",
    rating: 4.4,
    deliveryTime: "15-25 min",
    location: "Connaught Place, Delhi",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=300&fit=crop",
    description: "Traditional Indian sweets made fresh daily with pure ingredients",
    coordinates: { lat: 28.6325, lng: 77.2195 },
    menu: [
      { id: 13, name: "Gulab Jamun", price: 100, category: "Gulab Jamun", description: "Deep-fried milk solids in sugar syrup", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 14, name: "Rasgulla", price: 90, category: "Gulab Jamun", description: "Spongy cottage cheese balls in syrup", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 15, name: "Chocolate Cake", price: 150, category: "Cake", description: "Rich chocolate cake with cream", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 5,
    name: "Cafe Spice",
    cuisine: "Multi Cuisine",
    rating: 4.3,
    deliveryTime: "25-35 min",
    location: "Park Street, Kolkata",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
    description: "A blend of Indian and continental dishes with a cozy cafe vibe",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    menu: [
      { id: 16, name: "Chicken Burger", price: 180, category: "Burger", description: "Grilled chicken burger with fresh vegetables", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
      { id: 17, name: "Veg Burger", price: 120, category: "Burger", description: "Vegetarian burger with crispy patty", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
      { id: 18, name: "Cold Coffee", price: 90, category: "Coffee", description: "Refreshing iced coffee with cream", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" },
      { id: 19, name: "Vanilla Ice Cream", price: 80, category: "Ice Cream", description: "Creamy vanilla ice cream", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 6,
    name: "Masala Magic",
    cuisine: "Indian Street Food",
    rating: 4.5,
    deliveryTime: "20-30 min",
    location: "Jayanagar, Bangalore",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&h=300&fit=crop",
    description: "Popular Indian street food with a modern twist and hygienic preparation",
    coordinates: { lat: 12.925, lng: 77.5938 },
    menu: [
      { id: 20, name: "Pani Puri", price: 60, category: "Poori", description: "Crispy shells filled with spiced water", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 21, name: "Bhel Puri", price: 50, category: "Poori", description: "Puffed rice mixture with chutneys", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" },
      { id: 22, name: "Chaat Platter", price: 120, category: "Street Food", description: "Assorted Indian street snacks", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 7,
    name: "The Dosa Place",
    cuisine: "South Indian",
    rating: 4.6,
    deliveryTime: "15-25 min",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&h=300&fit=crop",
    description: "Crispy dosas and authentic South Indian breakfast items",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    menu: [
      { id: 23, name: "Plain Dosa", price: 80, category: "Main Course", description: "Classic crispy rice pancake", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop" },
      { id: 24, name: "Masala Dosa", price: 120, category: "Main Course", description: "Dosa filled with spiced potato masala", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop" },
      { id: 25, name: "Idli", price: 50, category: "Main Course", description: "Soft steamed rice cakes", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 8,
    name: "Royal Curry",
    cuisine: "North Indian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    location: "Sector 18, Noida",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb30?w=500&h=300&fit=crop",
    description: "Rich North Indian curries with authentic spices and slow cooking",
    coordinates: { lat: 28.5355, lng: 77.391 },
    menu: [
      { id: 26, name: "Dal Makhani", price: 180, category: "Main Course", description: "Rich black lentils in creamy tomato gravy", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
      { id: 27, name: "Paneer Butter Masala", price: 220, category: "Main Course", description: "Cottage cheese in rich tomato butter sauce", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" },
      { id: 28, name: "Naan", price: 40, category: "Bread", description: "Soft tandoor-baked bread", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 9,
    name: "Chaat Junction",
    cuisine: "Street Food",
    rating: 4.4,
    deliveryTime: "15-25 min",
    location: "CP, Delhi",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&h=300&fit=crop",
    description: "Tasty and hygienic chaat items with a variety of flavors",
    coordinates: { lat: 28.6325, lng: 77.2195 },
    menu: [
      { id: 29, name: "Papdi Chaat", price: 70, category: "Street Food", description: "Crispy wafers with chutneys and yogurt", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" },
      { id: 30, name: "Bhel Puri", price: 60, category: "Street Food", description: "Puffed rice mixed with chutneys and vegetables", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" },
      { id: 31, name: "Sev Puri", price: 65, category: "Street Food", description: "Crispy shells topped with sev and chutneys", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 10,
    name: "Veggie Delight",
    cuisine: "Vegetarian",
    rating: 4.5,
    deliveryTime: "20-30 min",
    location: "Salt Lake, Kolkata",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
    description: "Fresh vegetarian dishes with a focus on healthy and tasty meals",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    menu: [
      { id: 32, name: "Mixed Veg Curry", price: 150, category: "Veg", description: "Assorted vegetables in spiced gravy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop" },
      { id: 33, name: "Paneer Tikka", price: 200, category: "Appetizer", description: "Grilled cottage cheese with spices", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
      { id: 34, name: "Jeera Rice", price: 80, category: "Rice", description: "Cumin-flavored basmati rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 11,
    name: "Sweet Corner",
    cuisine: "Sweets",
    rating: 4.3,
    deliveryTime: "15-25 min",
    location: "MG Road, Bangalore",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=300&fit=crop",
    description: "Delicious Indian sweets and desserts made fresh daily",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    menu: [
      { id: 35, name: "Rasgulla", price: 90, category: "Dessert", description: "Soft cottage cheese balls in syrup", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 36, name: "Kheer", price: 100, category: "Dessert", description: "Creamy rice pudding with nuts", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 37, name: "Ladoo", price: 80, category: "Dessert", description: "Sweet round balls made with flour and sugar", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 34,
    name: "The Spice Hub",
    cuisine: "Multi Cuisine",
    rating: 4.6,
    deliveryTime: "25-35 min",
    location: "Andheri West, Mumbai",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
    description: "A variety of Indian and international dishes with bold flavors",
    coordinates: { lat: 19.1197, lng: 72.8466 },
    menu: [
      { id: 38, name: "Chicken Tikka Masala", price: 250, category: "Main Course", description: "Grilled chicken in creamy tomato sauce", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
      { id: 39, name: "Veg Fried Rice", price: 150, category: "Rice", description: "Stir-fried rice with mixed vegetables", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
      { id: 40, name: "Hakka Noodles", price: 140, category: "Noodles", description: "Indo-Chinese style noodles", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 37,
    name: "Kalinga Kitchen",
    cuisine: "Odia Traditional",
    rating: 4.8,
    deliveryTime: "25-35 min",
    location: "Kharavela Nagar, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    description: "Authentic Odia traditional cuisine with heritage recipes passed down through generations",
    coordinates: { lat: 20.2961, lng: 85.8245 },
    menu: [
      { id: 41, name: "Dalma", price: 120, category: "Veg", description: "Traditional Odia lentil curry with vegetables", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
      { id: 42, name: "Pakhala Bhata", price: 100, category: "Main Course", description: "Fermented rice served with accompaniments", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" },
      { id: 43, name: "Chhena Poda", price: 80, category: "Cake", description: "Baked cottage cheese dessert", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 44, name: "Masala Tea", price: 30, category: "Tea", description: "Traditional Odia spiced tea", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" },
      { id: 45, name: "Vegetable Khichdi", price: 90, category: "Khichdi", description: "Nutritious rice and lentil porridge with vegetables", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 38,
    name: "Utkal Biryani House",
    cuisine: "Biryani",
    rating: 4.7,
    deliveryTime: "30-40 min",
    location: "Saheed Nagar, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=500&h=300&fit=crop",
    description: "Premium biryani with Odia spices and tender mutton cooked in traditional dum style",
    coordinates: { lat: 20.3019, lng: 85.8249 },
    menu: [
      { id: 46, name: "Mutton Biryani", price: 320, category: "Biryani", description: "Aromatic mutton biryani with Odia spices", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 47, name: "Chicken Biryani", price: 280, category: "Biryani", description: "Flavorful chicken biryani with basmati rice", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 48, name: "Veg Biryani", price: 220, category: "Biryani", description: "Aromatic vegetable biryani", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
      { id: 49, name: "Raita", price: 50, category: "Side Dish", description: "Cool yogurt with cucumber and spices", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 39,
    name: "Chandini Chowk Bhojanalaya",
    cuisine: "North Indian",
    rating: 4.6,
    deliveryTime: "25-35 min",
    location: "Unit 4, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=300&fit=crop",
    description: "Authentic North Indian cuisine with rich gravies and traditional tandoor items",
    coordinates: { lat: 20.2700, lng: 85.8400 },
    menu: [
      { id: 50, name: "Butter Chicken", price: 250, category: "Main Course", description: "Rich chicken curry in buttery tomato sauce", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
      { id: 51, name: "Aloo Paratha", price: 80, category: "Paratha", description: "Stuffed potato flatbread with butter", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 52, name: "Paneer Butter Masala", price: 220, category: "Main Course", description: "Cottage cheese in creamy tomato gravy", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" },
      { id: 53, name: "Masala Tea", price: 40, category: "Tea", description: "Hot spiced Indian tea", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" },
      { id: 54, name: "Plain Upma", price: 60, category: "Upma", description: "Traditional South Indian semolina dish", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 40,
    name: "Temple City Cafe",
    cuisine: "Multi Cuisine",
    rating: 4.5,
    deliveryTime: "20-30 min",
    location: "Old Town, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
    description: "Modern cafe serving Indian and continental dishes near the famous temples",
    coordinates: { lat: 20.2379, lng: 85.8337 },
    menu: [
      { id: 55, name: "Veg Burger", price: 150, category: "Burger", description: "Fresh vegetable burger with herbs", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
      { id: 56, name: "Filter Coffee", price: 80, category: "Coffee", description: "Freshly brewed aromatic South Indian coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" },
      { id: 57, name: "Chicken Noodles", price: 180, category: "Noodles", description: "Stir-fried noodles with chicken and vegetables", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop" },
      { id: 58, name: "Vanilla Ice Cream", price: 100, category: "Ice Cream", description: "Creamy vanilla ice cream scoop", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 41,
    name: "Lingaraj Sweets & Snacks",
    cuisine: "Sweets",
    rating: 4.7,
    deliveryTime: "15-25 min",
    location: "Near Lingaraj Temple, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=300&fit=crop",
    description: "Traditional Odia sweets and snacks made with pure ghee and authentic recipes",
    coordinates: { lat: 20.2379, lng: 85.8337 },
    menu: [
      { id: 59, name: "Rasgulla", price: 90, category: "Gulab Jamun", description: "Soft spongy cottage cheese balls in syrup", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 60, name: "Chhena Jhili", price: 100, category: "Gulab Jamun", description: "Spiral-shaped cottage cheese sweet", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 61, name: "Chakuli Pitha", price: 80, category: "Cake", description: "Traditional Odia rice pancake", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 42,
    name: "Bhubaneswar Biriyani Express",
    cuisine: "Biryani",
    rating: 4.6,
    deliveryTime: "25-35 min",
    location: "Patia, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=500&h=300&fit=crop",
    description: "Quick service biryani with authentic flavors and generous portions",
    coordinates: { lat: 20.3553, lng: 85.8021 },
    menu: [
      { id: 62, name: "Chicken Biryani", price: 280, category: "Biryani", description: "Fragrant chicken biryani with long grain rice", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 63, name: "Veg Biryani", price: 220, category: "Biryani", description: "Aromatic vegetable biryani with mixed vegetables", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
      { id: 64, name: "Mutton Biryani", price: 350, category: "Biryani", description: "Premium mutton biryani with aromatic spices", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 43,
    name: "Capital City Dosa Corner",
    cuisine: "South Indian",
    rating: 4.5,
    deliveryTime: "20-30 min",
    location: "Jaydev Vihar, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&h=300&fit=crop",
    description: "Crispy dosas and authentic South Indian breakfast items",
    coordinates: { lat: 20.3553, lng: 85.8021 },
    menu: [
      { id: 65, name: "Masala Dosa", price: 120, category: "Main Course", description: "Crispy dosa filled with spiced potato curry", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop" },
      { id: 66, name: "Plain Dosa", price: 80, category: "Main Course", description: "Traditional plain crispy rice pancake", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop" },
      { id: 67, name: "Upma", price: 70, category: "Upma", description: "Soft steamed semolina with vegetables", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop" },
      { id: 68, name: "Filter Coffee", price: 50, category: "Coffee", description: "Traditional South Indian filter coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 44,
    name: "Ekamra Kabab Corner",
    cuisine: "Kebabs",
    rating: 4.6,
    deliveryTime: "30-40 min",
    location: "Khandagiri, Bhubaneswar",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=300&fit=crop",
    description: "Succulent kebabs and grilled items with authentic Mughlai flavors",
    coordinates: { lat: 20.1929, lng: 85.7826 },
    menu: [
      { id: 69, name: "Chicken Seekh Kabab", price: 250, category: "Kebabs", description: "Minced chicken skewers with spices", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
      { id: 70, name: "Mutton Kabab", price: 300, category: "Kebabs", description: "Tender mutton pieces grilled to perfection", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
      { id: 71, name: "Chicken Tikka", price: 220, category: "Kebabs", description: "Marinated chicken pieces grilled in tandoor", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 45,
    name: "Silver City Biryani",
    cuisine: "Biryani",
    rating: 4.7,
    deliveryTime: "30-40 min",
    location: "Buxi Bazaar, Cuttack",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=500&h=300&fit=crop",
    description: "Famous Cuttack-style biryani with aromatic basmati rice and tender meat",
    coordinates: { lat: 20.4625, lng: 85.8828 },
    menu: [
      { id: 72, name: "Chicken Biryani", price: 300, category: "Biryani", description: "Authentic Cuttack-style chicken biryani", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 73, name: "Mutton Biryani", price: 350, category: "Biryani", description: "Premium mutton biryani with aromatic spices", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 74, name: "Veg Biryani", price: 250, category: "Biryani", description: "Flavorful vegetable biryani", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 46,
    name: "Millennium City Dhaba",
    cuisine: "North Indian",
    rating: 4.6,
    deliveryTime: "25-35 min",
    location: "Link Road, Cuttack",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&h=300&fit=crop",
    description: "Authentic dhaba-style North Indian cuisine with rich flavors",
    coordinates: { lat: 20.4625, lng: 85.8828 },
    menu: [
      { id: 75, name: "Dal Makhani", price: 180, category: "Main Course", description: "Creamy black lentils cooked overnight", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
      { id: 76, name: "Paneer Paratha", price: 90, category: "Paratha", description: "Stuffed cottage cheese flatbread", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 77, name: "Masala Tea", price: 25, category: "Tea", description: "Hot spiced Indian tea", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" },
      { id: 78, name: "Chole Bhature", price: 120, category: "Chole Bhature", description: "Spicy chickpeas with fried bread", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 47,
    name: "Cuttack Famous Dahibara Aludum",
    cuisine: "Street Food",
    rating: 4.8,
    deliveryTime: "15-25 min",
    location: "Chandi Chowk, Cuttack",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=300&fit=crop",
    description: "Authentic Cuttack street food specializing in dahibara aludum and chaat",
    coordinates: { lat: 20.4625, lng: 85.8828 },
    menu: [
      { id: 79, name: "Dahibara Aludum", price: 60, category: "Street Food", description: "Famous Cuttack street food with lentil dumplings", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 80, name: "Pani Puri", price: 50, category: "Poori", description: "Crispy shells with spiced water", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 81, name: "Bhel Puri", price: 60, category: "Poori", description: "Puffed rice mixture with chutneys", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 48,
    name: "Mahanadi Fish Curry House",
    cuisine: "Seafood",
    rating: 4.5,
    deliveryTime: "35-45 min",
    location: "Tulsipur, Cuttack",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=300&fit=crop",
    description: "Fresh river fish curry and traditional Odia seafood preparations",
    coordinates: { lat: 20.4625, lng: 85.8828 },
    menu: [
      { id: 82, name: "Fish Curry", price: 250, category: "Main Course", description: "Traditional Odia fish curry with aromatic spices", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop" },
      { id: 83, name: "Prawn Fry", price: 300, category: "Main Course", description: "Crispy fried prawns with spices", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop" },
      { id: 84, name: "Fish Khichdi", price: 180, category: "Khichdi", description: "Nutritious rice and lentil porridge with fish", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 49,
    name: "Netaji Subhash Sweet House",
    cuisine: "Sweets",
    rating: 4.6,
    deliveryTime: "15-25 min",
    location: "Netaji Subhash Road, Cuttack",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=300&fit=crop",
    description: "Traditional Bengali and Odia sweets with authentic taste",
    coordinates: { lat: 20.4625, lng: 85.8828 },
    menu: [
      { id: 85, name: "Rasgulla", price: 90, category: "Gulab Jamun", description: "Soft cottage cheese balls in sugar syrup", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 86, name: "Sandesh", price: 100, category: "Gulab Jamun", description: "Bengali sweet made from cottage cheese", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 87, name: "Sweet Cake", price: 150, category: "Cake", description: "Traditional Bengali sweet cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 50,
    name: "Bay of Bengal Seafood",
    cuisine: "Seafood",
    rating: 4.7,
    deliveryTime: "35-45 min",
    location: "Station Bazaar, Balasore",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=300&fit=crop",
    description: "Fresh coastal seafood from the Bay of Bengal with authentic preparations",
    coordinates: { lat: 21.4942, lng: 86.9335 },
    menu: [
      { id: 88, name: "Crab Curry", price: 350, category: "Main Course", description: "Fresh crab cooked in spicy coastal curry", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop" },
      { id: 89, name: "Prawn Masala", price: 300, category: "Main Course", description: "Juicy prawns in aromatic masala gravy", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop" },
      { id: 90, name: "Fish Khichdi", price: 200, category: "Khichdi", description: "Coastal style fish khichdi with aromatic spices", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 51,
    name: "Balasore Biryani Junction",
    cuisine: "Biryani",
    rating: 4.6,
    deliveryTime: "30-40 min",
    location: "Sahadevkhunta, Balasore",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=500&h=300&fit=crop",
    description: "Authentic biryani with coastal spices and fresh ingredients",
    coordinates: { lat: 21.4942, lng: 86.9335 },
    menu: [
      { id: 91, name: "Chicken Biryani", price: 280, category: "Biryani", description: "Aromatic chicken biryani with coastal flavors", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 92, name: "Veg Biryani", price: 220, category: "Biryani", description: "Fragrant vegetable biryani with fresh vegetables", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
      { id: 93, name: "Fish Biryani", price: 320, category: "Biryani", description: "Coastal special fish biryani", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 52,
    name: "Coastal Curry Corner",
    cuisine: "Odia Traditional",
    rating: 4.5,
    deliveryTime: "25-35 min",
    location: "Fakir Mohan College Road, Balasore",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    description: "Traditional Odia coastal cuisine with authentic flavors",
    coordinates: { lat: 21.4942, lng: 86.9335 },
    menu: [
      { id: 94, name: "Chingudi Malai Curry", price: 300, category: "Main Course", description: "Prawn coconut curry with traditional spices", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop" },
      { id: 95, name: "Vegetable Khichdi", price: 120, category: "Khichdi", description: "Coastal style vegetable khichdi", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" },
      { id: 96, name: "Masala Tea", price: 30, category: "Tea", description: "Coastal spiced tea", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 53,
    name: "Bhadrak Biriyani Palace",
    cuisine: "Biryani",
    rating: 4.6,
    deliveryTime: "30-40 min",
    location: "Station Road, Bhadrak",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=500&h=300&fit=crop",
    description: "Royal biryani preparations with authentic spices and tender meat",
    coordinates: { lat: 21.0537, lng: 86.5113 },
    menu: [
      { id: 97, name: "Mutton Biryani", price: 350, category: "Biryani", description: "Royal mutton biryani with premium spices", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 98, name: "Chicken Biryani", price: 300, category: "Biryani", description: "Tender chicken in aromatic basmati rice", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" },
      { id: 99, name: "Egg Biryani", price: 180, category: "Biryani", description: "Flavorful egg biryani with aromatic rice", image: "https://images.unsplash.com/photo-1563379091339-03246963d996?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 54,
    name: "Dhamra Port Seafood",
    cuisine: "Seafood",
    rating: 4.5,
    deliveryTime: "40-50 min",
    location: "Dhamra Port Road, Bhadrak",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=300&fit=crop",
    description: "Fresh seafood from Dhamra port with traditional coastal preparations",
    coordinates: { lat: 21.0537, lng: 86.5113 },
    menu: [
      { id: 100, name: "Fish Curry", price: 280, category: "Main Course", description: "Fresh fish in traditional coastal curry", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop" },
      { id: 101, name: "Prawn Noodles", price: 250, category: "Noodles", description: "Stir-fried noodles with fresh prawns", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop" },
      { id: 102, name: "Seafood Khichdi", price: 220, category: "Khichdi", description: "Mixed seafood khichdi with coastal spices", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 55,
    name: "Bhadrak Sweet Corner",
    cuisine: "Sweets",
    rating: 4.5,
    deliveryTime: "15-25 min",
    location: "Puruna Bazaar, Bhadrak",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=300&fit=crop",
    description: "Traditional sweets and desserts with local flavors",
    coordinates: { lat: 21.0537, lng: 86.5113 },
    menu: [
      { id: 103, name: "Rasgulla", price: 90, category: "Gulab Jamun", description: "Spongy cottage cheese in sweet syrup", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 104, name: "Chhena Poda", price: 100, category: "Cake", description: "Baked cottage cheese dessert", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 105, name: "Kulfi Ice Cream", price: 80, category: "Ice Cream", description: "Traditional Indian frozen dessert", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 56,
    name: "Heritage Odia Kitchen",
    cuisine: "Odia Traditional",  
    rating: 4.7,
    deliveryTime: "25-35 min",
    location: "College Square, Bhadrak",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    description: "Authentic Odia heritage recipes with traditional cooking methods",
    coordinates: { lat: 21.0537, lng: 86.5113 },
    menu: [
      { id: 106, name: "Dalma", price: 120, category: "Veg", description: "Traditional lentil curry with mixed vegetables", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
      { id: 107, name: "Pakhala Bhata", price: 100, category: "Main Course", description: "Fermented rice with traditional accompaniments", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop" },
      { id: 108, name: "Mixed Veg Curry", price: 150, category: "Veg", description: "Assorted vegetables in traditional Odia spices", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop" },
      { id: 109, name: "Masala Omelette", price: 60, category: "Omelette", description: "Spiced egg omelette with onions and chilies", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop" }
    ]
  }
];
