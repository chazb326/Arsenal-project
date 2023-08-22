<template>
    <li>
        <button @click="closeHamburger">{{ text }}</button>
    </li>
</template>

<script>
export default {
    props: ['text'],
    methods: {}
}
</script>

<style scoped>
    li {
        display: inline;
        margin: 0px;
    }

    button {
        text-decoration: none;
        text-align: center;
        padding: 8px 8px;
        background-color: rgb(219, 0, 7);
        font-size: 20px;
        color: white;
        border-left: 3px solid rgb(219, 0, 7);
        border-right: 3px solid rgb(219, 0, 7);
        border-radius: 2px;
        border-top: none;
        border-bottom: none;
        transition-duration: 0.2s;
    }

    button:hover {
        background-color:rgb(240, 240, 240);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
        border-top: none;
        border-bottom: none;
        border-radius: 4px;
        transition-duration: 0.2s;
    }

    button:active {
        background-color: rgb(6, 54, 114);
        color: rgb(0, 0, 0);
        font-size: 20px;
        border-left: 3px solid rgb(156, 130, 74);
        border-right: 3px solid rgb(156, 130, 74);
        border-top: none;
        border-bottom: none;
    }    
</style>