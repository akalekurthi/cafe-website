import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const steamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center parallax-bg overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <motion.h1 
          className="font-playfair text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where Every Cup is <br />
          <span className="soft-gold">Brewed with Passion</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Good food is the foundation of genuine happiness." — Auguste Escoffier
        </motion.p>

        {/* Animated Steam Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2" ref={steamRef}>
          <motion.div 
            className="w-2 h-8 bg-white/30 rounded-full steam"
            animate={{ y: [-40, -80], opacity: [0.8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="w-2 h-6 bg-white/20 rounded-full mt-1 ml-1 steam"
            animate={{ y: [-40, -80], opacity: [0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="w-2 h-4 bg-white/10 rounded-full mt-1 -ml-1 steam"
            animate={{ y: [-40, -80], opacity: [0.4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/menu">
            <Button className="bg-soft-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              View Our Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
