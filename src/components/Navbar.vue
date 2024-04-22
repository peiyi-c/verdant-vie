<template>
  <nav
    class="navbar navbar-expand-lg fixed-top shadow-sm px-5 py-3 bg-primary-subtle"
  >
    <div class="container">
      <!-- shop logo -->
      <a href="/">
        <img src="/logo.svg" alt="logo vie" class="" />
      </a>
      <div class="d-flex d-lg-none w-50 gap-2 justify-content-center">
        <!-- search icon -->
        <form class="d-flex d-lg-none" role="search">
          <input
            class="form-control me-1"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            class="btn btn-sm btn-outline-primary rounded-2 btn-search"
            type="submit"
          >
            <span class="material-symbols-outlined mt-1"> Search </span>
          </button>
        </form>
        <!-- navbar menu icon -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarItems"
          aria-controls="navbarItems"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!-- navbar -->
      <div class="collapse navbar-collapse fs-6" id="navbarItems">
        <ul
          class="navbar-nav my-5 my-md-0 ms-lg-5 me-auto mb-2 mb-lg-0 pt-3 pt-lg-0 text-center gap-5"
        >
          <li v-for="item in items" :key="item.id" class="nav-item">
            <NavItem :name="item.name" :path="item.path" />
          </li>
        </ul>
        <!-- search icon -->
        <form class="d-none d-xl-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            class="btn btn-sm btn-outline-primary rounded-2 btn-search"
            type="submit"
          >
            <span class="material-symbols-outlined mt-1"> Search </span>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  name: "Navbar",
  components: { NavItem },
  data() {
    return {
      items: [
        { id: 1, name: "all", path: "/" },
        { id: 2, name: "hair", path: "hair" },
        { id: 3, name: "face", path: "face" },
        { id: 4, name: "body", path: "body" },
        { id: 5, name: "home style", path: "home_style" },
        { id: 6, name: "accessory", path: "accessory" },
      ],
    };
  },
};
</script>

<style lang="scss">
ul.navbar-nav {
  text-transform: uppercase;

  & a:hover {
    color: #a0b1b6 !important;
    transition: color 0.25s ease-in-out;
  }
}

.btn-search:hover span {
  color: #a0b1b6;
}
</style>
