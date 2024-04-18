import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router=new Router({
    mode:"history",//1、hash哈希：有#号。2、history历史：没有#号
    base:process.env.BASE_URL, //自动获取根目录路径
    scrollBehavior:(to,from,position)=>{
        if(position){
            return position
        }else{
            return {x:0,y:0}
        }
    },
    routes:[
        {
            path:"/",
            name:"main",
            component:()=>import("./pages/home/main"),//路由懒加载解决首屏加载慢，性能优化
            meta:{keepAlive:true}  //开启缓存或关闭缓存
        },
        {
            path:"/news",
            name:"news",
            component:()=>import("./pages/home/news")
        },
        {
            path:"/news/details/:id/:title",
            name:"news-details",
            component:()=>import("./pages/home/news/details")
        },
        {
            path:"/news/article",
            name:"news-article",
            component:()=>import("./pages/home/news/article")
        },
        {
            path:"/login",
            name:"login",
            component:()=>import("./pages/home/login"),
            meta:{keepAlive:false}
        },
        {
            path:"/ucenter",
            name:"ucenter",
            component:()=>import("./pages/user/ucenter"),
            // meta:{auth:true}
            // beforeEnter:(to,from,next)=>{
            //     if (Boolean(localStorage['isLogin'])){
            //         next();
            //     } else{
            //         next("/login");
            //     }
            //
            // }
        },
        {
            path:"/goods",
            name:"goods",
            component:()=>import("./pages/home/goods"),
            redirect:"/goods/item",//页面重定向
            children:[
                {
                    path:"item",
                    name:"goods-item",
                    component:()=>import("./pages/home/goods/item")
                },
                {
                    path:"details",
                    name:"goods-details",
                    component:()=>import("./pages/home/goods/details")
                },
                {
                    path:"review",
                    name:"goods-review",
                    component:()=>import("./pages/home/goods/review")
                }
            ]
        },
        {
            path:"/classify",
            name:"classify",
            component:()=>import("./pages/home/classify")
        },
        {
            path:"/skip",
            name:"skip",
            component:()=>import("./pages/skip")
        },
    ]
});
// router.beforeEach((to,from,next)=>{
//     // console.log(to);
//     if (to.meta.auth){
//         if (Boolean(localStorage['isLogin'])){
//             next();
//         } else {
//             next("/login");
//         }
//     } else {
//         next();
//     }
// });
export default router;