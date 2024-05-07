import { ref, computed, onMounted, onUnmounted } from "vue";

const windowWidth = ref(window.innerWidth);

export default function useWindowWidth() {
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
