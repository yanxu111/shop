<template>
    <div>
        <button type="button" @click="$router.go(-1)">返回</button><br/>
        ID:{{$route.query.id}},标题{{$route.query.title}}
    </div>
</template>

<script>
    export default {
        name: "news-details",
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        },
        created() {
            // console.log(this.$route.params.id,this.$route.params.title);
            console.log(this.$route.query.id,this.$route.query.title,this.$route.query.type);
        }
    }
</script>

<style scoped>

</style>