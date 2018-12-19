<template>
  <div class="container">
    <div class="row">
      <component :is="activeComponent">
        <slot>
          <h1>I am a {{activeColor}} division!</h1>
          <h3>I kinda like it!</h3>
        </slot>
      </component>
      <span>
        <hr>
        <input type="radio" name="color-selector" v-model="activeColor" id="red-radio" value="red">&nbsp;
        <label for="red-radio">Red</label>
        <hr>
        <input type="radio" name="color-selector" v-model="activeColor" id="green-radio" value="green">&nbsp;
        <label for="green-radio">Green</label>
        <hr>
        <input type="radio" name="color-selector" v-model="activeColor" id="blue-radio" value="blue">&nbsp;
        <label for="blue-radio">Blue</label>
        <hr>
      </span>
    </div>
  </div>
</template>

<script>
import redComponent from "./components/Red.vue";
import greenComponent from "./components/Green.vue";
import blueComponent from "./components/Blue.vue";
export default {
  name: "app",
  data() {
    return {
      activeColor: "red",
      activeComponent: "red-component"
    };
  },
  components: {
    redComponent: redComponent,
    greenComponent: greenComponent,
    blueComponent: blueComponent
  },
  watch: {
    activeColor: function() {
      this.activeComponent = this.activeColor + "-component";
    }
  }
};
</script>

<style>
</style>
