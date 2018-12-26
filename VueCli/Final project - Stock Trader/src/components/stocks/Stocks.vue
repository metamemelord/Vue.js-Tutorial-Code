<template>
  <div class="row">
    <app-stock v-for="(stock, idx) in stocks" :key="idx" :stock="stock"></app-stock>
  </div>
</template>

<script>
import stock from "./Stock.vue";

export default {
  components: {
    appStock: stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>