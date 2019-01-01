<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="nav navbar-nav">
        <router-link tag="li" class="nav-link" active-class="active" to="/portfolio">
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link tag="li" class="nav-link" active-class="active" to="/stocks">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <strong class="navbar-text ml-auto">Funds: {{funds | currency}}</strong>
      <ul class="nav navbar-nav ml-auto">
        <li>
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            :class="{show: isDropdown}"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="isDropdown"
            @click="isDropdown=!isDropdown"
          >Save / Load</a>
          <div class="dropdown-menu" :class="{show: isDropdown}" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => {
    return {
      isDropdown: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const stockData = {
        funds: this.$store.getters.funds,
        stocksPortfolio: this.$store.getters.stocksPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", stockData);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>