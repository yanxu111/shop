<template>
  <div>
    <!-- 启用缓存，单独设置需要缓存加载的页面 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    @import "./assets/css/common/public.css";
</style>
