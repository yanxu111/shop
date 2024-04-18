<template>
    <div>
        <button type="button" @click="$router.go(-1)">返回</button><br/>
        ID:{{$route.params.id}},标题{{$route.params.title}}
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
            console.log(this.$route.params.id,this.$route.params.title);
        }
    }
</script>

<style scoped>

</style>