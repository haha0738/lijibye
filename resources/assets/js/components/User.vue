<template>
    <div id="user">
        <router-view></router-view>
        <div class="row">
        <quit-profile class="col-md-10 col-md-offset-1" v-if="user != null" :user-id="user.id" :user-name="user.name" :fb-id="user.fbId" :youtube-id="user.youtubeId"></quit-profile>
        </div>
        <div class="row col-md-10 col-md-offset-1">
        <div class="media" v-for="comment in comments" :key="comment.id">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" width="64" height="64" src="https://teameowdev.files.wordpress.com/2016/04/avatar24-01.png?w=300&h=300" alt="">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{comment.from}}</h4>
                {{comment.content}}
            </div>
        </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import QuitProfile from './QuitProfile'
    export default{
        data(){
            return{
                user: null,
                comments: null,
            }
        },
        components:{
            QuitProfile
        },
        mounted() {
            this.$users.forEach(v => {
                if(v.id == this.$route.params.user)
                {
                    this.user = v;
                    return;
                }

            }, this);

            this.$http.get('/api/comment/' + this.$route.params.user).then(resp => {
                this.comments = resp.body;
            });
        },
        computed:{

        }
    }
</script>
