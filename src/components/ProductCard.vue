<template>
  <div
    class="card mb-3 col-6 col-sm-5 col-md-4 col-lg-3 col-xxl-2 d-flex align-items-center justify-content-end"
    :class="{ subtle: isSoldOut }"
  >
    <!-- image -->
    <div
      class="card-img-wrapper w-100 position-relative bg-secondary rounded-1"
    >
      <img
        v-show="imgLoaded"
        @load="onImgLoad"
        :src="item.image"
        class="card-img-top rounded-1 object-fit-cover"
        :alt="item.name"
        loading="lazy"
      />
      <!-- skeleton -->
      <svg
        v-show="!imgLoaded"
        class="bd-placeholder-img rounded-1 opacity-25 w-100"
        height="140"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect class="w-100 h-100" fill="#e1ebe2"></rect>
      </svg>
      <span
        class="card-img-text w-100 position-absolute d-block top-50 text-center text-secondary-emphasis"
        >{{ item.type }}</span
      >
    </div>

    <div class="card-body w-100 px-0">
      <!-- name & badge -->
      <p
        class="card-title lh-xs m-0 fs-6 text-primary-emphasis fw-bold d-flex justify-content-between"
      >
        <span class="text">{{ item.name }}</span>
        <span
          v-show="isNew && !isSoldOut"
          class="card-badge badge rounded-pill text-bg-secondary"
          >new</span
        >
        <span
          v-show="isSoldOut"
          class="card-badge badge rounded-pill text-bg-light text-warning"
          >sold out</span
        >
      </p>

      <!-- price -->
      <div class="d-flex w-50 gap-2">
        <span
          class="card-text text-primary text-sm"
          :class="{ strick: hasDiscount }"
          >{{ item.price }} €</span
        >
        <span v-show="hasDiscount" class="card-text text-danger text-sm"
          >{{ item.discount }} €</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["item"],
  data() {
    return {
      imgLoaded: false,
    };
  },
  methods: {
    onImgLoad() {
      this.imgLoaded = true;
    },
  },
  computed: {
    isNew() {
      let today = new Date().getTime();
      let listedDate = new Date(this.item.listedOn).getTime();
      // differece in days
      let diff = Math.floor((today - listedDate) / (24 * 60 * 60 * 1000));
      return diff < 30 * 3;
    },
    isSoldOut() {
      return this.item.inStock === 0;
    },
    hasDiscount() {
      return this.item.discount !== null;
    },
  },
};
</script>
<style lang="scss">
@use "../scss/utility/" as *;
.card {
  // image
  &-img-wrapper {
    background: #ececec67;
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