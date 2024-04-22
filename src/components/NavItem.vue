<template>
  <router-link class="nav-link text-dark" :to="path" @click="handleToggle">
    <span
      v-if="window.width <= 991"
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
export default {
  name: "NavItem",
  props: ["name", "path"],
  inject: ["window"],
  methods: {
    handleToggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style></style>
