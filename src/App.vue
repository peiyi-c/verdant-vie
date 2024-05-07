<template>
  <Navbar />
  <main class="container h-100 mt-10">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import products from "../data/data.json";
import { ref, provide } from "vue";
import useWindowWidth from "./composables/useWindowWidth";
export default {
  name: "App",
  components: { Navbar, Footer },
  setup() {
    const modalItem = ref({});
    const { width } = useWindowWidth();
    provide("products", products[0]);
    provide("modalItem", modalItem);

    return {
      width,
    };
  },
};
</script>
