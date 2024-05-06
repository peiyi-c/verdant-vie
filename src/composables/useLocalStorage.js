export default function useLocalStorage(key) {
  function getLocalStorage(key) {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    } else {
      return [];
    }
  }
  const savedItems = getLocalStorage(key);

  function setLocalStorage(newItems) {
    localStorage.setItem(key, JSON.stringify(newItems));
  }

  return { savedItems, setLocalStorage };
}
