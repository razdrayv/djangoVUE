<template>
  <div>
    <HeaderComp/>
    <RouterView/>
  </div>
</template>

<script>
import {RouterView} from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
export default {
      components:{
        HeaderComp,}
        }
</script>

<style scoped>
body,html{
  height: 100%;
  width: 100%;
  background-color: black;
}
</style>