import { ref } from "vue";

export default function useImageLoaded() {
  const imgLoaded = ref(false);
  function onImgLoad() {
    imgLoaded.value = true;
  }
  return {
    imgLoaded,
    onImgLoad,
  };
}
