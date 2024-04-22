<template>
  <Navbar />
  <main class="container h-100 mt-10">
    <router-view></router-view>
  </main>
  <ShoppingCart />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: { Navbar, ShoppingCart },
  data() {
    return {
      window: {
        width: 0,
      },
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    },
  },
  provide() {
    return {
      window: this.window,
    };
  },
};
</script>
<style></style>
