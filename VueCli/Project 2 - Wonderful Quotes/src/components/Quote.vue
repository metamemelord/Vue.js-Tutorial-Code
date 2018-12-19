<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: seagreen;
  border: 2px lightcoral solid;
  border-radius: 7.5px;
}

.quote {
  cursor: pointer;
  transition: 0.5s all;
}

.quote:hover {
  background: lightcoral;
  color: white;
}
</style>
