<template>
  <NavBar />
  <div id="page-container">
    <h1>Welcome...</h1>
    <br>
    <ModalExample v-if="showModal" theme="red" @close="toggleModal">
      <template v-slot:links>
        <a href="https://www.arsenal.com/">Official Arsenal Website</a>
      </template>
      <h1>{{ header }}</h1>
    </ModalExample>
    <br>
    <button id="modal-button" @click="toggleModal" >Love Arsenal?</button>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ModalExample from './components/Modals/ModalExample.vue';

export default {
  name: 'App',
  props: [],
  components: {
    NavBar, ModalExample
  },
  data() {
    return {
      showModal: false,
      header: "COYG!!"
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  },
  
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

  #modal-button {
    position: relative;
    padding: 5px;
    height: fit-content;
    width: fit-content;
  }

  #page-container h1 {
    position: relative;
    height: max-content;
    width: auto;
  }
  button {
    color: white;
    padding: 8px;
    border: 1px solid black;
    background: rgb(6, 54, 114);
    border-radius: 4px;
    margin: 10px;
    font-weight: 600;
  }

  button:hover {
    cursor: pointer;
    color: black;
    border: 1px solid rgb(219, 0, 7);
    background: white;
  }
</style>
