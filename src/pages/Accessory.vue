<template>
  <h1 class="text-center">Accessory</h1>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard v-for="item in items" :key="item.id" :item="item" />
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Accessory",
  inject: ["products"],
  components: { ProductCard },
  data() {
    return {
      items: this.products.accessory,
    };
  },
};
</script>

<style></style>
