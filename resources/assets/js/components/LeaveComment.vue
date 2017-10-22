<template>
    <div id="comment-modal">
        <p>跟{{to}}說點話</p>
        <form @submit.prevent="validateBeforeSubmit">
            <label for="from">留言者</label>
            <input type="text" name="from" v-model="from" :class="{ 'form-control': true, 'is-danger': errors.has('from')}" v-validate="'required'">
            <p v-show="errors.has('from')" class="help is-danger">留言者給我寫清楚！</p>
            <label for="content">內容</label>
            <textarea name="content" v-model="content" :class="{ 'form-control': true, 'is-danger': errors.has('content')}" v-validate="'required'">

            </textarea>
            <p v-show="errors.has('content')" class="help is-danger" >內容給我寫好寫滿！</p>
            <div class="row">
                <input type="submit" value="送出" class="btn btn-lg btn-primary">
                <router-link :to="{ name: 'index'}" class="btn btn-primary btn-lg" >離開</router-link>
            </div>

        </form>
    </div>
</template>
<style>
    .row{
        margin-top: 20px;
    }
    input.is-danger{
        border: 1px solid #ff3860;
    }
    p.is-danger{
        color: #ff3860;
    }
</style>
<script>

    export default{
        data(){
            return{
                content: '',
                from: ''
            }
        },
        computed: {
            to: function(){
                return this.$route.params.user;
            }
        },
        components:{

        },
        methods: {
            validateBeforeSubmit() {
              this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$http.post('/api/comment', {
                        to: this.to,
                        from: this.from,
                        content: this.content}).then(resp => {
                            console.log(resp.body);
                            this.$router.back();
                        });
                    return;
                }


                });
            }
        }
    }
</script>
