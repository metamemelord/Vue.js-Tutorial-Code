<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>
            Username:&nbsp;
            <input class="form-control" type="text" v-model="user.username">
          </label>
        </div>
        <div class="form-group">
          <label>
            Password:&nbsp;
            <input class="form-control" type="password" v-model="user.password">
          </label>
        </div>
        <button class="btn" :class="submitClass" @click="submit">Submit</button>
        <hr>
        <label>Node: </label><input type="text" placeholder="Node" class="form-control" @change="fetchClass='btn-primary'; users=[]" v-model="node" required>
        <br>
        <button class="btn" :class="fetchClass" @click="fetchData">Fetch Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, idx) in users"
            :key="idx"
          >{{u.username}} - {{u.password}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        username: "lol",
        password: "lol"
      },
      submitClass: "btn-primary",
      fetchClass: "btn-primary",
      resource: {},
      resource2: {},
      users: [],
      node: "data"
    };
  },
  methods: {
    submit() {
      // this.$http
      //   .post("data.json", this.user)
      //   .then(
      //     res => {
      //       this.$data.submitClass = "btn-success";
      //       return res.json();
      //     },
      //     error => {
      //       this.$data.submitClass = "btn-danger";
      //     }
      //   )
      //   .then(data => {
      //     console.log(data);
      //   });
      this.resource.save({}, this.user);
      this.resource2.saveAlt(this.user);
    },
    fetchData() {
      // this.$http
      //   .get("data.json")
      //   .then(
      //     res => {
      //       this.fetchClass = "btn-warning";
      //       return res.json();
      //     },
      //     error => {
      //       this.fetchClass = "btn-danger";
      //     }
      //   )
      //   .then(data => {
      //     this.users = data;
      //   });
      this.resource2
        .getData({ node: this.node })
        .then(
          res => {
            return res.json();
          },
          error => {
            this.fetchClass = "btn-danger";
          }
        )
        .then(data => {
          if(data === null) {
            this.fetchClass = "btn-warning";
          } else {
            this.fetchClass = "btn-success";
            this.users = data;
          }
        });
    }
  },
  created: function() {
    const customActions = {
      saveAlt: {
        method: "POST",
        url: "data2.json"
      },
      getData: {method: 'GET'}
    };
    this.resource = this.$resource("data.json");
    this.resource2 = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>
