<template>
    <div>
      <PostsComp/>
    </div>
</template>
  
<script>
import PostsComp from '../components/PostsComp.vue';
    export default {
      components:{
        PostsComp
      }
    }
// import { usePostStore } from '../stores/postStore'
// import { RouterLink } from 'vue-router';
// export default{
//     components:{
//         RouterLink
//     },
//     data(){
//         return{
//             pages:[]
//             postStore: usePostStore(),
//         }
//     },
//     methods:{

//     },
//     }
</script>
  
<style scoped>
  body,html{
    height: 100%;
    width: 100%;
    background-color: black;
  }
</style>