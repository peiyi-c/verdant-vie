<template>
  <router-link class="text-dark" :to="path" @click="handleToggle">
    <span
      v-if="width <= 991"
      data-bs-toggle="collapse"
      data-bs-target="#navbarItems"
      aria-controls="navbarItems"
      aria-expanded="false"
      aria-label="Toggle navigation"
      class="nav-link text-dark"
      >{{ name }}</span
    >
    <span v-else class="nav-link text-dark">{{ name }}</span>
  </router-link>
</template>

<script>
import useWindowWidth from "../composables/useWindowWidth";
export default {
  name: "NavItem",
  props: ["name", "path"],
  setup() {
    const { width } = useWindowWidth();
    return {
      width,
    };
  },
  methods: {
    handleToggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="scss">
.nav-link {
  &:hover {
    color: #a0b1b6 !important;
    transition: color 0.25s ease-in-out;
  }
}
</style>
