import products from "../../data/data.json";

export default function useProducts() {
  function getProductInfo(itemId) {
    // filter out number from item id
    const category = itemId.replace(/\d+/g, "");
    // return product object
    return products[0][category].filter((item) => item.id == itemId)[0];
  }

  function isProductNew(item) {
    let today = new Date().getTime();
    let listedDate = new Date(item.listedOn).getTime();
    // differece in days
    let diff = Math.floor((today - listedDate) / (24 * 60 * 60 * 1000));
    return diff < 30 * 3;
  }

  return {
    getProductInfo,
    isProductNew,
  };
}
