<template>
    <div id="loading">
        <img src="../assets/images/arsenal-logo.svg" alt="arsenal">
        <h2>{{ this.text }}</h2>
    </div>
</template>

<script>
export default {
    props: ['text'],
    methods: {}
}
</script>

<style>
    div#loading {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    div#loading img {
        margin-top: 100px;
        width: auto;
        height: 80px;
    }
    h2 {
        position: relative;
        top: 20px;
        margin-bottom: 30px;
    }
</style>