<template>
  <div>
    <hr>
    <span>Another Counter</span>
    <br>
    <button class="btn btn-primary" @click="increment">Increment without args</button>
    <button class="btn btn-primary" @click="lol">Increment with 10 (lol)</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="increment(30)">Increment using actions</button>
    <hr>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  methods: {
    // ...mapMutations([
    //     'increment',
    //     'decrement'
    // ]),
    lol() {
      console.log("sed");
      this.$store.commit("increment", 10);
    },
    ...mapActions(["increment", "decrement"])
    // increment(by) {
    //     this.$store.dispatch('increment', by);
    // }
  }
};
</script>