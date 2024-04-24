<template>
  <h1 class="text-center">Home</h1>
  <!-- products -->
  <section class="mt-4 row justify-content-evenly">
    <ProductCard v-for="item in hair" :key="item.id" :item="item" />
    <ProductCard v-for="item in body" :key="item.id" :item="item" />
    <ProductCard v-for="item in face" :key="item.id" :item="item" />
    <ProductCard v-for="item in home_style" :key="item.id" :item="item" />
    <ProductCard v-for="item in accessory" :key="item.id" :item="item" />
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "HomePage",
  inject: ["products"],
  components: { ProductCard },
  data() {
    return {
      accessory: this.products.accessory,
      body: this.products.body,
      hair: this.products.hair,
      face: this.products.face,
      home_style: this.products.home_style,
    };
  },
};
</script>

<style></style>
