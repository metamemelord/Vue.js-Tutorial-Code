<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import productListOne from "./components/ProductListOne.vue";
import productListTwo from "./components/ProductListTwo.vue";
export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    productListOne,
    productListTwo
  }
};
</script>

<style>
body {
  color: #555;
}
</style>
