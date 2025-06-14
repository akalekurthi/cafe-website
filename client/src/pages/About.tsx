import { motion } from "framer-motion";
import { Leaf, Wheat, Sofa, Wifi } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: "Organic Beans",
      description: "Sustainably sourced from ethical farms"
    },
    {
      icon: Wheat,
      title: "Handmade Pastries",
      description: "Fresh daily by local artisans"
    },
    {
      icon: Sofa,
      title: "Cozy Corners",
      description: "Perfect spots for work or relaxation"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "Stay connected while you sip"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold coffee-brown mb-4">
            Our Story
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A café is not just a place, it's a feeling
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="fade-in"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Café owner and staff" 
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div 
            className="fade-in"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-semibold coffee-brown mb-6">
              Why We Started
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our journey began with a simple belief: that great coffee brings people together. Founded in 2015, 
              Café was born from our passion for creating a space where quality meets community, where every cup 
              tells a story, and where connections are made over perfectly brewed beverages.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We source our beans directly from small farms, ensuring fair trade and exceptional quality. 
              Our pastries are handmade daily by local artisans, and every detail in our space is designed 
              to make you feel at home.
            </p>
          </motion.div>
        </div>

        {/* What Makes Us Special */}
        <motion.div 
          className="bg-warm-beige rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl font-semibold coffee-brown text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-coffee-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold coffee-brown mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl font-semibold coffee-brown text-center mb-8">
            Our Space
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.img 
                key={index}
                src={image} 
                alt={`Café interior ${index + 1}`}
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-64 object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
