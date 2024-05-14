<template>
  <div class="position-absolute shopping-bag mx-2">
    <div class="position-relative wrapper">
      <div class="text-center text-lg-end">
        <div
          role="button"
          class="shopping-bag__btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#shoppingCart"
          aria-controls="shoppingCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#22031f"
          >
            <path
              d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"
            />
          </svg>
        </div>
      </div>
      <!-- cart items quantity badge -->
      <span
        v-if="getCartItemsQuantity() > 0"
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >{{
          getCartItemsQuantity() > 9
            ? "9+"
            : getCartItemsQuantity() >= 1
            ? getCartItemsQuantity()
            : 0
        }}
      </span>
    </div>
  </div>
</template>

<script>
import useShoppingCart from "../composables/useShoppingCart";
export default {
  name: "ShoppingBag",
  setup() {
    const { getCartItemsQuantity } = useShoppingCart();

    return {
      getCartItemsQuantity,
    };
  },
};
</script>

<style lang="scss">
@use "../scss/utility/" as *;
.shopping-bag {
  top: 1.2rem;
  right: 1.5rem;
  @include breakpoint-up(medium) {
    top: 1.3rem;
    right: 2rem;
  }
  @include breakpoint-up(large) {
    right: 2.1rem;
  }
  &__btn {
    &:focus,
    &:active {
      border: none;
    }
  }
}
</style>
