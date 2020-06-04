<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <!--动态绑定class改变颜色-->
        <!-- <div :class="{active:isActive}">
            <slot name="item-text"></slot>
        </div>-->
        <!--动态绑定style改变颜色-->
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
                // isActive:true
            }
        },
        computed:{
            isActive(){
                //判断路由活跃的path和继承的path是否相等
                return this.$route.path.indexOf(this.path) !==-1
            },
            activeStyle(){
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;

        box-shadow: 1px -3px 1px rgba(100,100,100,0.01);
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
    /*.active{
        color: red;
    }*/
</style>