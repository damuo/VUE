<template>
    <div>
        <h2 class="ti">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <Cpn></Cpn>
    </div>
</template>
<script>
    import Cpn from './Cpn'

    export default {
        name: "App",
        components:{
            Cpn
        },
        data(){
            return{
                message:'hello World!'
            }
        },
        methods:{
            btnClick(){
                alert("点击按钮!")
            }
        }
    }
</script>
<style scoped>
.ti{
    color: green;
}
</style>