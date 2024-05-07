<template>
  <Navbar />
  <main class="container h-100 mt-10">
    <router-view> </router-view>
  </main>
  <Footer />
  <ShoppingCart />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import products from "../data/data.json";
import { ref, provide } from "vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: { Navbar, ShoppingCart, Footer },
  setup() {
    const modalItem = ref({});
    provide("products", products[0]);
    provide("modalItem", modalItem);
  },
};
</script>
