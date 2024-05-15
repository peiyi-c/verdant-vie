<template>
  <h1 class="text-center display-5">Thank you</h1>

  <section class="container pt-5">
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
      <h2 class="text-center fs-3 text-warning-emphasis fw-bolder lh-lg">
        Kudos, clicking all the way here! <br />

        Wish you a wonderful day.
      </h2>
      <div class="w-75 mx-auto alert alert-danger text-center" role="alert">
        Notice:
        <strong class="text-decoration-underline text-uppercase">no</strong>
        items will be shipped! It is a demo page.
      </div>
    </div>

    <!-- Go back to Home page -->
    <div
      class="mt-3 d-flex justify-content-center loading"
      :class="{ show: !loading }"
    >
      <button class="btn btn-lg btn-danger">
        <router-link class="nav-link" to="/">Go shopping again</router-link>
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
      // scroll to top
      window.scrollTo(0, 0);
      // wait 2 sec, then show content
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
