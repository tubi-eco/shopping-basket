<template>
  <li>
    <figure>
      <img :src="item.image" />
    </figure>
    <div class="description">
      {{ item.name }}
      <span class="price">
        {{ item.price }}
        {{ item.currency.replace("TRY", "TL") }}
      </span>
    </div>
    <div class="counter">
      <a href="#" class="btn btn-small-radius" @click="addToBasket()">+</a>
      <span> {{ item.quantity }} </span>
      <a href="#" class="btn btn-small-radius" @click="deleteToBasket()">-</a>
    </div>
    <a href="#" class="text-btn remove-btn" @click="removeToBasket()">REMOVE</a>
  </li>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    addToBasket() {
      this.$store.dispatch("addProductToCart", {
        product: this.item,
      });
    },
    deleteToBasket() {
      this.$store.dispatch("deleteFromBasket", {
        product: this.item,
      });
    },
    removeToBasket() {
      this.$store.dispatch("removeFromBasket", this.item);
    },
  },
};
</script>
