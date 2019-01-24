<template>
  <div id="posts">
    <Compteur title="Nombre de posts à afficher" :counter="counter"> </Compteur>
  </div>
</template>

<script>
import Compteur from './Compteur.vue'

export default {
  data () {
    return {
      counter: 8
    }
  },
  components: {Compteur},
  methods: {
    increment () {
      if (this.counter === 10) {
        return this.counter
      }
      this.counter++
      return this.counter
    },
    decrement () {
      return this.counter--
    },
    reset () {
      this.counter = 0
    }
  }
}
</script>
