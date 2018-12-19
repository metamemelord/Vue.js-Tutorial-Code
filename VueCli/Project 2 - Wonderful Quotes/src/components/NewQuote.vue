<template>
  <div class="row">
    <form class="form">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 col-lg-12 form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" cols="100" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 col-lg-12 form-group">
        <input type="submit" class="btn btn-primary" value="Add" @click.prevent="createNew()">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew: function() {
      if (this.quote.length) {
        this.$emit("quoteAdded", this.quote);
        this.quote = "";
      }
    }
  }
};
</script>

<style>
</style>
