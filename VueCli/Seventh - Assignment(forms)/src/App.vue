<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="form-group col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <input type="text" placeholder="First name" class="form-control" v-model="fname">
        </div>
        <div class="form-group col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <input type="text" placeholder="Last name" class="form-control" v-model="lname">
        </div>
        <div class="form-group col-xs-12 col-sm-12 col-sm-offset-6 col-md-12 col-md-offset-6">
          <input
            type="text"
            placeholder="Full name"
            class="form-control disabled"
            :value="getFullName()"
            readonly
          >
        </div>
        <div class="form-group col-xs-12 col-sm-12 col-sm-offset-6 col-md-12 col-md-offset-6">
          <input type="email" placeholder="Email" class="form-control" v-model="email">
        </div>
        <div class="form-group col-xs-12 col-sm-12 col-sm-offset-6 col-md-12 col-md-offset-6">
          <input type="password" placeholder="Password" class="form-control" v-model="password">
        </div>
        <div class="form-group col-xs-12 col-sm-12 col-sm-offset-6 col-md-12 col-md-offset-6">
          <label>
            <db-switch :value="storeToDb" @input="storeToDb=$event">
              <slot>
                <strong>Store in DB?</strong>&nbsp;
              </slot>
            </db-switch>
          </label>
        </div>
        <div class="form-group col-xs-12 col-sm-12 col-sm-offset-6 col-md-12 col-md-offset-6">
          <input
            class="btn btn-dark"
            @click.prevent="isSubmitted=true"
            type="submit"
            value="Submit"
          >
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fname}} {{lname}}</p>
            <p>Mail: {{email}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{storeToDb}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dbswitch from "./components/Switch.vue";

export default {
  data: function() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: "",
      storeToDb: false,
      isSubmitted: false
    };
  },
  methods: {
    getFullName: function() {
      return this.fname.length && this.lname.length
        ? this.fname + " " + this.lname
        : "";
    }
  },
  components: {
    dbSwitch: dbswitch
  }
};
</script>

<style>
</style>
