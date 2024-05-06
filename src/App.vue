<template>
  <Navbar />
  <main class="container h-100 mt-10">
    <router-view></router-view>
  </main>
  <ShoppingCart />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import Footer from "./components/Footer.vue";
import products from "../data/data.json";
import { ref, provide, onMounted, onUnmounted } from "vue";

export default {
  name: "App",
  components: { Navbar, ShoppingCart, Footer },
  setup() {
    let modalItem = ref({});
    const windowWidth = ref(window.innerWidth);

    function onResize() {
      windowWidth.value = window.innerWidth;
    }

    onMounted(() => {
      window.addEventListener("resize", onResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", onResize);
    });

    provide("products", products[0]);
    provide("modalItem", modalItem);
    provide("width", windowWidth);
  },
};
</script>
