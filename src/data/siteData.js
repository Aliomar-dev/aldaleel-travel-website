// src/data/siteData.js

import {
  FaPlaneDeparture,
  FaPassport,
  FaHotel,
  FaKaaba,
  FaGlobeAsia,
  FaCarSide,
  FaShieldAlt,
  FaHeadset,
  FaTags,
  FaClock,
} from "react-icons/fa";

export const services = [
  {
    icon: FaPlaneDeparture,
    title: "Air Ticketing",
    desc: "Domestic and international flight booking with smart route guidance.",
  },
  {
    icon: FaPassport,
    title: "Visa Facilitation",
    desc: "Complete visa guidance with document support and application help.",
  },
  {
    icon: FaHotel,
    title: "Hotel Reservations",
    desc: "Comfortable hotel bookings for families, groups and business trips.",
  },
  {
    icon: FaKaaba,
    title: "Smart Umrah",
    desc: "Reliable Umrah packages with hotel, transport and visa assistance.",
  },
  {
    icon: FaGlobeAsia,
    title: "International Tours",
    desc: "Customized travel plans for Dubai, Turkey, Malaysia, Europe and more.",
  },
  {
    icon: FaCarSide,
    title: "Transportation",
    desc: "Safe and comfortable transport arrangements for your full journey.",
  },
];

export const destinations = [
  {
    city: "Dubai",
    country: "UAE",
    tag: "Luxury & Family Trips",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    tag: "Culture & History",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "Makkah",
    country: "Saudi Arabia",
    tag: "Smart Umrah",
    image:
      "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1200&q=80",
  },
];

export const packages = [
  {
    title: "Smart Umrah Package",
    price: "Custom Quote",
    desc: "Visa, hotel, transport and complete travel guidance.",
    points: ["Visa support", "Hotel booking", "Transport option"],
  },
  {
    title: "Dubai Family Tour",
    price: "Best Deal",
    desc: "Perfect package for family holidays and short vacations.",
    points: ["Flight option", "Hotel stay", "Tour planning"],
  },
  {
    title: "International Ticketing",
    price: "Live Fare",
    desc: "Best available routes and flight booking support.",
    points: ["Domestic flights", "International flights", "Route advice"],
  },
];

export const whyChoose = [
  {
    icon: FaShieldAlt,
    title: "Trusted Guidance",
    desc: "Clear support for every travel step.",
  },
  {
    icon: FaHeadset,
    title: "Friendly Support",
    desc: "Quick response and professional help.",
  },
  {
    icon: FaTags,
    title: "Best Options",
    desc: "Packages according to your budget.",
  },
  {
    icon: FaClock,
    title: "Fast Process",
    desc: "Save time with organized travel planning.",
  },
];

export const testimonials = [
  {
    name: "Family Traveler",
    text: "Aldaleel made our trip smooth from ticketing to hotel booking. Very helpful support.",
  },
  {
    name: "Umrah Customer",
    text: "The Umrah guidance was simple and clear. Everything was managed professionally.",
  },
  {
    name: "Business Traveler",
    text: "Fast ticketing support and good route options. Highly recommended.",
  },
];