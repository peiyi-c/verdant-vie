<template>
  <h1 class="text-center">Check out</h1>

  <div v-if="items?.length > 0" class="section-wrapper">
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
            step == 1
              ? 'w-30'
              : step == 2
              ? 'w-60'
              : step == 3
              ? 'w-100'
              : 'w-30'
          "
        ></div>
      </div>
      <div class="row text-center text-secondary-emphasis">
        <span class="col-4" :class="step >= 1 ? 'text-info' : 'text-secondary'"
          >1. CART ITEMS</span
        >
        <span class="col-4" :class="step >= 2 ? 'text-info' : 'text-secondary'"
          >2. INFORMATION</span
        >
        <span class="col-4" :class="step == 3 ? 'text-info' : 'text-secondary'"
          >3. CONFIRM</span
        >
      </div>
    </section>
    <!-- section 1: cart items & shipping options -->
    <section class="container mt-5" :class="step == 1 ? 'd-block' : 'd-none'">
      <h2 class="my-4 fs-3">
        Shopping Cart ({{ items.length }}
        {{ items.length > 1 ? "items" : "item" }})
      </h2>
      <!-- checkout items -->
      <div class="container border border-1 border-info-subtle rounded-2">
        <div
          class="table-header d-none d-md-flex py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
        >
          <span class="col-3">product</span>
          <span class="col-3">price (€)</span>
          <span class="col-3">quantity</span>
          <span class="col-3">subtotal (€)</span>
        </div>
        <div class="table-body">
          <CheckoutItem v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>

      <div class="d-flex-column d-md-flex gap-4">
        <!-- shipping options and payment -->
        <div
          class="my-4 container border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span>shipping & payment</span>
          </div>
          <div class="table-body pt-2 pb-4 py-lg-5">
            <div class="my-2">
              <label for="shipping-des" class="mb-1"
                >Shipping destination</label
              >
              <select class="form-select" name="shipping-des" id="shipping-des">
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div class="my-2">
              <label for="shipping-des" class="mb-1">Shipping method</label>
              <select class="form-select" name="shipping-des" id="shipping-des">
                <option value="dhl">DHL Post</option>
                <option value="ups">Ups</option>
                <option value="store">Pick up at store</option>
              </select>
            </div>
            <div class="my-2">
              <label for="payment" class="mb-1">Payment method</label>
              <select class="form-select" name="payment" id="payment">
                <option value="credit-card">Credit Card (VISA / Master)</option>
                <option value="invoice">Invoice</option>
              </select>
            </div>
          </div>
        </div>
        <!-- billing information -->
        <div
          class="my-4 container border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="">billing information</span>
          </div>
          <div class="table-body">
            <div class="row">
              <p class="col-12 col-sm-6">Cart Items In Total:</p>
              <p class="col-12 col-sm-6 text-end">
                {{ getCartItemsTotal() }} €
              </p>
            </div>
            <div class="row">
              <p class="col-12 col-sm-6">Shipping Fee:</p>
              <p class="col-12 col-sm-6 text-end">€</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 2: information -->
    <section class="container mt-5" :class="step == 2 ? 'd-block' : 'd-none'">
      <h2 class="my-4 fs-3">Information</h2>
    </section>
    <!-- section 2: confirm -->
    <section class="container mt-5" :class="step == 3 ? 'd-block' : 'd-none'">
      <h2 class="my-4 fs-3">Order overview</h2>
    </section>

    <div class="container my-3 d-flex w-100 justify-content-end gap-2">
      <button
        class="btn btn-outline-primary z-2"
        @click="lastStep"
        v-show="step !== 1"
      >
        Back
      </button>
      <button class="btn btn-primary text-success" @click="nextStep">
        {{ step == 3 ? "Order" : "Continue" }}
      </button>
    </div>
  </div>
  <h3 v-else class="fs-4 my-6 text-center text-secondary">
    Your shopping cart is empty.
  </h3>
</template>

<script>
import { ref } from "vue";
import CheckoutItem from "../components/CheckoutItem.vue";
import useShoppingCart from "../composables/useShoppingCart";

export default {
  name: "Checkout",
  components: { CheckoutItem },
  setup() {
    const {
      currentItems: items,
      cartItemsCount,
      getCartItemsTotal,
    } = useShoppingCart();
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
      cartItemsCount,
      getCartItemsTotal,
      step,
      nextStep,
      lastStep,
    };
  },
};
</script>

<style></style>
