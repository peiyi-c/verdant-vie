import { ref } from "vue";

export default function useLocalStorage(key) {
  function getLocalStorage(key) {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    } else {
      return [];
    }
  }
  let savedItems = ref(getLocalStorage(key));

  function setLocalStorage() {
    localStorage.setItem(key, JSON.stringify(savedItems.value));
  }
  return { savedItems, setLocalStorage };
}
