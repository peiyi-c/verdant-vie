<template>
  <h1 class="text-center display-5">For Hair</h1>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard
      v-for="item in items"
      :key="item.id"
      :item="item"
      @set-item="(item) => (modalItem = item)"
    />
  </section>
  <!-- carousel -->
  <div
    id="carousel-hair"
    class="carousel carousel-fade slide opacity-90 w-90 mx-auto"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel-hair"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-hair"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- https://unsplash.com/photos/blonde-haired-woman-in-black-top-surrounded-by-tall-plants-ArQIWcmOlA8 -->
        <img
          :class="imgLoaded ? 'show' : ''"
          @load="onImgLoad()"
          src="../assets/images/hair/hair-4.jpeg"
          class="d-block w-100"
          alt="Hair Product Image 1"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3 class="heading text-primary" v-show="imgLoaded">
            Unlock Your Hair
          </h3>
          <p>From Roots to Ends</p>
        </div>
      </div>
      <div class="carousel-item">
        <!-- https://unsplash.com/photos/green-fern-plant-inside-clear-glass-vase-9IcKPSQ9G5Q -->
        <img
          src="../assets/images/hair/hair-5.jpg"
          class="d-block w-100 show"
          alt="Hair Product Image 2"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3 class="heading text-warning">Hair Reset</h3>
          <p class="text-dark">Start from Today</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-hair"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-hair"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- product modal -->
  <ProductModal :item="modalItem" />
</template>

<script>
import { inject } from "vue";
import ProductCard from "../components/ProductCard.vue";
import ProductModal from "../components/ProductModal.vue";
import useImageLoaded from "../composables/useImageLoad";

export default {
  name: "Hair",
  components: { ProductCard, ProductModal },
  setup() {
    const products = inject("products");
    const modalItem = inject("modalItem");
    const { imgLoaded, onImgLoad } = useImageLoaded();
    return {
      items: products.hair,
      modalItem,
      imgLoaded,
      onImgLoad,
    };
  },
};
</script>

<style></style>
