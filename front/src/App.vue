<template>
  <div>
    <HeaderComp/>
    <PostsComp/>
    <RouterView/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import PostsComp from './components/PostsComp.vue';
import {RouterView} from 'vue-router'
  export default {
    components:{
      HeaderComp,
      PostsComp
    }
  }
</script>

<style scoped>
body,html{
  height: 100%;
  width: 100%;
  background-color: black;
}
</style>