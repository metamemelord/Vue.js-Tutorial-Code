<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName()}}</p>
        <p>User Age: {{age}}</p>
        <button @click="resetName()">Reset name</button>
        <button @click="resetNameParent()">Reset name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: {name: String, resetNameParent: Function, age:Number},
    methods: {
        switchName: function() {
            return this.name.split("").reverse().join("");
        }, resetName: function() {
            this.name = "LOL";
            this.$emit("nameChange", this.name);
        }
    }, created() {
        eventBus.$on('ageChanged', (data) => {
            this.age = data;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
