<template>
  <div class="container">
    <div class="header">
      <router-link to="/"
        ><img alt="" class="logo" src="@/assets/logo.svg"
      /></router-link>
      <div class="btn btn-small btn-basket">
        <router-link to="/basket">
          Sepetim
          <span>{{ basketItemCount }} </span></router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["products", "basketItemCount"]),
  },
  mounted() {
    this.$store.commit("basketLocalStorage");
  },
};
</script>
<style lang="scss">
@import "styles/main.scss";
</style>
