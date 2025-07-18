
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  location: string;
  image: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  menu: MenuItem[];
}
