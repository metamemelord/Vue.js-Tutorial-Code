<template>
<div>
    <h3>The New Component</h3>
    <button @click="counter++">Add 1</button>
    <span>{{counter}}</span>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        }
    },
    deactivated: function() {
        console.log("Inactive");
    },
    activated: function() {
        console.log("Active");
    }
}
</script>

<style scoped>
</style>
