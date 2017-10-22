<template>
    <div id="index">
        <h1>栗雞掰</h1>
        <div class="row">
            <div class="col-md-3 col-md-offset-3">
                <div class="thumbnail">
                    <img src="https://graph.facebook.com/100006626567064/picture?type=square&width=500&height=500" class="img-circle" width="200" height="200">
                    <div class="caption">
                        <h3>栗子</h3>
                        <p>2016 - 2017</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="https://graph.facebook.com/100002465127567/picture?type=square&width=500&height=500" class="img-circle" width="200" height="200">
                    <div class="caption">
                        <h3>雞雞</h3>
                        <p>2016 - 2017</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #index{
        text-align:center;
        margin-top: 60px;
    }

    img{
        filter: grayscale(100%);
    }
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
