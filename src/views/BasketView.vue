<template>
  <div class="basket-list">
    <div v-if="basketItemCount > 0">
      <h1 @click="test()">MY CART ({{ basketItemCount }})</h1>
      <ul>
        <BasketCard v-for="item in basket" :key="item.id" :item="item" />
      </ul>
      <p class="total-price">Total : {{ totalPrice.toFixed(2) }} TL</p>
    </div>
    <div v-else class="empty-basket">
      <h2>Your cart is currently empty.</h2>
      <br />
      <p>
        Click the button below to fill your cart with "Best Offer" full of
        opportunities.
      </p>
    </div>
    <div class="footer-button-container">
      <router-link to="/" class="btn btn-large btn-border"
        >CONTINUE SHOPPING</router-link
      >
      <a
        v-if="basketItemCount > 0"
        @click="placeOrder()"
        class="btn btn-large btn-orange"
        >PLACE ORDER</a
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";

import { mapGetters } from "vuex";
import BasketCard from "../components/BasketCard.vue";

export default {
  name: "ShoppingBasket",
  components: {
    BasketCard,
  },
  computed: {
    ...mapGetters(["basket", "totalPrice", "basketItemCount"]),
  },
  methods: {
    async placeOrder() {
      let order = this.basket;
      let result = await axios.post("https://nonchalant-fang.glitch.me/order", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.parse(JSON.stringify(order)),
      });
      return result;
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/color.scss";
@import "@/styles/basket-product-list.scss";
</style>
