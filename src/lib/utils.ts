import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M+";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K+";
  return num.toString() + "+";
}

export const CONTACT = {
  phone1: "+263 242 757034",
  phone2: "+263 710 781705",
  phoneUK: "+44 7979 696097",
  whatsapp: "+263710781705",
  address: {
    line1: "408, 4th Floor, Equity House",
    line2: "Corner Jason Moyo & Rezende Street",
    city: "Harare",
    country: "Zimbabwe",
  },
  email: "info@riverjordanlogistics.co.zw",
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: 8:00 AM - 1:00 PM",
    sunday: "Sunday: Closed",
  },
};
