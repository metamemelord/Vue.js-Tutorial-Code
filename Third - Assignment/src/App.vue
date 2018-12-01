<template>
  <div class="container">
    <header-component></header-component>
    <hr>
    <middle-component></middle-component>
    <hr>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import MiddleComponent from './components/Middle.vue'
import FooterComponent from './components/Footer.vue'

export default {
  components: {
    'header-component': HeaderComponent,
    'middle-component': MiddleComponent,
    'footer-component': FooterComponent,
  }
}
</script>

<style>
</style>
