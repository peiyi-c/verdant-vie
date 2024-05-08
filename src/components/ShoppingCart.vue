<template>
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="shoppingCart"
    aria-labelledby="shoppingCartLabel"
  >
    <div class="offcanvas-header">
      <h3
        class="offcanvas-title text-center text-capitalize"
        id="shoppingCartLabel"
      >
        Shopping cart
      </h3>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body d-flex flex-column align-items-center">
      <!-- current items -->
      <p v-if="!items.length" class="my-5 text-center">
        No product selected yet.
      </p>

      <div v-else class="d-flex flex-column gap-3">
        <ShoppingCartItem v-for="item in items" :key="item.id" :item="item" />
      </div>
      <!-- Go to checkout page -->
      <div
        v-if="items.length"
        class="my-3 w-100 d-flex justify-content-center gap-2"
      >
        <router-link to="checkout">
          <button
            class="btn btn-primary rounded-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span class="lh-sm text-white text-decoration-none">
              Check Out
            </span>
          </button></router-link
        >
        <!-- Close shopping cart canvas -->
        <button
          class="btn btn-outline-primary rounded-1"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span class="lh-sm text-primary">Continue Shopping</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ShoppingCartItem from "./ShoppingCartItem.vue";
import useShoppingCart from "../composables/useShoppingCart";
import { inject } from "vue";
export default {
  name: "ShoppingCart",
  components: { ShoppingCartItem },

  setup() {
    const modalItem = inject("modalItem");
    const { currentItems: items } = useShoppingCart();
    return {
      modalItem,
      items,
    };
  },
};
</script>
<style scoped></style>
