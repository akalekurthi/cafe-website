import { motion } from "framer-motion";

interface MenuItemProps {
  name: string;
  price: string;
  tagline: string;
  image: string;
  category: string;
}

export default function MenuItem({ name, price, tagline, image }: MenuItemProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair text-xl font-semibold coffee-brown">
            {name}
          </h3>
          <span className="soft-gold font-bold text-lg">
            {price}
          </span>
        </div>
        <p className="text-gray-600 italic">
          "{tagline}"
        </p>
      </div>
    </motion.div>
  );
}
