<template>
  <div id="app">
    <input v-model="value">
    <p>{{lol}}</p>
    <p>lol</p>
    <!-- <quote :quote="value"></quote> -->
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  data: {
    lol: "hello"
  },
  components: {
    quote: Quote
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
