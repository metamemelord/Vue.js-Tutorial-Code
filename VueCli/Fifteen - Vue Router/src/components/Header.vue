<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Test App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item"><router-link to="/" tag="a" class="nav-link" active-class="active">Home</router-link> </li>
      <li class="nav-item"><router-link to="/user" tag="a" class="nav-link" active-class="active">User</router-link> </li>
    </ul>
  </div>
</nav>
</template>
