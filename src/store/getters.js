const products = (state) => {
  return state.products;
};
const basket = (state) => {
  return state.basket;
};
const basketItemCount = (state) => {
  let totalQuantity = 0;
  state.basket.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return totalQuantity;
};
const totalPrice = (state) => {
  let total = 0;

  state.basket.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};
const productQuantity = (state, product) => {
  const item = state.basket.find((i) => i.id === product.id);
  if (item) return item.quantity;
  else return null;
};

export default {
  products,
  basket,
  basketItemCount,
  totalPrice,
  productQuantity,
};
