<template>
  <div class="my-3 row w-100 align-items-center text-cente">
    <!-- product -->
    <div
      class="col-8 col-md-4 d-flex flex-row align-items-center gap-3 gap-md-2"
    >
      <img
        :src="product.image"
        class="rounded-1 object-fit-cover w-50 h-75 border border-1 border-light show"
      />
      <h5 class="d-block fs-5">{{ product.name }}</h5>
    </div>

    <!-- price -->
    <div class="col-12 text-end text-md-center col-md-2">
      <span
        :class="{
          strick: product.discount !== null,
        }"
        class="me-1"
        >{{ product.price }}</span
      >
      <span v-show="product.discount">{{ product.discount }}</span>
      <span class="d-md-none">€</span>
      <br />
    </div>
    <!-- quantity -->
    <div class="col-12 text-start text-md-center col-md-3">
      <div class="btn-group" role="group" aria-label="button-group">
        <div class="d-flex gap-3 border-0 align-items-center">
          <button class="btn btn-info btn-sm rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="20"
              fill="#e1ebe2"
            >
              <path d="M200-440v-80h560v80H200Z"></path>
            </svg>
          </button>

          <span class="card-title lh-xs">{{ item.quantity }}</span>

          <button class="btn btn-info btn-sm rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="20"
              fill="#e1ebe2"
            >
              <path
                d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- subtotal -->
    <div class="col-12 text-end text-md-center col-md-3">
      subtotal <span class="d-md-none">€</span>
    </div>
  </div>
  <hr class="rounded-2 text-info" />
</template>
<script>
import useProducts from "../composables/useProducts";
import useShoppingCart from "../composables/useShoppingCart";
export default {
  name: "CheckoutItem",
  props: ["item"],
  setup(props) {
    const { getProductInfo } = useProducts();
    const product = getProductInfo(props.item.id);
    const { removeFromCart } = useShoppingCart();
    return {
      product,
      removeFromCart,
    };
  },
};
</script>
