<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Counter is: {{ stringCounter }}</p>
    <p>Counter is: {{ ourOwn }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
        'doubleCounter',
        'stringCounter'
    ]),
    ourOwn() {
        return Math.floor(Math.random(10) + this.$store.state.counter);
    }
  }
};
</script>