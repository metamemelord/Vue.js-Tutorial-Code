<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Save & Load you data</h6>
    <h6>Click 'End Day' to begin a new day!</h6>
    <hr>
    <p>Your funds: {{ funds}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>