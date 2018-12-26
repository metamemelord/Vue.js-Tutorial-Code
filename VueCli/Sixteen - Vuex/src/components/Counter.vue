<template>
  <div>
    <span>Main counter</span>
    <br>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({value: 10, delay: 1000})"
    >Async Increment</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    increment() {
      console.log(this.$store.state.counter);
      this.$store.state.counter += 1;
    },
    decrement() {
      this.$store.state.counter -= 1;
    },
    ...mapActions(["asyncIncrement"])
  }
};
</script>