import { ref, watch } from "vue";
import useLocalStorage from "./useLocalStorage";

export default function useShoppingCart() {
  const { savedItems, setLocalStorage } = useLocalStorage("vie-shopping");
  const currentItems = ref(savedItems.value);

  function getCurrentItems() {
    return currentItems.value;
  }
  function increaseQuantity(itemId) {
    // if cart is empty
    if (currentItems.value.find((item) => item.id == itemId) == null) {
      currentItems.value = [...currentItems.value, { id: itemId, quantity: 1 }];
    } else {
      // if cart is not empty
      currentItems.value = currentItems.value.map((item) => {
        if (item.id == itemId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
  }

  function decreaseQuantity(itemId) {
    // remove from cart if item quantity is 1
    if (currentItems.value.find((item) => item.id === itemId)?.quantity === 1) {
      removeFromCart(itemId);
    } else {
      // substract 1 from item quantity
      currentItems.value = currentItems.value.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  }

  function removeFromCart(itemId) {
    currentItems.value = currentItems.value.filter(
      (item) => item.id !== itemId
    );
  }

  function getItemQuantity(itemId) {
    return currentItems.value.find((it) => it.id == itemId)?.quantity || 0;
  }

  function itemIsInCart(itemId) {
    return currentItems.value.some((it) => it.id == itemId);
  }

  watch(
    currentItems,
    (updatedItems) => {
      setLocalStorage(updatedItems);
    },
    { deep: true }
  );

  return {
    getCurrentItems,
    getItemQuantity,
    removeFromCart,
    itemIsInCart,
    decreaseQuantity,
    increaseQuantity,
  };
}
