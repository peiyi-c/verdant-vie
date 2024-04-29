<template>
  <router-link class="nav-link text-dark" :to="path" @click="handleToggle">
    <span
      v-if="windowWidth <= 991"
      data-bs-toggle="collapse"
      data-bs-target="#navbarItems"
      aria-controls="navbarItems"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >{{ name }}</span
    >
    <span v-else>{{ name }}</span>
  </router-link>
</template>

<script>
import useWindowWidth from "../composables/useWindowWidth";
export default {
  name: "NavItem",
  props: ["name", "path"],
  // inject: ["window"],
  setup() {
    let { windowWidth } = useWindowWidth();
    return {
      windowWidth,
    };
  },
  methods: {
    handleToggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style></style>
