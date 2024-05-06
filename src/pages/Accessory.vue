<template>
  <h1 class="text-center">Accessory</h1>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @set-item="(item) => (modalItem = item)"
    />
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
  // data() {
  //   return {
  //     modalItem: "",
  //   };
  // },
};
</script>

<style></style>
