import { onMounted, onUnmounted, ref } from "vue";

export default function useWindowWidth() {
  let windowWidth = ref(0);

  function handleResize() {
    windowWidth.value = window.innerWidth;
  }

  onMounted(() => window.addEventListener("resize", handleResize));
  onUnmounted(() => window.removeEventListener("resize", handleResize));
  return {
    windowWidth,
  };
}
