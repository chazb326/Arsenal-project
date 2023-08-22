<template>
  <NavBar />
  <div id="page-container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style>
  #page-container {
    position: relative;
    top: 100px;
    width: 100%;
    height: max-content;
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
  }
</style>

