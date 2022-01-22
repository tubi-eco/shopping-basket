const GET_PRODUCT = (state, products) => {
  state.products = products;
};

const ADD_TO_CART = (state, { product }) => {
  let productInBasket = state.basket.find((i) => {
    return i.id === product.id;
  });
  if (productInBasket) {
    productInBasket.quantity++;
    return;
  } else {
    state.basket.push({
      ...product,
      quantity: 1,
    });
  }
};

const DELETE_FROM_CART = (state, { product }) => {
  let productInBasket = state.basket.find((i) => {
    return i.id === product.id;
  });
  if (productInBasket) {
    if (productInBasket.quantity > 1) {
      productInBasket.quantity--;
      console.log("eksi");
    }
  } else {
    state.basket = state.basket.filter((i) => i.id !== product.id);
  }
};

const REMOVE_FROM_CART = (state, product) => {
  state.basket = state.basket.filter((i) => {
    return i.id !== product.id;
  });
};

export default {
  GET_PRODUCT,
  ADD_TO_CART,
  DELETE_FROM_CART,
  REMOVE_FROM_CART,
};
