const GET_PRODUCT = (state, products) => {
  state.products = products;
};
const basketLocalStorage = (state) => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    state.basket = JSON.parse(basket);
  }
};
const updateLocalStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
const ADD_TO_CART = (state, { product }) => {
  let productInBasket = state.basket.find((i) => {
    return i.id === product.id;
  });
  if (productInBasket) {
    productInBasket.quantity++;
    updateLocalStorage(state.basket);
    return;
  } else {
    state.basket.push({
      ...product,
      quantity: 1,
    });
  }
  updateLocalStorage(state.basket);
};

const DELETE_FROM_CART = (state, { product }) => {
  let productInBasket = state.basket.find((i) => {
    return i.id === product.id;
  });
  if (productInBasket) {
    if (productInBasket.quantity > 1) {
      productInBasket.quantity--;
      updateLocalStorage(state.basket);
    }
  } else {
    state.basket = state.basket.filter((i) => i.id !== product.id);
  }
  updateLocalStorage(state.basket);
};

const REMOVE_FROM_CART = (state, product) => {
  state.basket = state.basket.filter((i) => {
    return i.id !== product.id;
  });
  updateLocalStorage(state.basket);
};

export default {
  GET_PRODUCT,
  ADD_TO_CART,
  DELETE_FROM_CART,
  REMOVE_FROM_CART,
  basketLocalStorage,
  updateLocalStorage,
};
