<template>
  <div>
    <h1>Server Status: {{status}}</h1>
    <app-servers v-for="server in 5"></app-servers>
  </div>
</template>

<script>
export default {
  data: function() {
    return { status: "Normal" };
  }
};
</script>

<style>
</style>
