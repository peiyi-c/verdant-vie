<template>
  <nav
    class="navbar navbar-expand-lg fixed-top shadow-sm px-5 py-3 bg-primary-subtle rounded-bottom-2"
  >
    <div class="container">
      <!-- shop logo -->
      <router-link class="nav-link" to="/">
        <img src="/logo.svg" alt="logo vie" class="w-75 show" />
      </router-link>

      <!-- shopping bag -->
      <ShoppingBag />

      <!-- navbar: icon for mobile -->
      <div class="d-flex w-50 d-lg-none gap-2 justify-content-end">
        <button
          class="btn btn-sm navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarItems"
          aria-controls="navbarItems"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="() => (isOpen = !isOpen)"
        >
          <svg
            class="navbar-icon"
            :class="{ up: isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="#333333"
          >
            <path
              d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"
            />
          </svg>
        </button>
      </div>

      <!-- navbar items -->
      <div class="collapse navbar-collapse fs-6" id="navbarItems">
        <ul
          class="navbar-nav my-5 my-md-0 ms-lg-5 me-auto mb-2 mb-lg-0 pt-3 pt-lg-0 text-center d-flex gap-5"
        >
          <li v-for="item in items" :key="item.id" class="nav-item">
            <NavItem
              :name="item.name"
              :path="item.path"
              @toggle="() => (isOpen = !isOpen)"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import data from "../../data/data.json";
import NavItem from "./NavItem.vue";
import ShoppingBag from "./ShoppingBag.vue";

export default {
  name: "Navbar",
  components: { NavItem, ShoppingBag },
  setup() {
    const items = ref(data[1]["items"]);
    const isOpen = ref(false);
    return {
      items,
      isOpen,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  &-icon {
    transform: rotate(90deg);
    transition: fill 0.8s ease-in;
    transition: transform 0.5s ease-in-out;
    &:hover {
      fill: #b0d3da;
    }
    &.up {
      transform: rotate(-90deg);
    }
  }
}
ul.navbar-nav {
  text-transform: uppercase;
}
</style>
