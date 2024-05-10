<template>
  <div
    class="offcanvas offcanvas-bottom bg-info-subtle rounded-top-2 p-4 p-lg-5"
    tabindex="-1"
    id="offcanvasFooter"
    aria-labelledby="offcanvasFooterLabel"
  >
    <div class="offcanvas-header w-100 d-flex justify-content-between">
      <h3
        class="offcanvas-title fs-3 text-center fw-bold"
        id="offcanvasFooterLabel"
      >
        {{ item["title"] }}
      </h3>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body px-5">
      <h4 class="mb-4 fs-4 fw-semibold text-primary-emphasis">
        {{ item["subtitle"] }}
      </h4>
      <h5 v-if="typeof item['text'] == 'string'" class="fs-4 lh-md">
        {{ item["text"] }}
      </h5>
      <h5 v-else v-for="item in item['text']" class="fs-4 lh-md">
        {{ item }}
      </h5>
    </div>
  </div>
</template>
<script>
import useFooterContent from "../composables/useFooterContent";

export default {
  name: "FooterCanvas",
  setup() {
    const { footerIdx: index, footerContent: item } = useFooterContent();
    return {
      index,
      item,
    };
  },
};
</script>
<style lang="scss"></style>
