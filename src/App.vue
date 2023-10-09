<template>
  <NavBar />
  <div id="page-container">
    <router-view></router-view>
  </div>
  <!-- TODO: make a results page with match stats and stuff (maybe a drawer?), use data from Arsenal website to fill out the player details view -->
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

