<template>
  <div
    data-bs-toggle="modal"
    data-bs-target="#productModal"
    class="card mb-3 col-6 col-sm-5 col-md-4 col-lg-3 col-xxl-2 d-flex align-items-center justify-content-end"
    :class="{ soldout: item.inStock == 0 }"
    @click="setItem"
  >
    <!-- image -->
    <div
      class="card-img-wrapper w-100 position-relative bg-secondary-subtle rounded-1"
    >
      <img
        :class="imgLoaded ? 'show' : ''"
        @load="onImgLoad()"
        :src="item.image"
        class="card-img-top rounded-1 object-fit-cover"
        :alt="item.name"
      />
      <span
        class="card-img-text w-100 position-absolute d-block top-50 text-center text-secondary-emphasis"
      >
        {{ item.type }}
      </span>
    </div>

    <div class="card-body w-100 px-0">
      <!-- name & badge -->
      <p
        class="card-title lh-xs m-0 fs-6 text-primary-emphasis fw-bold d-flex justify-content-between"
      >
        <span class="text">{{ item.name }}</span>
        <span
          v-show="isProductNew(item) && item.inStock"
          class="card-badge badge rounded-pill text-bg-secondary pointer-event"
          >new</span
        >
        <span
          v-show="item.inStock === 0"
          class="card-badge badge rounded-pill text-bg-light text-warning"
          >sold out</span
        >
      </p>

      <!-- price -->
      <div class="d-flex w-50 gap-2">
        <span
          class="card-text text-primary text-sm"
          :class="{ strick: item.discount !== null }"
          >{{ item.price }} €</span
        >
        <span
          v-show="item.discount !== null"
          class="card-text text-danger text-sm"
          >{{ item.discount }} €</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import useImageLoad from "../composables/useImageLoad";
import useProducts from "../composables/useProducts";
export default {
  name: "ProductCard",
  props: ["item"],
  setup() {
    const { imgLoaded, onImgLoad } = useImageLoad();
    const { isProductNew } = useProducts();
    const setItem = () => {
      this.$emit("setItem", this.item);
    };
    return {
      imgLoaded,
      onImgLoad,
      isProductNew,
      setItem,
    };
  },
};
</script>

<style lang="scss">
@use "../scss/utility/" as *;

.card {
  &.soldout {
    opacity: 0.8;
    pointer-events: none;
    cursor: not-allowed;
    img {
      filter: blur(2px);
    }
  }
  // image
  &-img-wrapper {
    height: rem(140);
    background: var(--secondary);

    &:hover {
      .card-img-top {
        opacity: 0.5;
      }
      .card-img-text {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  &-img-top {
    transition: opacity 0.25s ease-in;
    max-height: rem(140);
  }
  &-img-text {
    transition: transform 3 ease-out 2;
    transition: opacity 2 ease-in 2;
    transform: translateY(200%);
    opacity: 0;
  }
}
</style>
