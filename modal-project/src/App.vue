<template>
  <h1>{{title}}</h1>
  <p>Welcome ...</p>
  <teleport to="#modals" v-if="showModal">
    <Modal theme='sale' @close="toggleModal">
      <h1>Sign up for free giveaway</h1> 
      <p>grab your cool products here</p>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More infos</a>
      </template>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if= "showModal2">
    <Modal @close="toggleModal2">
      <h2>Win free Cash Money!!</h2>
      <p>click the link below to start earning</p>
      <template v-slot:links>
        <a href="#">win some cash prize!</a>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal">show Modal</button>
  <br>
  <button @click="toggleModal2">show Modal 2</button>

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for free giveaway",
      text: "grab your cool products here",
      showModal: false,
      showModal2:  false
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
