<template>
  <li>
    <figure>
      <img :src="product.image" />
    </figure>
    <div class="description">{{ product.name }}</div>
    <div class="product-footer">
      <span class="price">
        {{ product.price }}
        {{ product.currency.replace("TRY", "TL") }}
      </span>
      <a @click="addToCart()" class="btn btn-medium btn-add-basket">
        ADD BASKET
      </a>
    </div>
  </li>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>
