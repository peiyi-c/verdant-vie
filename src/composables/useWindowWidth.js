import { ref, computed, onMounted, onUnmounted } from "vue";

export default function useWindowWidth() {
  const windowWidth = ref(window.innerWidth);

  function onResize() {
    windowWidth.value = window.innerWidth;
  }

  onMounted(() => {
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  const width = computed(() => windowWidth.value);

  return {
    width,
  };
}
