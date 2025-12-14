import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { Trophy, Timer, Users } from "lucide-react";

export const navItems = [
  { label: "About", href: "/" },
  { label: "Events", href: "/schedule" },
  { label: "Results", href: "/results" },
  { label: "Gallery", href: "/" },
];

export const heroDates = ["12", "13", "14"];

export const eventFeatures = [
  { icon: Trophy, label: "Multi-day championship" },
  { icon: Timer, label: "Track and field events" },
  { icon: Users, label: "Professional coordination" },
];

export const guests = [
  {
    name: "Padma Sri I.M. Vijayan",
    title: "Indian Football Footballer",
    image: "/assets/guests/imvijayan.png",
  },
  {
    name: "G M Nihal Sarin",
    title: "International Chess Grandmaster",
    image: "/assets/guests/nihalsarin.png",
  },
  {
    name: "Lijo David Thottan",
    title: "Olympian",
    image: "/assets/guests/lijodavid.png",
  },
];

export const highlights = [
  {
    id: 1,
    image: "/assets/gallery/1.png",
  },
  {
    id: 2,
    image: "/assets/gallery/2.png",
  },
  {
    id: 3,
    image: "/assets/gallery/3.png",
  },
  {
    id: 4,
    image: "/assets/gallery/4.png",
  },
  {
    id: 5,
    image: "/assets/gallery/5.png",
  },
  {
    id: 6,
    image: "/assets/gallery/6.png",
  },
];

export const contacts = [
  {
    name: "Dr Ajayghosh M V",
    role: "Organising Secretary (HOD, Dept. of Physical Education, GMC Thrissur)",
    phone: "+91 8086729564",
  },
  {
    name: "Maneesh M Menon",
    role: "Joint Convenor (Secretary of Sports, College Union 25-26, GMC Thrissur)",
    phone: "+91 8304938047",
  },
  {
    name: "Sanin Ahmad K",
    role: "General Secretary, College Union, GMC Thrissur",
    phone: "+91 7591900960",
  },
];


export const footerQuickLinks = [
  { label: "About", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Results", href: "/results" },
  { label: "Gallery", href: "/" },
  { label: "Contact", href: "#contact" },
];

export const socialIcons = [
  {
    icon: IoLogoInstagram,
    href: "https://www.instagram.com/interzone_athletics_2025?igsh=aXg0aDZndWJjOHRj",
  },
  {
    icon: IoLogoWhatsapp,
    href: "https://chat.whatsapp.com/IMk5FhQTfNm0Ha3ieIOAzZ",
  },
];
