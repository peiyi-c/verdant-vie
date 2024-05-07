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
      <div
        class="progress-bar bg-info w-30"
        :class="
          step == 1 ? 'w-30' : step == 2 ? 'w-60' : step == 3 ? 'w-100' : 'w-30'
        "
      ></div>
    </div>
    <div class="row text-center text-secondary-emphasis">
      <span class="col-4" :class="step >= 1 ? 'text-info' : 'text-secondary'"
        >CART ITEMS</span
      >
      <span class="col-4" :class="step >= 2 ? 'text-info' : 'text-secondary'"
        >SHIPPING</span
      >
      <span class="col-4" :class="step == 3 ? 'text-info' : 'text-secondary'"
        >CONFORM</span
      >
    </div>
  </section>

  <!-- section 1: cart items -->
  <section class="container mt-5" :class="step == 1 ? 'd-block' : 'd-none'">
    <h2 class="my-4 fs-3">Cart Items (1 items)</h2>
    <div class="container border border-1 border-info-subtle rounded-2">
      <div
        class="table-header d-none d-md-flex py-2 mb-4 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
      >
        <span class="col-3">product</span>
        <span class="col-3">price (€)</span>
        <span class="col-3">quantity</span>
        <span class="col-3">subtotal (€)</span>
      </div>
      <div class="table-body my-3">
        <CheckoutItem v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
  <!-- section 2: shipping -->
  <section class="container mt-5" :class="step == 2 ? 'd-block' : 'd-none'">
    <h2 class="my-4 fs-3">Shipping options</h2>
  </section>
  <!-- section 2: confirm -->
  <section class="container mt-5" :class="step == 3 ? 'd-block' : 'd-none'">
    <h2 class="my-4 fs-3">Confirmation</h2>
  </section>

  <div class="container my-3 d-flex w-100 justify-content-end gap-2">
    <button
      class="btn btn-outline-primary z-2"
      @click="lastStep"
      v-show="step !== 1"
    >
      Back
    </button>
    <button
      class="btn"
      :class="step == 3 ? 'btn-primary' : 'btn-outline-primary '"
      @click="nextStep"
    >
      {{ step == 3 ? "Order" : "Next" }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import CheckoutItem from "../components/CheckoutItem.vue";
import useShoppingCart from "../composables/useShoppingCart";

export default {
  name: "Checkout",
  components: { CheckoutItem },
  setup() {
    const { currentItems: items } = useShoppingCart();
    const step = ref(1);
    function nextStep() {
      if (step.value < 3) {
        step.value++;
      } else {
        return;
      }
    }
    function lastStep() {
      if (step.value > 1) {
        step.value--;
      } else {
        return;
      }
    }
    return {
      items,
      step,
      nextStep,
      lastStep,
    };
  },
};
</script>

<style></style>
