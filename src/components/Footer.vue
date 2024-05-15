<template>
  <footer
    class="mt-4 px-4 row justify-content-center border border-1 border-red bg-light-subtle"
  >
    <div class="container px-5">
      <div class="mx-2 px-2 px-md-4 px-lg-5 py-3 row">
        <div class="col-12 col-sm-6 col-md-3">
          <p class="fw-bold">INFO</p>
          <ul class="lh-lg">
            <li
              @click="setFooterContent(0)"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFooter"
              aria-controls="offcanvasFooter"
            >
              <span> Our Mission </span>
            </li>
            <li
              @click="setFooterContent(1)"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFooter"
              aria-controls="offcanvasFooter"
            >
              Orders
            </li>
            <li
              @click="setFooterContent(2)"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFooter"
              aria-controls="offcanvasFooter"
            >
              Customer Service
            </li>

            <li
              @click="setFooterContent(3)"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFooter"
              aria-controls="offcanvasFooter"
            >
              Store
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <p class="fw-bold">Cooperation</p>
          <ul class="lh-lg">
            <li
              @click="setFooterContent(4)"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFooter"
              aria-controls="offcanvasFooter"
            >
              Crossover
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <p class="fw-bold">Contact Us</p>
          <p class="ms-1 lh-base">
            Verdant Street 17<br />
            New Silbermond City<br />
            Nebelland
          </p>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
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
    </div>
  </footer>
  <FooterCanvas />
</template>

<script>
import FooterCanvas from "./FooterCanvas.vue";
import useFooterContent from "../composables/useFooterContent";
export default {
  components: { FooterCanvas },
  setup() {
    const { setFooterContent } = useFooterContent();
    return {
      setFooterContent,
    };
  },
};
</script>

<style lang="scss">
@use "../scss/utility/" as *;
footer {
  ul {
    list-style: none;
    padding-left: 0.25rem;
    li {
      transition: color 0.25s linear;
      &:hover {
        font-weight: 700;
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
  height: 70svh;
  @include breakpoint-up(medium) {
    height: 50svh;
  }
  @include breakpoint-up(large) {
    height: 45svh;
  }
  opacity: 1;
}
</style>
