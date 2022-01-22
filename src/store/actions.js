import axios from "axios";
import router from "@/router/index";

var APIurl = "https://nonchalant-fang.glitch.me";

const getProductList = (context) => {
  axios
    .get(`${APIurl}/listing`)
    .then((response) => {
      context.commit("GET_PRODUCT", response.data);
    })
    .catch(function (error) {
      if (error.response.status === 404) {
        router.push({ name: "Error" });
      } else {
        return Promise.reject(error);
      }
    });
};

const addProductToCart = ({ commit }, product) => {
  commit("ADD_TO_CART", product);
};
const removeFromBasket = ({ commit }, product) => {
  commit("REMOVE_FROM_CART", product);
};
const deleteFromBasket = ({ commit }, product) => {
  commit("DELETE_FROM_CART", product);
};

export default {
  getProductList,
  addProductToCart,
  removeFromBasket,
  deleteFromBasket,
};
