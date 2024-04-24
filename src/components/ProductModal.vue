<template>
  <div
    id="productModal"
    class="modal fade modal-dialog-centered"
    :class="{ none: !show, block: show }"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-secondary">
        <div class="modal-header border-0">
          <h3 class="modal-title fw-bold">{{ item.name }}</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="w-100 rounded-1 d-flex gap-2 gap-md-3 gap-lg-4">
            <img
              :src="item.image"
              class="rounded-1 object-fit-cover w-50 text-center border border-1 border-light"
              :alt="item.name"
            />
            <div class="w-100 px-5">
              <p class="text-center fs-6">{{ item.type }}</p>
              <p class="text-center">{{ item.discount || item.price }} €</p>

              <!-- add to cart -->
              <div
                v-if="itemsInCart[this.item.id] > 0"
                class="d-flex gap-3 border-0 align-items-center"
              >
                <button class="btn btn-info btn-sm rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill="#e1ebe2"
                  >
                    <path d="M200-440v-80h560v80H200Z" />
                  </svg>
                </button>
                <span class="card-title lh-xs">{{ itemsInCart[item.id] }}</span>
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
                    />
                  </svg>
                </button>
              </div>
              <div v-else class="w-100 text-center">
                <button class="btn btn-info">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["show", "item"],
  inject: ["itemsInCart"],
  data() {
    return {};
  },
};
</script>
<style></style>
