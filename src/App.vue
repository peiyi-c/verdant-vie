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
import { provide } from "vue";

export default {
  name: "App",
  components: { Navbar, ShoppingCart, Footer },
  setup() {
    provide("products", products[0]);
  },
  // data() {
  //   return {
  //     window: {
  //       width: 0,
  //     },
  //   };
  // },
  // mounted() {
  //   window.addEventListener("resize", this.handleResize);
  // },
  // unmounted() {
  //   window.removeEventListener("resize", this.handleResize);
  // },
  // methods: {
  //   handleResize() {
  //     this.window.width = window.innerWidth;
  //   },
  // },
  // provide() {
  //   return {
  //     // window: this.window,
  //     products: products[0],
  //   };
  // },
};
</script>
