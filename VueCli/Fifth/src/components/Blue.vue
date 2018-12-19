<template>
  <div class="col-12" id="blue">
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
#blue {
    vertical-align: middle;
    height: 200px;
    background: turquoise;
    border: 2px solid blue;
}
</style>
