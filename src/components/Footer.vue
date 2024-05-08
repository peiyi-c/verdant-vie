<template>
  <footer class="w-100 mt-5 border border-1 border-red bg-light-subtle">
    <div
      class="container px-5 py-3 d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between"
    >
      <div class="">
        <p class="fw-bold">INFO</p>
        <ul class="lh-lg">
          <li>
            <span
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFooter"
              aria-controls="offcanvasFooter"
            >
              Our Story
            </span>
          </li>
          <li>Orders</li>
          <li>Customer Service</li>
          <li>FAQs</li>
          <li>Store</li>
        </ul>
      </div>
      <div class="">
        <p class="fw-bold">Cooperation</p>
        <ul class="lh-lg">
          <li>Crossover</li>
        </ul>
      </div>
      <div class="">
        <p class="fw-bold">Contact Us</p>
        <p class="ms-1 lh-base">
          Verdant Street 17<br />
          New Silbermond City<br />
          Nebelland
        </p>
      </div>
      <div class="">
        <p class="fw-bold">Follow Us</p>
        <img
          src="../assets/images/footer/facebook.svg"
          class="show some-icon"
        />
        <img
          src="../assets/images/footer/instagram.svg"
          class="show some-icon"
        />
        <img
          src="../assets/images/footer/twitterx.svg"
          class="show some-icon"
        />
      </div>
    </div>
  </footer>
  <FooterCanvas />
</template>

<script>
import FooterCanvas from "./FooterCanvas.vue";
export default {
  components: { FooterCanvas },
};
</script>

<style lang="scss">
footer {
  ul {
    list-style: none;
    padding-left: 0.25rem;
    li {
      transition: color 0.25s linear;
      &:hover {
        color: var(--warning);
      }
    }
  }
  .some-icon {
    width: 2rem;
    margin-right: 5px;
    height: auto;
  }
}
#offcanvasFooter {
  height: 60svh;
  opacity: 1;
}
</style>
