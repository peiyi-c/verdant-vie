<template>
  <h1 class="text-center">Check out</h1>
  <!-- progress -->
  <section class="container">
    <div
      class="progress mt-4"
      role="progressbar"
      aria-label="checkout progress"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar bg-info w-30"></div>
    </div>
    <div class="row text-center text-secondary-emphasis">
      <span class="col-4 text-info">CART ITEMS</span>
      <span class="col-4 text-secondary">SHIPPING</span>
      <span class="col-4 text-secondary">CONFORM</span>
    </div>
  </section>
  <!-- section 1: cart items -->
  <section class="container mt-5">
    <h2 class="my-4 fs-3">Cart Items (1 items)</h2>
    <div class="container border border-1 border-info-subtle rounded-2">
      <div
        class="table-header d-none d-md-flex py-2 row text-center text-info bg-body-tertiary rounded-2 mb-4 border-bottom border-info-subtle rounded-2"
      >
        <span class="col-3">product</span>
        <span class="col-3">price (€)</span>
        <span class="col-3">quantity</span>
        <span class="col-3">subtotal (€)</span>
      </div>
      <div class="table-body my-3">
        <CheckoutItem v-for="item in items" :key="item.id" :item="item" />
      </div>
      <div class="table-footer text-end mb-3">
        <button class="btn btn-outline-primary">Next</button>
      </div>
    </div>
  </section>
</template>

<script>
import CheckoutItem from "../components/CheckoutItem.vue";
import useShoppingCart from "../composables/useShoppingCart";

export default {
  name: "Checkout",
  components: { CheckoutItem },
  setup() {
    const { currentItems: items } = useShoppingCart();
    return {
      items,
    };
  },
};
</script>

<style></style>
