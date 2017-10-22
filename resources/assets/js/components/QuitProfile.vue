<template>
    <div>
        <div class="thumbnail">
            <router-link :to="{ name: 'user', params: { user: userId }}">
                <img :src="'https://graph.facebook.com/' + fbId + '/picture?type=square&width=500&height=500'" class="img-circle" width="200" height="200">
            </router-link>
            <div class="caption">
                <h3>{{userName}}</h3>
                <p>2016 - 2017</p>
                <router-link :to="{ name: 'comment', params: { user: userId }}" class="btn btn-primary btn-lg" >說句話</router-link>

                <button class="btn btn-primary btn-lg js-modal-btn" :data-video-id="youtubeId">看影片</button>
            </div>
        </div>
    </div>
</template>
<style>
    img{
        filter: grayscale(100%);
    }
    .thumbnail{
        text-align:center;
    }
</style>
<script>

    export default{
        data(){
            return{

            }
        },
        components:{

        },
         mounted(){
            $(this.$el).find('.js-modal-btn').modalVideo();
        },
        props: [
            'fbId',
            'youtubeId',
            'userName',
            'userId'
        ]
    }
</script>
