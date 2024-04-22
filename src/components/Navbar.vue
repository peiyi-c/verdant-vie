<template>
  <nav
    class="navbar navbar-expand-lg fixed-top shadow-sm px-5 py-3 bg-primary-subtle"
  >
    <div class="container">
      <!-- shop logo -->
      <a href="/">
        <img src="/logo.svg" alt="logo vie" class="" />
      </a>
      <div class="d-flex d-lg-none w-50 gap-2 justify-content-end">
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
          class="navbar-nav my-5 my-md-0 ms-lg-5 me-auto mb-2 mb-lg-0 pt-3 pt-lg-0 text-center d-flex gap-5"
        >
          <li v-for="item in items" :key="item.id" class="nav-item">
            <NavItem :name="item.name" :path="item.path" />
          </li>
        </ul>
        <!-- shopping bag -->
        <div class="mt-5 mt-lg-0 text-center text-lg-end shopping-bag">
          <button class="btn btn-sm shopping-bag__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#22031f"
            >
              <path
                d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"
              />
            </svg>
          </button>
        </div>
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
        { id: 1, name: "hair", path: "hair" },
        { id: 2, name: "face", path: "face" },
        { id: 3, name: "body", path: "body" },
        { id: 4, name: "home style", path: "/home_style" },
        { id: 5, name: "accessory", path: "accessory" },
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

.shopping-bag {
  &__btn {
    &:focus,
    &:active {
      border: none;
    }
  }
}
</style>
