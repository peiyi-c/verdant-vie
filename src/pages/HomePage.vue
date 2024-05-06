<template>
  <div class="row justify-content-center">
    <img
      class="col-11 col-lg-10 col-xl-8"
      :src="title"
      alt="verdant vie shop"
    />
  </div>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard
      v-for="item in hair"
      :key="item.id"
      :item="item"
      @set-item="(item) => (modalItem = item)"
    />
    <ProductCard
      v-for="item in body"
      :key="item.id"
      :item="item"
      @set-item="(item) => (modalItem = item)"
    />
    <ProductCard
      v-for="item in face"
      :key="item.id"
      :item="item"
      @set-item="(item) => (modalItem = item)"
    />
    <ProductCard
      v-for="item in home_style"
      :key="item.id"
      :item="item"
      @set-item="(item) => (modalItem = item)"
    />
    <ProductCard
      v-for="item in accessory"
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
import title from "../assets/images/home-page/verdant-vie.svg";
import ProductModal from "../components/ProductModal.vue";

export default {
  name: "HomePage",
  components: { ProductCard, ProductModal },
  setup() {
    const products = inject("products");
    const modalItem = inject("modalItem");
    return {
      title,
      accessory: products.accessory,
      body: products.body,
      hair: products.hair,
      face: products.face,
      home_style: products.home_style,
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
