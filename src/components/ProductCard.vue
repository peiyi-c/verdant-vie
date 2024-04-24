<template>
  <div
    class="card mb-3 col-6 col-sm-5 col-md-4 col-lg-3 d-flex align-items-center justify-content-end"
    :class="{ subtle: isSoldOut }"
  >
    <!-- image -->
    <div class="card-img-wrapper position-relative">
      <img :src="item.image" class="card-img-top rounded-1" :alt="item.name" />
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
export default {
  name: "ProductCard",
  props: ["item"],
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
  },
};
</script>
<style lang="scss">
.card {
  border: none;
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
  }
  &-img-text {
    transition: transform 3 ease-out 2;
    transition: opacity 2 ease-in 2;
    transform: translateY(200%);
    opacity: 0;
  }
}
</style>
