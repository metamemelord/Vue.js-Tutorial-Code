<template>
  <div class="col-12" id="red">
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
#red {
    height: 200px;
    background: lightcoral;
    border: 2px solid red;
}
</style>
