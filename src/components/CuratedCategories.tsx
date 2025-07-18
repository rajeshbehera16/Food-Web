import React from 'react';
import { ChefHat, Coffee, Cake, Pizza, Utensils, Soup, IceCream, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CuratedCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
  restaurantCount: number;
}

interface CuratedCategoriesProps {
  onCategorySelect: (category: string) => void;
}

const curatedCategories: CuratedCategory[] = [
  {
    id: 'biryani',
    name: 'Biryani',
    icon: <ChefHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d996?w=400&h=300&fit=crop',
    restaurantCount: 2
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: <Pizza className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'burger',
    name: 'Burger',
    icon: <Utensils className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'cake',
    name: 'Cake',
    icon: <Cake className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'paratha',
    name: 'Paratha',
    icon: <ChefHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1626132647523-66c4bf4c4212?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'noodles',
    name: 'Noodles',
    icon: <Utensils className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: <ChefHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'poori',
    name: 'Poori',
    icon: <ChefHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'omelette',
    name: 'Omelette',
    icon: <Utensils className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'veg',
    name: 'Veg',
    icon: <Utensils className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'tea',
    name: 'Tea',
    icon: <Coffee className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'north-indian',
    name: 'North Indian',
    icon: <ChefHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    icon: <IceCream className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'icecream',
    name: 'Ice Cream',
    icon: <IceCream className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'kebabs',
    name: 'Kebabs',
    icon: <Flame className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'south-indian',
    name: 'South Indian',
    icon: <ChefHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'chole-bhature',
    name: 'Chole Bhature',
    icon: <ChefHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1626132647523-66c4bf4c4212?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'khichdi',
    name: 'Khichdi',
    icon: <Soup className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'upma',
    name: 'Upma',
    icon: <Soup className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
    restaurantCount: 1
  },
  {
    id: 'coffee',
    name: 'Coffee',
    icon: <Coffee className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    restaurantCount: 1
  }
];

const CuratedCategories = ({ onCategorySelect }: CuratedCategoriesProps) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${categorySlug}`);
  };

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">What's on your mind?</h2>
          <p className="text-muted-foreground">Curated collections for every craving</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          {curatedCategories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="group cursor-pointer animate-in slide-in-from-bottom duration-500 hover:scale-105 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-card rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-orange-200">
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300" />
                  
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 text-orange-500">
                    {category.icon}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-orange-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.restaurantCount} restaurants
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCategories;
