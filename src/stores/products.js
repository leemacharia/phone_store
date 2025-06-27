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
name: "Samsung Galaxy S25",
price: "83,000",
short_description: "Galaxy S25 features a 6.2\" 120 Hz AMOLED display, Snapdragon 8 Elite chip, 50 MP triple camera, and 4000 mAh battery—plus AI smarts and 7 years of updates.",
long_description: "The Samsung Galaxy S25 packs a 6.2\" FHD+ Dynamic AMOLED 2X screen (120 Hz, 2600 nits), Snapdragon 8 Elite for Galaxy, 12 GB RAM, and 50 MP main + 12 MP ultrawide + 10 MP telephoto cameras. It runs Android 15/One UI 7, includes 4000 mAh battery (25 W wired, 15 W wireless), IP68, and delivers Galaxy AI features with 7 years of OS/security updates.",
quantity: "5",
image: "../../public/images/sm25.jpeg",
brand: "Samsung",
rating: 5
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