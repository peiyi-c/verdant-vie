<template>
  <h1 class="text-center">For Face</h1>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @set-item="(item) => (modalItem = item)"
    />
  </section>
  <!-- hero -->
  <section class="position-relative">
    <!-- https://www.pexels.com/photo/calm-woman-with-face-cream-5069395/ -->
    <img
      src="../assets/images/face/face-1.jpeg"
      class="d-block w-75 mx-auto rounded-0 opacity-90"
      alt="Soothe & Shining"
      loading="lazy"
    />
    <div
      class="w-100 position-absolute top-50 pb-3 text-dark text-center d-none d-md-block"
    >
      <h2 class="heading text-secondary opacity-75">Soothe & Shining</h2>
    </div>
  </section>
  <!-- product modal -->
  <ProductModal :item="modalItem" />
</template>

<script>
import { inject } from "vue";
import ProductCard from "../components/ProductCard.vue";
import ProductModal from "../components/ProductModal.vue";

export default {
  name: "Face",
  components: { ProductCard, ProductModal },
  setup() {
    const products = inject("products");
    const modalItem = inject("modalItem");
    return {
      items: products.face,
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
