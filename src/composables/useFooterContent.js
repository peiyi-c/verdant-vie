import { ref } from "vue";
import data from "../../data/data.json";

const footerIdx = ref(0);
const footerContent = ref(data[2]["footer"][0]);

export default function useFooterContent() {
  function setFooterContent(index) {
    footerIdx.value = index;
    footerContent.value = data[2]["footer"][index];
  }

  return {
    footerIdx,
    footerContent,
    setFooterContent,
  };
}
