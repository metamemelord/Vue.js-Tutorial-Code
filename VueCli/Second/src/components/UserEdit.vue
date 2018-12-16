<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <input type="text" v-model="age">
        <span>LOL: {{age}}</span>
    </div>
</template>

<script>
export default {
    props: {
        age: Number
    },
    watch: {
        age: function() {
            var age = parseInt(this.age);
            this.$emit('ageChanged', age);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
