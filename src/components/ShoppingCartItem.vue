<template>
  <div class="d-flex justify-content-center">
    <div class="w-100 px-3 rounded-1 d-flex gap-3 gap-lg-4">
      <img
        :src="product.image"
        class="rounded-1 object-fit-cover w-50 h-80 border border-1 border-light show"
      />

      <div class="w-100 row align-content-start">
        <!-- product name -->
        <p class="col-10">{{ product.name }}</p>
        <!-- remove from cart button -->
        <div class="col-2" role="button" @click="() => removeFromCart(item.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#efbc9b"
          >
            <path
              fill-opacity="0.5"
              d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
            />
          </svg>
        </div>
        <!-- subtotal -->
        <div class="col-12">
          <!-- item quantity x price = total -->
          <p class="fs-6">
            {{ item.quantity }} x {{ product.discount || product.price }} €
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useProducts from "../composables/useProducts";
import useShoppingCart from "../composables/useShoppingCart";
export default {
  name: "ShoppingCartItem",
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
<style></style>
