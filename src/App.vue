<template>
  <Navbar />
  <router-view></router-view>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
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
