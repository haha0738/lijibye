<template>
    <div id="index">
        <router-view></router-view>
        <h1>栗雞掰</h1>
        <div class="row">
            <div class="col-md-3"></div>
            <quit-profile v-for="user in users" :key="user.name" class="col-md-3 " :fb-id="user.fbId" :user-id="user.id" :user-name="user.name" :youtube-id="user.youtubeId"></quit-profile>
        </div>
    </div>
</template>
<style scoped>
    #index{
        text-align:center;
        margin-top: 60px;
    }


</style>
<script>
    import QuitProfile from './QuitProfile'
    export default{
        data(){
            return{

            }
        },
        methods:{
            saySomething: function(event){
                alert('懶得做，等我想到在做');
            },
            watch: function(event){

            },
        },
        components:{
            QuitProfile
        },
        mounted(){
            //$(".js-modal-btn").modalVideo();
        },
        computed: {
            users: function(){
                return this.$users;
            }
        }
    }
</script>
