import { useState } from "react";
import MenuFilter from "@/components/MenuFilter";
import MenuItem from "@/components/MenuItem";

interface MenuItemData {
  id: string;
  name: string;
  price: string;
  tagline: string;
  image: string;
  category: string;
}

const menuItems: MenuItemData[] = [
  {
    id: "1",
    name: "Signature Cappuccino",
    price: "$4.50",
    tagline: "Art in every cup",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "coffee"
  },
  {
    id: "2",
    name: "Double Espresso",
    price: "$3.50",
    tagline: "Pure intensity",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "coffee"
  },
  {
    id: "3",
    name: "Cold Brew Delight",
    price: "$4.00",
    tagline: "Smooth and refreshing",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "coffee"
  },
  {
    id: "4",
    name: "Earl Grey Supreme",
    price: "$3.75",
    tagline: "A royal experience",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "tea"
  },
  {
    id: "5",
    name: "Fresh Mint Green Tea",
    price: "$3.25",
    tagline: "Nature's refreshment",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "tea"
  },
  {
    id: "6",
    name: "Butter Croissant",
    price: "$3.50",
    tagline: "Baked fresh, served warm",
    image: "https://cdn.pixabay.com/photo/2014/12/11/02/55/croissant-563836_1280.jpg",
    category: "pastries"
  },
  {
    id: "7",
    name: "Berry Chocolate Muffin",
    price: "$4.25",
    tagline: "Indulgence redefined",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "pastries"
  },
  {
    id: "8",
    name: "Fruit Danish",
    price: "$4.75",
    tagline: "Sweet perfection",
    image: "https://cdn.pixabay.com/photo/2017/07/28/14/23/pastries-2548564_1280.jpg",
    category: "pastries"
  },
  {
    id: "9",
    name: "Avocado Toast",
    price: "$6.50",
    tagline: "Healthy and delicious",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "snacks"
  },
  {
    id: "10",
    name: "Artisan Sandwich",
    price: "$8.75",
    tagline: "Crafted with love",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "snacks"
  }
];

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold coffee-brown mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 text-lg">Every sip tells a story</p>
        </div>

        <MenuFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
