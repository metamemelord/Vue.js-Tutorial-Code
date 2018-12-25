<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded ID: {{$route.params.id}}</p>
    <button class="btn btn-info" @click="navigateToHome">Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
