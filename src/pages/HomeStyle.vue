<template>
  <h1 class="text-center">Home Style</h1>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard v-for="item in items" :key="item.id" :item="item" />
  </section>
  <!-- hero -->
  <section class="position-relative">
    <!-- https://www.pexels.com/photo/a-green-plants-on-brown-pots-9707239/ -->
    <img
      src="../assets/images/home-style/home-1.jpeg"
      class="d-block opacity-75 w-75 mx-auto"
      alt="At Home. Be You."
      loading="lazy"
    />
    <div
      class="w-100 position-absolute bottom-0 pb-3 text-dark text-center d-none d-md-block"
    >
      <h2 class="heading opacity-75 text-dark">At Home. Be You.</h2>
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "HomeStyle",
  inject: ["products"],
  components: { ProductCard },
  data() {
    return {
      items: this.products.home_style,
    };
  },
};
</script>

<style></style>
