<template>
    <!--使用tabbar组件-->
    <tab-bar>
        <tab-bar-item path="/home" activeColor="pink">
            <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="pink">
            <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="pink">
            <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="pink">
            <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    /*导入tabbar组件*/
    import TabBar from 'components/tabbar/TabBar'
    /*导入tabbaritem组件*/
    import TabBarItem from "components/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            //挂载tabbar组件
            TabBar,
            //挂载TabBarItem组件
            TabBarItem
        }
    }
</script>

<style scoped>

</style>