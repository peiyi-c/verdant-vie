<template>
  <Navbar />
  <router-view></router-view>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap");

body {
  font-family: "Lato", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
}
</style>
