<template>
  <div>
    <HeaderComp/>
    <RouterView/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import {RouterView} from 'vue-router'
  export default {
    components:{
      HeaderComp
    }
  }
</script>

<style scoped>

</style>