import { z } from "zod";

// User Schema
export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
});

// Reservation Schema
export const reservationSchema = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  date: z.string(),
  time: z.string(),
  partySize: z.number(),
  specialRequests: z.string().optional(),
  createdAt: z.date(),
});

// Contact Schema
export const contactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  createdAt: z.date(),
});

// Newsletter Schema
export const newsletterSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  createdAt: z.date(),
});

// Insert Schemas (without id and createdAt)
export const insertUserSchema = userSchema.omit({ id: true });
export const insertReservationSchema = reservationSchema.omit({ id: true, createdAt: true });
export const insertContactSchema = contactSchema.omit({ id: true, createdAt: true });
export const insertNewsletterSchema = newsletterSchema.omit({ id: true, createdAt: true });

// Types
export type User = z.infer<typeof userSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Reservation = z.infer<typeof reservationSchema>;
export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Newsletter = z.infer<typeof newsletterSchema>;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
