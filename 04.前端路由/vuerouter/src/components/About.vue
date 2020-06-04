<template>
  <div>
    <h2>关于</h2>
    <p>关于介绍！</p>
  </div>
</template>

<script>
    export default {
        name: "about",
        /*created() {
          console.log('created');
          document.title='关于'
        },*/
        mounted() {
          console.log('mounted');
        },
        updated() {
          console.log('updated');
        }
    }
</script>
<style scoped>
</style>
