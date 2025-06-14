import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { insertReservationSchema } from "@shared/schema";

const formSchema = insertReservationSchema.extend({
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  partySize: z.string().min(1, "Party size is required").transform(Number),
});

type FormData = z.infer<typeof formSchema>;

export default function Reservations() {
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      partySize: 1,
      specialRequests: "",
    },
  });

  const reservationMutation = useMutation({
    mutationFn: (data: FormData) => 
      apiRequest("POST", "/api/reservations", data),
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    },
  });

  const onSubmit = (data: FormData) => {
    reservationMutation.mutate(data);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    { value: "8:00", label: "8:00 AM" },
    { value: "9:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "17:00", label: "5:00 PM" },
    { value: "18:00", label: "6:00 PM" },
  ];

  const partySizes = [
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 People" },
    { value: "3", label: "3 People" },
    { value: "4", label: "4 People" },
    { value: "5", label: "5 People" },
    { value: "6", label: "6 People" },
    { value: "7", label: "7+ People" },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold coffee-brown mb-4">
            Reserve Your Table
          </h1>
          <p className="text-gray-600 text-lg">Life begins after coffee</p>
        </div>

        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {!showSuccess ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="focus:ring-coffee-brown focus:border-coffee-brown"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            className="focus:ring-coffee-brown focus:border-coffee-brown"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Date</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date"
                            min={today}
                            className="focus:ring-coffee-brown focus:border-coffee-brown"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-coffee-brown focus:border-coffee-brown">
                              <SelectValue placeholder="Select Time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot.value} value={slot.value}>
                                {slot.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="partySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Party Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-coffee-brown focus:border-coffee-brown">
                              <SelectValue placeholder="Select Size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {partySizes.map((size) => (
                              <SelectItem key={size.value} value={size.value}>
                                {size.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold">Special Requests (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Any special occasion or dietary requirements?"
                          className="focus:ring-coffee-brown focus:border-coffee-brown"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-coffee-brown hover:bg-espresso text-white py-4 rounded-lg font-semibold text-lg"
                  disabled={reservationMutation.isPending}
                >
                  {reservationMutation.isPending ? "Reserving..." : "Reserve Table"}
                </Button>

                {reservationMutation.error && (
                  <p className="text-red-600 text-center">
                    {(reservationMutation.error as any)?.message || "Failed to make reservation"}
                  </p>
                )}
              </form>
            </Form>
          ) : (
            <motion.div 
              className="text-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-semibold text-green-800 mb-2">
                Your table is reserved!
              </h2>
              <p className="text-green-700">
                We'll see you soon at Café. A confirmation will be sent to your phone.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
