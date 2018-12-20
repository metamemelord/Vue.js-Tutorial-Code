<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <h1 v-myon:click="addO">{{message}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Hello!"
    };
  },
  methods: {
    addO: function() {
      setInterval(() => {
        this.message = this.message.substr(0, this.message.length - 1);
        this.message += "o!";
      }, 300);
    }
  },
  directives: {
    myon: {
      bind(el, binding, vnode) {
        var okay = binding.value;
        if (binding.arg === "click" && okay) {
          el.addEventListener(binding.arg, okay);
        } else {
          console.log("Aww sed!");
        }
      }
    }
  }
};
</script>

<style>
</style>
