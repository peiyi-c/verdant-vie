<template>
  <h1 class="text-center">Payment</h1>

  <section class="container">
    <!-- loading spinner -->
    <div
      v-if="loading"
      class="d-flex justify-content-center my-5 loading"
      :class="{ show: loading }"
    >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <!-- thank you & warning -->
    <div class="mt-5 row gap-5 loading" :class="{ show: !loading }">
      <h2 class="text-center fs-3 text-warning-emphasis fw-bolder">
        Thank you very much!
      </h2>
      <div class="w-75 mx-auto alert alert-danger text-center" role="alert">
        Pleae notice:
        <strong class="text-decoration-underline">no items</strong> will be
        shipped!<br />
        It is a demo page.
      </div>
    </div>

    <!-- Go back to Home page -->
    <div
      class="mt-3 d-flex justify-content-center loading"
      :class="{ show: !loading }"
    >
      <button class="btn btn-md btn-danger">
        <router-link class="nav-link" to="/">Go back to home</router-link>
      </button>
    </div>
  </section>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "Payment",
  setup() {
    const loading = ref(true);

    let timeout = "";
    onMounted(() => {
      timeout = setTimeout(() => {
        loading.value = false;
      }, 2000);
    });
    onUnmounted(() => {
      clearTimeout(timeout);
    });

    return {
      loading,
    };
  },
};
</script>
