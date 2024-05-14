<template>
  <h1 class="text-center display-5">Home Style</h1>
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
    <!-- https://www.pexels.com/photo/a-green-plants-on-brown-pots-9707239/ -->
    <img
      :class="imgLoaded ? 'show' : ''"
      @load="onImgLoad()"
      src="../assets/images/home-style/home-1.jpeg"
      class="d-block opacity-75 w-90 mx-auto bg-body-tertiary"
      alt="At Home. Be You."
      loading="lazy"
    />
    <div
      class="w-100 position-absolute top-0 pb-3 text-dark text-center d-none d-md-block"
    >
      <h2 class="heading opacity-75 text-dark pt-3" v-show="imgLoaded">
        At Home. Be You.
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
  name: "HomeStyle",
  components: { ProductCard, ProductModal },
  setup() {
    const products = inject("products");
    const modalItem = inject("modalItem");
    const { imgLoaded, onImgLoad } = useImageLoaded();
    return {
      items: products.homestyle,
      modalItem,
      imgLoaded,
      onImgLoad,
    };
  },
};
</script>
