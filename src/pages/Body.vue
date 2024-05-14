<template>
  <h1 class="text-center display-5">For Body</h1>
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
    id="carousel-body"
    class="carousel carousel-fade slide opacity-90 w-90 mx-auto"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel-body"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-body"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- https://www.pexels.com/photo/crop-woman-with-eco-brush-and-soap-bar-7262410/ -->
        <img
          :class="imgLoaded ? 'show' : ''"
          @load="onImgLoad()"
          src="../assets/images/body/body-1.jpeg"
          class="d-block w-100"
          alt="Body Product Image 1"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3 class="heading" v-show="imgLoaded">Body Essentials</h3>
          <p v-show="imgLoaded">Embrace Every Inch</p>
        </div>
      </div>
      <div class="carousel-item">
        <!--https://www.pexels.com/photo/stack-of-natural-soaps-placed-on-table-6621497/-->
        <img
          src="../assets/images/body/body-2.jpeg"
          class="d-block w-100 show"
          alt="Body Product Image 2"
        />
        <div class="carousel-caption d-none d-md-block">
          <h3 class="heading">Glowing skin</h3>
          <p>Our Body Products, Your Daily Ritual for Healthy</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-body"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-body"
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
  name: "Body",
  components: { ProductCard, ProductModal },
  setup() {
    const products = inject("products");
    const modalItem = inject("modalItem");
    const { imgLoaded, onImgLoad } = useImageLoaded();
    return {
      items: products.body,
      modalItem,
      imgLoaded,
      onImgLoad,
    };
  },
};
</script>
