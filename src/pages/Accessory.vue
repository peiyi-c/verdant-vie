<template>
  <h1 class="text-center display-5">Accessory</h1>
  <!-- products -->
  <section class="my-5 row justify-content-evenly">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @setItem="(item) => (modalItem = item)"
    />

    <h3 class="my-5 fs-3 mt-5 text-center text-secondary">
      More accessories coming soon.
    </h3>
  </section>
  <!-- product modal -->
  <ProductModal :item="modalItem" />
</template>

<script>
import { inject } from "vue";
import ProductCard from "../components/ProductCard.vue";
import ProductModal from "../components/ProductModal.vue";

export default {
  name: "Accessory",
  components: { ProductCard, ProductModal },
  setup() {
    const products = inject("products");
    const modalItem = inject("modalItem");
    return {
      items: products.accessory,
      modalItem,
    };
  },
};
</script>

<style></style>
