import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useProductsStore = defineStore('products', {
state: () => {
const products = ref([
{
id: 1,
name: "Samsung Galaxy A16",
price: "26,500",
short_description: "Galaxy A16 has a 6.7\" AMOLED display, 50MP camera, and 5000mAh battery—great value with 6 years of updates.",
long_description:"The Samsung Galaxy A16 features a 6.7\" FHD+ AMOLED screen (90Hz), 50MP camera, 5000mAh battery with 25W fast charging, Exynos 1330 chip, and Android 14. It offers 6 years of updates, IP54 protection, side fingerprint, and microSD support.",
quantity: "12",
image: "../../public/images/sm16.jpeg",
brand:"Samsung",
rating: 4.5
},
{
id: 2,
name: "Samsung Galaxy S25 Ultra",
price: "83,000",
short_description: "Galaxy S25 features a 6.2\" 120 Hz AMOLED display, Snapdragon 8 Elite chip, 50 MP triple camera, and 4000 mAh battery—plus AI smarts and 7 years of updates.",
long_description: "The Samsung Galaxy S25 packs a 6.2\" FHD+ Dynamic AMOLED 2X screen (120 Hz, 2600 nits), Snapdragon 8 Elite for Galaxy, 12 GB RAM, and 50 MP main + 12 MP ultrawide + 10 MP telephoto cameras. It runs Android 15/One UI 7, includes 4000 mAh battery (25 W wired, 15 W wireless), IP68, and delivers Galaxy AI features with 7 years of OS/security updates.",
quantity: "5",
image: "../../public/images/sm25.jpeg",
brand: "Samsung",
rating: 5
},
{
    id: 3,
    name: "Apple iPhone 16e",
    price: "KES 125,000",
    short_description: "6.1\" OLED, A18 chip, 48 MP main cam, USB‑C, IP68.",
    long_description: "Entry‑level 2025 iPhone: 6.1\" edge‑to‑edge OLED display, Apple A18, 8 GB RAM, 128‑512 GB storage, 48 MP Fusion main camera, USB‑C, 5G, IP68 rated, runs iOS 18 with long-term updates.",
    quantity: "30",
    image: "../../public/images/PRODUCTS/iphone16e.jpeg",
    brand: "Apple",
    rating: 4.6
  },
  {
    id: 4,
    name: "Google Pixel 9",
    price: "KES 95,000",
    short_description: "6.2\" OLED 120 Hz, Google G4 chip, 50 MP dual cam.",
    long_description: "Latest Pixel with Google G4 AI chip, 6.2\" 120 Hz OLED display, 8 GB RAM, 50 MP main + 12 MP ultrawide cameras, best-in-class computational photography, 4500 mAh battery, 7 years of OS/security updates.",
    quantity: "27",
    image: "../../public/images/PRODUCTS/google pixel.jpeg",
    brand: "Google",
    rating: 4.5
  },
  {
    id: 5,
    name: "OnePlus 13",
    price: "KES 88,000",
    short_description: "6.5\" AMOLED 120 Hz, Snapdragon 8 Elite, 48 MP triple cam.",
    long_description: "OnePlus flagship: 6.5\" AMOLED 120 Hz display, Snapdragon 8 Elite, 12 GB RAM, 48 MP main + tele + ultrawide cameras, 5000 mAh battery with 80 W wired charging, OxygenOS and 5 years of software support.",
    quantity: "12",
    image: "../../public/images/PRODUCTS/oneplus.jpeg",
    brand: "OnePlus",
    rating: 4.6
  },
  {
    id: 6,
    name: "Oppo Find X7",
    price: "KES 75,000",
    short_description: "6.7\" AMOLED 120 Hz, Snapdragon 8 Elite, 50 MP triple cam.",
    long_description: "Premium Oppo with 6.7\" AMOLED 120 Hz HDR display, Snapdragon 8 Elite, 12 GB RAM, 50 MP triple cameras with OIS, 4800 mAh battery with 80 W fast charging, ColorOS and 4 years of updates.",
    quantity: "20",
    image: "../../public/images/PRODUCTS/oppo find x.jpeg",
    brand: "Oppo",
    rating: 4.4
  },
  {
    id: 7,
    name: "Nothing Phone (2)",
    price: "KES 54,000",
    short_description: "6.7\" AMOLED 120 Hz, Snapdragon 8 Gen 2, 50 MP dual cam.",
    long_description: "Nothing’s mid‑range standout: Glyph LED back panel, 6.7\" 120 Hz AMOLED, Snapdragon 8 Gen 2, 8 GB RAM, 50 MP dual camera, 4700 mAh battery with 45 W wired & 15 W wireless charging, 3 years of updates.",
    quantity: "15",
    image: "../../public/images/PRODUCTS/nothing 2.jpeg",
    brand: "Nothing",
    rating: 4.3
  },
  {
    id: 8,
    name: "Xiaomi 14T Pro",
    price: "KES 70,000",
    short_description: "6.67\" AMOLED 144 Hz, Snapdragon 8 Gen 3, 50 MP quad cam.",
    long_description: "Taiwan-edition powerhouse: 6.67\" 144 Hz AMOLED display, Snapdragon 8 Gen 3, 12 GB RAM, Leica-branded 50 MP quad camera array, 5000 mAh battery with 120 W wired & 50 W wireless charging, MIUI and 4 years updates.",
    quantity: "10",
    image: "../../public/images/PRODUCTS/xiami 14t.jpeg",
    brand: "Xiaomi",
    rating: 4.5
  },
  {
    id: 9,
    name: "Realme GT 6",
    price: "KES 52,000",
    short_description: "6.78\" AMOLED 144 Hz, Snapdragon 8 Gen 2, 50 MP triple cam.",
    long_description: "Performance-focused Realme with 6.78\" 144 Hz AMOLED, Snapdragon 8 Gen 2, 12 GB RAM, 50 MP main + ultrawide + macro cameras, 5000 mAh battery with 150 W wired charging, Realme UI and 4 years OS support.",
    quantity: "7",
    image: "../../public/images/PRODUCTS/realme .jpeg",
    brand: "Realme",
    rating: 4.4
  },
  {
    id: 10,
    name: "Nokia X50",
    price: "KES 45,000",
    short_description: "6.5\" FHD+ LCD 120 Hz, Snapdragon 7 Gen 3, 108 MP triple cam.",
    long_description: "Reliable mid-range Nokia: 6.5\" FHD+ 120 Hz LCD, Snapdragon 7 Gen 3, 8 GB RAM, 108 MP main + 8 MP ultrawide + 2 MP macro, 5000 mAh battery with 33 W charging, Android One with 3 years of updates.",
    quantity: "20",
    image: "../../public/images/PRODUCTS/nokia x50.jpeg",
    brand: "Nokia",
    rating: 4.2
  }
])
const selectedProduct = ref(0)
return{
products,
selectedProduct
}
},
actions:{
updateSelectedProduct (payload) {
this.selectedProduct = payload
}
},
persist: true,
})