<template>
    <div>
        <ul>
            <li><router-link to="/news/details/1/新闻详情1">新闻详情1</router-link></li>
            <li><router-link to="/news/details/2/新闻详情2">新闻详情2</router-link></li>
            <li @click="goPage('/news/article?id=3&title=新闻详情3')">新闻详情3</li>
            <li @click="goPage('/news/article?id=4&title=新闻详情4')">新闻详情4</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "news",
        methods:{
            goPage(url){
                //this.$router.push({name:"news-article",params:{id:3,title:"新闻详情3"}});
                // this.$router.push({path:"/news/article",query:{id:3,title:"新闻详情3"}})
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped>

</style>