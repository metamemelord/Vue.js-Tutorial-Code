<template>
  <div>
    <hr>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="lol">Increment</button>
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
      this.$store.commit("increment");
    },
    ...mapActions(["increment", "decrement"])
    // increment(by) {
    //     this.$store.dispatch('increment', by);
    // }
  }
};
</script>