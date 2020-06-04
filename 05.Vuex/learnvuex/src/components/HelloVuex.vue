<template>
    <p>$state获取:{{$store.state.counter}}</p>
</template>

<script>
    export default {
        name: "HelloWorld",
        props:{
            counter:Number
        }
    }
</script>

<style scoped>

</style>