<template>
  <div class="shopping-list">
    <h1>Ürün Listesi</h1>
    <div class="product-list" v-if="products">
      <ul>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </ul>
    </div>
    <div v-else>
      <img src="@/assets/loading.gif" width="30" /> <br />
      Loading...
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ListView",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["products"]),
  },
  mounted() {
    this.$store.dispatch("getProductList");
  },
};
</script>

<style lang="scss">
@import "../styles/color.scss";
@import "../styles/product-list.scss";
</style>
