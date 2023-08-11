<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink> -
            <RouterLink to="about">Events</RouterLink>
        </nav>
        </header>
</template>

<script>
    import {RouterLink} from 'vue-router'
    export default {
    name:'HeaderComp'
}
</script>

<style scoped>


header{
    background-color: rgb(15, 15, 15);
    height: 50px;
    width: 100%;
    border-radius: 15px;
    display: flex;
}

a{
    text-decoration: none;
    font-size: larger;
    color: white;
    margin: 15px 10px 0px 0px;
}

a:hover{
    color: rgb(97, 97, 238);
}

nav{
    height: 50px;
    width: 300px;
    margin: 10px;
}
</style>