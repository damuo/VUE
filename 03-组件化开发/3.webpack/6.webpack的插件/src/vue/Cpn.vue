<template>
    <div>
        <h2>我是Cpn组件标题</h2>
        <p>我是Cpn组件内容</p>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return{
                name:'Cpn组件'
            }
        }
    }
</script>

<style scoped>

</style>