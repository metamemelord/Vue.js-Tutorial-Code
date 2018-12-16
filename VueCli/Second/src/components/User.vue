<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User! And I am {{age}}</p>
        <button @click="changeUser">Change name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name" 
                    @nameChange="name=$event"
                    :resetNameParent="resetName"
                    :age="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :age="age"
                    @ageChanged="age=$event"
                ></app-user-edit>
             </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: "Gaurav",
                age: 22
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeUser: function() {
                this.name = "HellO!"
            },
            resetName: function() {
                this.name = "Gaurav"
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
