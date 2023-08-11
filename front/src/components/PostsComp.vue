<template>
    <div class="page" v-for="page in pages" :key='page.id'>
        <h1>{{ page.title }}</h1>
        <p>{{ page.content }}</p>
       <!-- <p>{{ page.time_add }}</p>-->

    </div>
    <nav>
        <RouterLink to="/"></RouterLink>
    </nav>
</template>

<script>
import {RouterLink} from 'vue-router'
export default{
    name:'PostsComp',
    data(){
        return {
            pages:[ ]
        }
    },
    async mounted(){
        const data = await fetch('http://127.0.0.1:8000/api/v1/')
        this.pages = await data.json()
    },
}
</script>
<style scoped>
.page{
    height: 150px;
    width: auto;
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
}
</style>