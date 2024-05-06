import products from "../../data/data.json";

export default function useProducts() {
  function getProductInfo(itemId) {
    // filter out number from item id
    const category = itemId.replace(/\d+/g, "");
    // return product object
    return products[0][category].filter((item) => item.id == itemId)[0];
  }

  return {
    getProductInfo,
  };
}
