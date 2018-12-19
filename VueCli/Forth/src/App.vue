<template>
  <div id="app" class="container">
    <div class="row"></div>
    <div class="col6" style="background: green" >lol</div>
    <button @click="selectedComponent='quote'">Quote</button>
    <button @click="selectedComponent='app-author'">Author</button>
    <button @click="selectedComponent='app-new'">New Component</button>
    <br>
    <keep-alive>
      <component :is="selectedComponent">
      </component>
    </keep-alive>
    <!-- <quote :quote="lol">
      <hr>
      <h2 slot="title">{{lol}}</h2>
      <p>{{selectedComponent}}</p>
      <hr>
    </quote> -->
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import appNew from "./components/New.vue";
import appAuthor from "./components/Author.vue";

export default {
  data: function() {
    return {
      lol: "",
      selectedComponent: "quote"
    };
  },
  components: {
    quote: Quote,
    appAuthor: appAuthor,
    appNew: appNew
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
