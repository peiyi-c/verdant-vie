import { ref, watch } from "vue";
import useLocalStorage from "./useLocalStorage";
import useProducts from "./useProducts";

const { savedItems, setLocalStorage } = useLocalStorage("vie-shopping");
const currentItems = ref(savedItems);

export default function useShoppingCart() {
  const { getProductInfo } = useProducts();

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

  function getItemSubtotal(itemId) {
    const item = getProductInfo(itemId);
    if (item) {
      const price = item["discount"] || item["price"];
      const quantity = getItemQuantity(itemId);
      return (price * quantity).toFixed(2);
    } else {
      return 0;
    }
  }

  function getCartItemsTotal() {
    return currentItems.value
      .reduce(
        (total, item) => Number(total) + Number(getItemSubtotal(item.id)),
        0
      )
      .toFixed(2);
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
    currentItems,
    getItemQuantity,
    getItemSubtotal,
    getCartItemsTotal,
    removeFromCart,
    itemIsInCart,
    decreaseQuantity,
    increaseQuantity,
  };
}
