<template>
  <h1 class="text-center display-5">For Face</h1>
  <!-- products -->
  <section class="my-5 row justify-content-evenly">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @setItem="(item) => (modalItem = item)"
    />
  </section>
  <!-- hero -->
  <section class="my-5 position-relative">
    <!-- https://www.pexels.com/photo/calm-woman-with-face-cream-5069395/ -->
    <img
      :class="imgLoaded ? 'show' : ''"
      @load="onImgLoad()"
      src="../assets/images/face/face-1.jpeg"
      class="d-block w-90 mx-auto rounded-0 opacity-80"
      alt="Soothe & Shining"
      loading="lazy"
    />
    <div
      class="w-100 position-absolute top-50 pb-3 text-dark text-center d-none d-md-block"
    >
      <h2
        class="heading text-secondary-emphasis opacity-75 text-start p-8"
        v-show="imgLoaded"
      >
        Soothe & Shining
      </h2>
    </div>
  </section>
  <!-- product modal -->
  <ProductModal :item="modalItem" />
</template>

<script>
import { inject } from "vue";
import ProductCard from "../components/ProductCard.vue";
import ProductModal from "../components/ProductModal.vue";
import useImageLoaded from "../composables/useImageLoad";
export default {
  name: "Face",
  components: { ProductCard, ProductModal },
  setup() {
    const products = inject("products");
    const modalItem = inject("modalItem");
    const { imgLoaded, onImgLoad } = useImageLoaded();
    return {
      items: products.face,
      modalItem,
      imgLoaded,
      onImgLoad,
    };
  },
};
</script>

<style></style>
