<template>
    <header>
        <a href="/">Post</a>
        <a href="http://localhost:5173/">Home</a>
    </header>
    <div>
        <nav>
            <RouterLink to="/">hello world</RouterLink>
        </nav>
        
    </div>
</template>

<script>
    import {RouterLink} from 'vue-router'
    export default {
    name:'HeaderComp'
}
</script>

<style scoped>
header{
    background-color: aqua;
    height: 50px;
    width: 100%;

}
</style>