<template>
  <div class="row">
    <app-stock v-for="(stock, idx) in stocks" :key="idx" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  computed: {
    ...mapGetters({
      stocks: "stocksPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>