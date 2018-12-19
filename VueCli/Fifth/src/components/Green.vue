<template>
  <div class="col-12" id="green">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#green {
    height: 200px;
    background: lightgreen;
    border: 2px solid green;
}
</style>
