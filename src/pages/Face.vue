<template>
  <h1 class="text-center">For Face</h1>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard v-for="item in items" :key="item.id" :item="item" />
  </section>
  <section class="position-relative">
    <!-- https://www.pexels.com/photo/calm-woman-with-face-cream-5069395/ -->
    <img
      src="../assets/images/face/face-1.jpeg"
      class="d-block w-75 mx-auto rounded-0 opacity-90"
      alt="Soothe & Shining"
    />
    <div
      class="w-100 position-absolute top-50 pb-3 text-dark text-center d-none d-md-block"
    >
      <h2 class="heading text-secondary opacity-75">Soothe & Shining</h2>
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Face",
  inject: ["products"],
  components: { ProductCard },
  data() {
    return {
      items: this.products.face,
    };
  },
};
</script>

<style></style>
