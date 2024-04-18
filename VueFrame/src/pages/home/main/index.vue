<template>
    <div>
       <div class="bottom-nav">
            <ul class="home">
                <li></li>
                <li>首页</li>
            </ul>
       </div>
    </div>
</template>

<script>
   
    export default {
        name: "index",
        
    }
</script>

<style scoped>
.bottom-nav{
    width: 100%;
    height: 1.2rem;
    background-color: #ffffff;
    /* 倒影 */
    box-shadow: 0 0 10px #efefef;
    position: fixed;
    z-index: 10;
    left: 0;
    bottom: 0%;
}
</style>