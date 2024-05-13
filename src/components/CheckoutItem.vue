<template>
  <div
    v-if="step == 1"
    class="my-3 row w-100 align-items-center text-center position-relative"
  >
    <div
      class="position-absolute top-0 text-end"
      role="button"
      @click="() => removeFromCart(item.id)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 -960 960 960"
        width="20"
        fill="#efbc9b"
      >
        <path
          fill-opacity="0.75"
          d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
        />
      </svg>
    </div>

    <!-- product -->
    <div
      class="col-9 col-md-4 d-flex flex-row align-items-center gap-3 gap-md-1"
    >
      <img
        :src="product.image"
        class="d-none d-sm-block rounded-1 object-fit-cover w-50 h-75 border border-1 border-light show"
      />
      <h5 class="fs-5 text-start">{{ product.name }}</h5>
    </div>
    <!-- price -->
    <div class="col-12 col-md-2 text-end text-md-start">
      <span
        :class="{
          strick: product.discount !== null,
        }"
        class="me-1"
        >{{ product.price }}</span
      >
      <span v-show="product.discount">{{ product.discount }}</span>
      <span class="d-md-none"> €</span>
    </div>
    <!-- quantity -->
    <div class="col-6 col-md-3 text-start text-md-end fs-sm">
      <div class="btn-group" role="group" aria-label="button-group">
        <div class="d-flex gap-3 border-0 align-items-center">
          <button
            class="btn btn-info btn-sm rounded-circle"
            @click="decreaseQuantity(item.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="16"
              fill="#e1ebe2"
            >
              <path d="M200-440v-80h560v80H200Z"></path>
            </svg>
          </button>

          <span class="card-title lh-xs">{{ item.quantity }}</span>

          <button
            class="btn btn-info btn-sm rounded-circle"
            @click="increaseQuantity(item.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              viewBox="0 -960 960 960"
              width="18"
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
    <div class="col-6 col-md-3 text-end text-md-center">
      {{ getItemSubtotal(item.id) }} <span class="d-md-none">€</span>
    </div>
  </div>
  <hr v-if="step == 1" class="rounded-2 text-info" />
  <div v-if="step == 3" class="my-3 row w-100 align-items-center text-center">
    <!-- product x price x quantity -->
    <div class="col-12 text-end text-md-start">
      <div class="w-100 d-flex justify-content-start gap-3">
        <span class="text-start">{{ product.name }} </span>
        <div>
          <span class="card-title lh-xs"> {{ item.quantity }} x </span>
          <span>{{ product.discount || product.price }} €</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useProducts from "../composables/useProducts";
import useShoppingCart from "../composables/useShoppingCart";
export default {
  name: "CheckoutItem",
  props: ["item", "step"],
  setup(props) {
    const { getProductInfo } = useProducts();
    const product = getProductInfo(props.item.id);
    const {
      decreaseQuantity,
      increaseQuantity,
      getItemSubtotal,
      removeFromCart,
    } = useShoppingCart();
    return {
      product,
      decreaseQuantity,
      increaseQuantity,
      getItemSubtotal,
      removeFromCart,
    };
  },
};
</script>
