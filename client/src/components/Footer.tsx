import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: (email: string) => 
      apiRequest("POST", "/api/newsletters", { email }),
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="bg-espresso text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-playfair text-2xl font-bold mb-4">Café</div>
            <p className="text-gray-300 mb-4">Crafted with love. Shared with community.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-soft-gold p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-soft-gold p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-soft-gold p-2">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-soft-gold transition-colors duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <a className="text-gray-300 hover:text-soft-gold transition-colors duration-300">Menu</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-soft-gold transition-colors duration-300">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-soft-gold transition-colors duration-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/reservations">
                  <a className="text-gray-300 hover:text-soft-gold transition-colors duration-300">Book Table</a>
                </Link>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">Catering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">Gift Cards</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">Get updates on special offers and new arrivals</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-l-lg rounded-r-none focus:ring-soft-gold"
                required
              />
              <Button 
                type="submit" 
                className="bg-soft-gold hover:bg-yellow-600 text-white rounded-l-none rounded-r-lg"
                disabled={newsletterMutation.isPending}
              >
                {newsletterMutation.isPending ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 Café. All rights reserved. Made with ❤️ for coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
