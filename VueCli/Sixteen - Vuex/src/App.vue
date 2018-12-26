<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <hr>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" :value="value" @input="updateValue">
        {{value}}
        <hr>
        <input type="text" v-model="value1">
        {{value1}}
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import anotherCounter from "./components/AnotherCounter.vue";
import Result from "./components/Result.vue";
import anotherResult from "./components/AnotherResult.vue";

export default {
  computed: {
    value() {
      return this.$store.getters.value;
    },
    value1: {
      get() {
        return this.$store.getters.value;
      },
      set(val) {
        this.$store.dispatch("updateValue", val);
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    }
  },
  data() {
    return {
      counter: 0
    };
  },
  components: {
    appCounter: Counter,
    appAnotherCounter: anotherCounter,
    appResult: Result,
    appAnotherResult: anotherResult
  }
};
</script>

