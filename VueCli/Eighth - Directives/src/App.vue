<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Lmfao'"></p>
        <p v-html="'<strong>Lmfao</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'red'">Color me</p>
        <p v-highlight.delayed="'red'">Color me</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor:'green', interval: 100 }">Color me</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        //el.style.backgroundColor = 'green';
        //el.style.backgroundColor = binding.value;
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background")
                el.style.backgroundColor = currentColor;
              else el.style.color = currentColor;
            }, binding.value.interval);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background")
              el.style.backgroundColor = binding.value;
            else el.style.color = binding.value;
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
