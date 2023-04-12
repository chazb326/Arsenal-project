<template>
    <li>
        <a href="#">{{ text }}</a>
    </li>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped>
    li {
        display: inline;
        margin: 5px;
    }

    a {
        text-decoration: none;
        text-align: center;
        padding: 5px 8px;
        background-color: rgb(239, 1, 7);
        font-size: 20px;
        color: white;
        border-left: 3px solid rgb(239, 1, 7);
        border-right: 3px solid rgb(239, 1, 7);
        border-radius: 2px;
        transition-duration: 0.2s;
    }

    a:hover {
        background-color:rgb(240, 240, 240);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
        border-radius: 4px;
        transition-duration: 0.2s;
    }

    a:active {
        background-color: rgb(6, 54, 114);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
    }    
</style>