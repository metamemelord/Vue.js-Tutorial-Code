<template>
  <div>
    <span>Another result</span>
    <p>Counter is: {{ counter }}</p>
    <p>Counter is: {{ clicks }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.doubleCounter;
    },
    clicks() {
      return this.$store.getters.stringCounter;
    }
  }
};
</script>