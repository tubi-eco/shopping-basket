<template>
  <div class="basket-list">
    <h1>MY CART ({{ basketItemCount }})</h1>
    <ul>
      <BasketCard v-for="item in basket" :key="item.id" :item="item" />
    </ul>
    <p class="total-price">Total : {{ totalPrice.toFixed(2) }} TL</p>
    <div class="footer-button-container">
      <router-link to="/" class="btn btn-large btn-border"
        >CONTINUE SHOPPING</router-link
      >
      <router-link to="/" class="btn btn-large btn-orange"
        >PLACE ORDER</router-link
      >
    </div>
  </div>
</template>
<script>
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
};
</script>
<style lang="scss">
@import "@/styles/color.scss";
@import "@/styles/basket-product-list.scss";
</style>
