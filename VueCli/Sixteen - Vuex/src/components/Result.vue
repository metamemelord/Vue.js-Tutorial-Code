<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Counter is: {{ stringCounter }}</p>
    <p>Counter is: {{ ourOwn }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  computed: {
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
    }),
    ourOwn() {
      return Math.floor(Math.random(10) + this.$store.state.counter);
    }
  }
};
</script>