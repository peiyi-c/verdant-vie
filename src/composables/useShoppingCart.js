import useLocalStorage from "./useLocalStorage";

export default function useShoppingCart() {
  const { savedItems, setLocalStorage } = useLocalStorage("vie-shopping");

  function increaseQuantity(itemId) {
    // if cart is empty
    if (savedItems.value.find((item) => item.id == itemId) == null) {
      savedItems.value = [...savedItems.value, { id: itemId, quantity: 1 }];
    } else {
      // if cart is not empty
      savedItems.value = savedItems.value.map((item) => {
        if (item.id == itemId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    // update localStorage
    setLocalStorage();
  }
  function removeFromCart(itemId) {
    savedItems.value = savedItems.value.filter((item) => item.id !== itemId);
  }
  function decreaseQuantity(itemId) {
    // remove from cart if item quantity is 1
    if (savedItems.value.find((item) => item.id === itemId)?.quantity === 1) {
      removeFromCart(itemId);
    } else {
      // substract 1 from item quantity
      savedItems.value = savedItems.value.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
    // update localStorage
    setLocalStorage();
  }

  function getItemQuantity(itemId) {
    return savedItems.value.find((it) => it.id == itemId)?.quantity || 0;
  }

  function itemIsInCart(itemId) {
    return savedItems.value.some((it) => it.id == itemId);
  }

  return {
    savedItems,
    getItemQuantity,
    removeFromCart,
    itemIsInCart,
    decreaseQuantity,
    increaseQuantity,
  };
}
