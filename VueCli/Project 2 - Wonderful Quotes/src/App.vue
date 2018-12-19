<template>
  <div id="app" class="container">
    <app-header :quote-count="quotes.length" :max-quotes="maxQuotes"></app-header>
    <new-quote @quoteAdded="(quotes.length < 10)?quotes.push($event):overflow()"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="quotes=remove($event)"></quote-grid>
    <br>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert" :class="getClass()">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import quoteGrid from "./components/QuoteGrid.vue";
import newQuote from "./components/NewQuote.vue";
import header from "./components/Header.vue";

export default {
  name: "app",
  data() {
    return {
      message: "Info: Click on a Quote to delete",
      quotes: [],
      maxQuotes: 10
    };
  },
  methods: {
    remove: function(idx) {
      var element = this.quotes[idx];
      return this.quotes.filter(el => el !== element);
    },
    overflow: function() {
      let vm = this;
      setTimeout(function() {
        vm.message = "Info: Click on a Quote to delete";
      }, 5000);
      this.message = "Cannot add more quotes. Please delete some quotes!";
    },
    getClass: function() {
      if (/.*Info.*/.test(this.message)) {
        return "alert-info";
      } else {
        return "alert-danger";
      }
    }
  },
  components: {
    quoteGrid: quoteGrid,
    newQuote: newQuote,
    appHeader: header
  }
};
</script>

<style>
</style>
